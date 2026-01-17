import React, { useState, useEffect, memo } from 'react';
import { analytics } from '@/utils/analytics';

interface Card {
  id: number;
  content: string;
  matched: boolean;
  flipped: boolean;
}

const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const cardPairs = [
    { term: 'AI', definition: 'Artificial Intelligence' },
    { term: 'ML', definition: 'Machine Learning' },
    { term: 'NN', definition: 'Neural Network' },
    { term: 'DL', definition: 'Deep Learning' },
    { term: 'NLP', definition: 'Natural Language Processing' },
    { term: 'CV', definition: 'Computer Vision' },
    { term: 'RL', definition: 'Reinforcement Learning' },
    { term: 'CNN', definition: 'Convolutional Neural Network' },
  ];

  useEffect(() => {
    if (gameStarted && !gameWon) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameWon]);

  const initializeGame = () => {
    const gameCards: Card[] = [];
    
    // Create pairs
    cardPairs.forEach((pair, index) => {
      gameCards.push(
        { id: index * 2, content: pair.term, matched: false, flipped: false },
        { id: index * 2 + 1, content: pair.definition, matched: false, flipped: false }
      );
    });

    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setTime(0);
    setGameStarted(true);
    setGameWon(false);
  };

  const handleCardClick = (cardId: number) => {
    if (isChecking || flippedCards.length >= 2 || cards[cardId].flipped || cards[cardId].matched) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, flipped: true } : card
    );

    setCards(newCards);
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      setTimeout(() => {
        checkMatch(newFlippedCards, newCards);
      }, 1000);
    }
  };

  const checkMatch = (flipped: number[], currentCards: Card[]) => {
    const [firstId, secondId] = flipped;
    const firstCard = currentCards.find((c) => c.id === firstId);
    const secondCard = currentCards.find((c) => c.id === secondId);

    if (!firstCard || !secondCard) return;

    // Check if they form a pair
    const pairIndex = cardPairs.findIndex(
      (pair) =>
        (pair.term === firstCard.content && pair.definition === secondCard.content) ||
        (pair.term === secondCard.content && pair.definition === firstCard.content)
    );

    if (pairIndex !== -1) {
      // Match found!
      const updatedCards = currentCards.map((card) =>
        flipped.includes(card.id) ? { ...card, matched: true, flipped: true } : card
      );
      setCards(updatedCards);
      setScore((prev) => prev + 10);
      setFlippedCards([]);

      // Check if game is won
      if (updatedCards.every((card) => card.matched)) {
        const finalScore = score + 10; // Add points for this match
        setScore(finalScore);
        setGameWon(true);
        setGameStarted(false);
        // Track game completion with final score
        analytics.trackGameComplete('Memory Match', finalScore, time);
      }
    } else {
      // No match - flip back
      const updatedCards = currentCards.map((card) =>
        flipped.includes(card.id) ? { ...card, flipped: false } : card
      );
      setCards(updatedCards);
    }

    setIsChecking(false);
    setFlippedCards([]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Memory Match Game</h1>
          <p className="text-lg text-gray-600">
            Match AI terms with their definitions!
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{score}</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{moves}</div>
            <div className="text-sm text-gray-600">Moves</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{formatTime(time)}</div>
            <div className="text-sm text-gray-600">Time</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {cards.filter((c) => c.matched).length / 2} / {cardPairs.length}
            </div>
            <div className="text-sm text-gray-600">Pairs Matched</div>
          </div>
        </div>

        {/* Game Board */}
        {!gameStarted && !gameWon ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Play?</h2>
            <p className="text-gray-600 mb-6">
              Match AI terms with their definitions. Find all pairs to win!
            </p>
            <button
              onClick={initializeGame}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 text-lg font-medium"
            >
              Start Game
            </button>
          </div>
        ) : gameWon ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Congratulations!</h2>
            <p className="text-xl text-gray-600 mb-2">You matched all pairs!</p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">Final Score: <span className="font-bold text-indigo-600">{score}</span></p>
              <p className="text-gray-700">Total Moves: <span className="font-bold text-purple-600">{moves}</span></p>
              <p className="text-gray-700">Time: <span className="font-bold text-green-600">{formatTime(time)}</span></p>
            </div>
            <button
              onClick={initializeGame}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 text-lg font-medium"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                aria-label={card.flipped || card.matched ? `Card: ${card.content}` : 'Flip card'}
                disabled={isChecking || card.matched}
                className={`aspect-square rounded-lg shadow-lg cursor-pointer transition-all transform ${
                  card.flipped || card.matched
                    ? 'bg-white scale-100'
                    : 'bg-gradient-to-br from-indigo-500 to-purple-600 hover:scale-105'
                } ${card.matched ? 'opacity-60' : ''} ${
                  isChecking && flippedCards.includes(card.id) ? 'ring-4 ring-yellow-400' : ''
                } disabled:cursor-not-allowed`}
              >
                <div className="h-full flex items-center justify-center p-4">
                  {card.flipped || card.matched ? (
                    <span className="text-lg font-semibold text-gray-900 text-center">
                      {card.content}
                    </span>
                  ) : (
                    <span className="text-4xl">❓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">💡 How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-indigo-800">
            <li>Click on cards to flip them and reveal their content</li>
            <li>Match AI terms with their correct definitions</li>
            <li>Find all pairs to win the game</li>
            <li>Try to complete with fewer moves for a higher score!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(MemoryMatch);


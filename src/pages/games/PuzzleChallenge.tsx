import React, { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface PuzzlePiece {
  id: number;
  content: string;
  correctPosition: number;
  currentPosition: number;
}

const PuzzleChallenge: React.FC = () => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const puzzleSteps = [
    'Data Collection',
    'Data Preprocessing',
    'Feature Engineering',
    'Model Selection',
    'Training',
    'Validation',
    'Evaluation',
    'Deployment',
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
    const shuffled = [...puzzleSteps].sort(() => Math.random() - 0.5);
    const gamePieces: PuzzlePiece[] = shuffled.map((step, index) => ({
      id: index,
      content: step,
      correctPosition: puzzleSteps.indexOf(step),
      currentPosition: index,
    }));

    setPieces(gamePieces);
    setSelectedPiece(null);
    setScore(0);
    setTime(0);
    setGameStarted(true);
    setGameWon(false);
    setHintsUsed(0);
    setShowHint(false);
  };

  const handlePieceClick = (pieceId: number) => {
    if (!gameStarted || gameWon) return;

    if (selectedPiece === null) {
      setSelectedPiece(pieceId);
    } else if (selectedPiece === pieceId) {
      setSelectedPiece(null);
    } else {
      // Swap pieces
      const newPieces = [...pieces];
      const firstIndex = newPieces.findIndex((p) => p.id === selectedPiece);
      const secondIndex = newPieces.findIndex((p) => p.id === pieceId);

      if (firstIndex !== -1 && secondIndex !== -1) {
        [newPieces[firstIndex].currentPosition, newPieces[secondIndex].currentPosition] = [
          newPieces[secondIndex].currentPosition,
          newPieces[firstIndex].currentPosition,
        ];

        setPieces(newPieces);
        setSelectedPiece(null);
        setScore((prev) => prev + 1);

        // Check if puzzle is solved
        if (checkSolution(newPieces)) {
          setGameWon(true);
          setGameStarted(false);
          // Track game completion
          analytics.trackGameComplete('Puzzle Challenge', score, time);
        }
      }
    }
  };

  const checkSolution = (currentPieces: PuzzlePiece[]) => {
    return currentPieces.every(
      (piece) => piece.currentPosition === piece.correctPosition
    );
  };

  const useHint = () => {
    if (hintsUsed >= 3) return;

    setShowHint(true);
    setHintsUsed((prev) => prev + 1);
    setTimeout(() => setShowHint(false), 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const sortedPieces = [...pieces].sort((a, b) => a.currentPosition - b.currentPosition);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Puzzle Challenge</h1>
          <p className="text-lg text-gray-600">
            Arrange the ML pipeline steps in the correct order!
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-teal-600">{score}</div>
            <div className="text-sm text-gray-600">Moves</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-cyan-600">{formatTime(time)}</div>
            <div className="text-sm text-gray-600">Time</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{hintsUsed}/3</div>
            <div className="text-sm text-gray-600">Hints Used</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {pieces.filter((p) => p.currentPosition === p.correctPosition).length} / {puzzleSteps.length}
            </div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
        </div>

        {/* Game Board */}
        {!gameStarted && !gameWon ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🧩</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Solve?</h2>
            <p className="text-gray-600 mb-6">
              Arrange the machine learning pipeline steps in the correct order by clicking to swap pieces.
            </p>
            <button
              onClick={initializeGame}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 text-lg font-medium"
            >
              Start Puzzle
            </button>
          </div>
        ) : gameWon ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🎊</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Puzzle Solved!</h2>
            <p className="text-xl text-gray-600 mb-2">You arranged all steps correctly!</p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">Total Moves: <span className="font-bold text-teal-600">{score}</span></p>
              <p className="text-gray-700">Time: <span className="font-bold text-cyan-600">{formatTime(time)}</span></p>
              <p className="text-gray-700">Hints Used: <span className="font-bold text-orange-600">{hintsUsed}</span></p>
            </div>
            <button
              onClick={initializeGame}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 text-lg font-medium"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Puzzle Pieces */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Arrange the Steps:</h3>
              <div className="space-y-3">
                {sortedPieces.map((piece, index) => {
                  const isCorrect = piece.currentPosition === piece.correctPosition;
                  const isSelected = selectedPiece === piece.id;
                  return (
                    <div
                      key={piece.id}
                      onClick={() => handlePieceClick(piece.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isCorrect
                          ? 'bg-green-50 border-green-500'
                          : isSelected
                          ? 'bg-blue-50 border-blue-500 ring-4 ring-blue-200'
                          : 'bg-gray-50 border-gray-300 hover:border-teal-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                          <span className="text-lg font-medium text-gray-900">{piece.content}</span>
                        </div>
                        {isCorrect && (
                          <span className="text-green-600 font-bold">✓</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hint Button */}
            <div className="flex justify-center">
              <button
                onClick={useHint}
                disabled={hintsUsed >= 3}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                💡 Use Hint ({3 - hintsUsed} left)
              </button>
            </div>

            {/* Hint Display */}
            {showHint && (
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                <p className="text-yellow-900 font-medium">
                  💡 Hint: The correct order starts with "Data Collection" and ends with "Deployment"
                </p>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-teal-900 mb-2">💡 How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-teal-800">
            <li>Click on a piece to select it, then click another to swap their positions</li>
            <li>Arrange all steps in the correct machine learning pipeline order</li>
            <li>Green border indicates a piece is in the correct position</li>
            <li>Use hints wisely - you only have 3!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PuzzleChallenge;


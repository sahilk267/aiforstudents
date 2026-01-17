import React, { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface Pattern {
  sequence: number[];
  answer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const QuickBrainTest: React.FC = () => {
  const [currentPattern, setCurrentPattern] = useState<Pattern | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<string>('');
  const [correctStreak, setCorrectStreak] = useState(0);

  const generatePattern = (difficulty: 'easy' | 'medium' | 'hard'): Pattern => {
    if (difficulty === 'easy') {
      // Simple arithmetic: +2, +3, +5 pattern
      const start = Math.floor(Math.random() * 10) + 1;
      const seq = [start, start + 2, start + 5, start + 7];
      return {
        sequence: seq,
        answer: seq[0] + seq[1] + seq[2] + seq[3],
        difficulty: 'easy',
      };
    } else if (difficulty === 'medium') {
      // Multiplication pattern: 2, 4, 8, 16
      const start = Math.floor(Math.random() * 3) + 2;
      const seq = [start, start * 2, start * 4, start * 8];
      return {
        sequence: seq,
        answer: seq.reduce((a, b) => a + b, 0),
        difficulty: 'medium',
      };
    } else {
      // Complex: Fibonacci-like or custom pattern
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 5) + 1;
      const seq = [a, b, a + b, a + b * 2];
      return {
        sequence: seq,
        answer: seq[seq.length - 1] + seq[seq.length - 2],
        difficulty: 'hard',
      };
    }
  };

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      setGameOver(true);
      setGameStarted(false);
      // Track game completion
      analytics.trackGameComplete('Quick Brain Test', score, 0);
    }
  }, [timeLeft, gameStarted, gameOver]);

  useEffect(() => {
    if (gameStarted && !gameOver && currentPattern === null) {
      const currentLevel = level; // Capture level value
      const difficulty = currentLevel <= 3 ? 'easy' : currentLevel <= 6 ? 'medium' : 'hard';
      setCurrentPattern(generatePattern(difficulty));
      setTimeLeft(30);
    }
  }, [gameStarted, gameOver, currentPattern, level]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setTimeLeft(30);
    setCorrectStreak(0);
    setFeedback('');
    const difficulty = 'easy';
    setCurrentPattern(generatePattern(difficulty));
  };

  const handleSubmit = () => {
    if (!currentPattern || !userAnswer.trim()) return;

    const answer = parseInt(userAnswer);
    if (answer === currentPattern.answer) {
      setScore((prev) => {
        const points = currentPattern.difficulty === 'easy' ? 10 : currentPattern.difficulty === 'medium' ? 20 : 30;
        return prev + points;
      });
      setCorrectStreak((prev) => prev + 1);
      setFeedback('✅ Correct! Great job!');
      
      if (correctStreak + 1 >= 3) {
        setLevel((prev) => prev + 1);
        setCorrectStreak(0);
      }
    } else {
      setFeedback(`❌ Wrong! The answer was ${currentPattern.answer}`);
      setCorrectStreak(0);
    }

    setTimeout(() => {
      setUserAnswer('');
      setFeedback('');
      // Use functional update to get current level
      setLevel((currentLevel) => {
        const difficulty = currentLevel <= 3 ? 'easy' : currentLevel <= 6 ? 'medium' : 'hard';
        setCurrentPattern(generatePattern(difficulty));
        return currentLevel;
      });
      setTimeLeft(30);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Quick Brain Test</h1>
          <p className="text-lg text-gray-600">
            Find the pattern and solve the sequence!
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-pink-600">{score}</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-rose-600">Level {level}</div>
            <div className="text-sm text-gray-600">Difficulty</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{timeLeft}s</div>
            <div className="text-sm text-gray-600">Time Left</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{correctStreak}</div>
            <div className="text-sm text-gray-600">Streak</div>
          </div>
        </div>

        {/* Game Board */}
        {!gameStarted && !gameOver ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Test Your Brain?</h2>
            <p className="text-gray-600 mb-6">
              Find the pattern in the sequence and predict the next number. You have 30 seconds per question!
            </p>
            <button
              onClick={startGame}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 text-lg font-medium"
            >
              Start Test
            </button>
          </div>
        ) : gameOver ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">⏰</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Time's Up!</h2>
            <p className="text-xl text-gray-600 mb-2">Great effort! Here's your performance:</p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">Final Score: <span className="font-bold text-pink-600">{score}</span></p>
              <p className="text-gray-700">Level Reached: <span className="font-bold text-rose-600">{level}</span></p>
            </div>
            <button
              onClick={startGame}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 text-lg font-medium"
            >
              Play Again
            </button>
          </div>
        ) : currentPattern ? (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Difficulty: <span className="font-medium capitalize">{currentPattern.difficulty}</span>
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all"
                    style={{ width: `${(timeLeft / 30) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Find the Pattern:</h3>
                <div className="flex items-center justify-center space-x-4 text-3xl font-bold text-gray-900">
                  {currentPattern.sequence.map((num, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-white px-4 py-2 rounded-lg shadow">{num}</span>
                      {idx < currentPattern.sequence.length - 1 && <span>→</span>}
                    </React.Fragment>
                  ))}
                  <span className="text-pink-600">?</span>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  What number comes next in this sequence?
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Answer:
                  </label>
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-2xl text-center"
                    placeholder="Enter number"
                    autoFocus
                  />
                </div>

                {feedback && (
                  <div
                    className={`p-4 rounded-lg ${
                      feedback.includes('✅')
                        ? 'bg-green-50 border-2 border-green-500'
                        : 'bg-red-50 border-2 border-red-500'
                    }`}
                  >
                    <p className="text-center font-medium">{feedback}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!userAnswer.trim()}
                  className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                >
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Instructions */}
        <div className="mt-8 bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-pink-900 mb-2">💡 How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-pink-800">
            <li>Observe the number sequence and find the pattern</li>
            <li>Predict the next number in the sequence</li>
            <li>You have 30 seconds per question</li>
            <li>Get 3 correct answers in a row to level up!</li>
            <li>Higher levels = more difficult patterns = more points</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickBrainTest;


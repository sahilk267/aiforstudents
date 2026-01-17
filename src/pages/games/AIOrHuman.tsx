import React, { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface Question {
  id: number;
  content: string;
  source: 'ai' | 'human';
  explanation: string;
}

const AIOrHuman: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'ai' | 'human' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const questionBank: Question[] = [
    {
      id: 1,
      content: 'The weather today is beautiful and sunny. I love spending time outdoors.',
      source: 'human',
      explanation: 'This shows personal emotion and experience, typical of human writing.',
    },
    {
      id: 2,
      content: 'Based on the data analysis, the algorithm processes information through neural network layers.',
      source: 'ai',
      explanation: 'This is technical and formal, typical of AI-generated content.',
    },
    {
      id: 3,
      content: 'I had the most amazing pizza yesterday! The cheese was perfectly melted.',
      source: 'human',
      explanation: 'Personal experience with emotional expression indicates human writing.',
    },
    {
      id: 4,
      content: 'The function iterates through the dataset, applying transformations to each element.',
      source: 'ai',
      explanation: 'Technical programming language without personal context suggests AI generation.',
    },
    {
      id: 5,
      content: 'My cat just did something so funny! She tried to catch her own tail.',
      source: 'human',
      explanation: 'Personal anecdote with emotional connection is characteristic of human writing.',
    },
    {
      id: 6,
      content: 'Machine learning models require training data to optimize their performance metrics.',
      source: 'ai',
      explanation: 'Formal, technical language without personal touch indicates AI generation.',
    },
    {
      id: 7,
      content: 'I can\'t believe it\'s already Friday! This week went by so fast.',
      source: 'human',
      explanation: 'Casual, personal expression with emotion shows human writing.',
    },
    {
      id: 8,
      content: 'The system processes requests asynchronously to improve response times.',
      source: 'ai',
      explanation: 'Technical description without personal elements suggests AI generation.',
    },
  ];

  useEffect(() => {
    // Shuffle and select 5 random questions
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null);
    }
  }, [timeLeft, showResult, gameOver]);

  const handleAnswer = (answer: 'ai' | 'human' | null) => {
    if (selectedAnswer !== null || showResult) return;

    const userAnswer = answer || selectedAnswer;
    if (!userAnswer) {
      setSelectedAnswer(null);
      setShowResult(true);
      return;
    }

    setSelectedAnswer(userAnswer);
    setShowResult(true);

    if (userAnswer === questions[currentQuestion].source) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setGameOver(true);
      // Track game completion
      analytics.trackGameComplete('AI or Human?', score, (questions.length * 30) - timeLeft);
    }
  };

  const resetGame = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameOver(false);
    setTimeLeft(30);
  };

  if (questions.length === 0) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Game Over!</h1>
          <div className="text-6xl mb-4">
            {score === questions.length ? '🏆' : score >= questions.length / 2 ? '🎉' : '👍'}
          </div>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Your Score: {score}/{questions.length}
          </p>
          <p className="text-gray-600 mb-6">
            {score === questions.length
              ? 'Perfect! You can distinguish AI from human perfectly!'
              : score >= questions.length / 2
              ? 'Great job! You have a good eye for AI vs Human content.'
              : 'Good try! Keep practicing to improve your skills.'}
          </p>
          <button
            onClick={resetGame}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 text-lg font-medium"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI or Human?</h1>
          <p className="text-lg text-gray-600">
            Can you tell if the text was written by AI or a human?
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{score}</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {currentQuestion + 1}/{questions.length}
            </div>
            <div className="text-sm text-gray-600">Question</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{timeLeft}s</div>
            <div className="text-sm text-gray-600">Time</div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1}</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((timeLeft / 30) * 100)}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
              <p className="text-xl text-gray-800 leading-relaxed text-center">
                "{questions[currentQuestion].content}"
              </p>
            </div>
          </div>

          {/* Answer Buttons */}
          {!showResult ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('ai')}
                aria-label="Answer: AI Generated"
                className="bg-purple-600 text-white py-4 px-6 rounded-lg hover:bg-purple-700 text-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                🤖 AI Generated
              </button>
              <button
                onClick={() => handleAnswer('human')}
                aria-label="Answer: Human Written"
                className="bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                👤 Human Written
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg ${
                  selectedAnswer === questions[currentQuestion].source
                    ? 'bg-green-100 border-2 border-green-500'
                    : 'bg-red-100 border-2 border-red-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-lg">
                    {selectedAnswer === questions[currentQuestion].source ? '✓ Correct!' : '✗ Wrong!'}
                  </span>
                  <span className="text-sm">
                    Answer: {questions[currentQuestion].source === 'ai' ? '🤖 AI' : '👤 Human'}
                  </span>
                </div>
                <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
              </div>
              <button
                onClick={nextQuestion}
                aria-label={currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Read each text carefully</li>
            <li>Decide if it was written by AI or a human</li>
            <li>You have 30 seconds per question</li>
            <li>Earn points for correct answers!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIOrHuman;


import React, { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface Prediction {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const PredictionGame: React.FC = () => {
  const [questions, setQuestions] = useState<Prediction[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);

  const questionBank: Prediction[] = [
    {
      id: 1,
      question: 'What percentage of jobs will be affected by AI by 2030?',
      options: ['20%', '40%', '60%', '80%'],
      correct: 1,
      explanation: 'Studies suggest that around 40% of jobs will be significantly affected by AI automation by 2030.',
    },
    {
      id: 2,
      question: 'Which industry will see the most AI adoption?',
      options: ['Healthcare', 'Finance', 'Retail', 'Manufacturing'],
      correct: 0,
      explanation: 'Healthcare is expected to see the most significant AI adoption due to diagnostic and treatment applications.',
    },
    {
      id: 3,
      question: 'What is the expected market size of AI by 2025?',
      options: ['$100 billion', '$200 billion', '$300 billion', '$400 billion'],
      correct: 1,
      explanation: 'The global AI market is projected to reach approximately $200 billion by 2025.',
    },
    {
      id: 4,
      question: 'Which AI capability will improve the most in the next 5 years?',
      options: ['Natural Language Processing', 'Computer Vision', 'Robotics', 'All of the above'],
      correct: 3,
      explanation: 'All major AI capabilities are expected to see significant improvements, with NLP and Computer Vision leading.',
    },
    {
      id: 5,
      question: 'What percentage of students will use AI tools for learning by 2026?',
      options: ['30%', '50%', '70%', '90%'],
      correct: 2,
      explanation: 'Educational AI tools are rapidly being adopted, with an estimated 70% of students using them by 2026.',
    },
    {
      id: 6,
      question: 'Which country leads in AI research publications?',
      options: ['USA', 'China', 'UK', 'Germany'],
      correct: 1,
      explanation: 'China has been leading in AI research publications in recent years, followed closely by the USA.',
    },
    {
      id: 7,
      question: 'What is the average accuracy of modern AI image recognition?',
      options: ['85%', '90%', '95%', '99%'],
      correct: 2,
      explanation: 'Modern AI image recognition systems can achieve up to 95% accuracy on standard datasets.',
    },
    {
      id: 8,
      question: 'How many AI startups were founded in 2023?',
      options: ['500', '1000', '2000', '5000'],
      correct: 2,
      explanation: 'Approximately 2000 AI startups were founded globally in 2023, showing rapid growth in the sector.',
    },
  ];

  useEffect(() => {
    // Shuffle and select 6 random questions
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 6));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !gameOver && questions.length > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult && !gameOver && questions.length > 0) {
      // Time's up - mark as wrong
      handleAnswer(null);
    }
  }, [timeLeft, showResult, gameOver, questions.length]);

  const handleAnswer = (optionIndex: number | null) => {
    if (selectedOption !== null || showResult || questions.length === 0) return;

    if (optionIndex === null) {
      // Time's up - mark as wrong
      setSelectedOption(-1); // Use -1 to indicate timeout
      setShowResult(true);
      return;
    }

    setSelectedOption(optionIndex);
    setShowResult(true);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(45);
    } else {
      setGameOver(true);
      // Track game completion
      const percentage = Math.round((score / questions.length) * 100);
      analytics.trackGameComplete('Prediction Game', score, (questions.length * 45) - timeLeft);
    }
  };

  const resetGame = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 6));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setGameOver(false);
    setTimeLeft(45);
  };

  if (questions.length === 0) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  if (gameOver) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Game Complete!</h1>
          <div className="text-6xl mb-4">
            {percentage === 100 ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Your Score: {score}/{questions.length} ({percentage}%)
          </p>
          <p className="text-gray-600 mb-6">
            {percentage === 100
              ? 'Perfect! You\'re an AI prediction expert!'
              : percentage >= 80
              ? 'Excellent! You have great AI knowledge!'
              : percentage >= 60
              ? 'Good job! Keep learning about AI!'
              : 'Nice try! Continue exploring AI trends!'}
          </p>
          <button
            onClick={resetGame}
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 text-lg font-medium"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Prediction Game</h1>
          <p className="text-lg text-gray-600">
            Test your knowledge about AI trends and predictions!
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{score}</div>
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
                  className="bg-indigo-600 h-2 rounded-full transition-all"
                  style={{ width: `${((timeLeft / 45) * 100)}%` }}
                ></div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            {!showResult ? (
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left bg-gray-50 hover:bg-indigo-50 border-2 border-gray-200 hover:border-indigo-300 p-4 rounded-lg transition-all transform hover:scale-[1.02]"
                  >
                    <span className="font-medium text-gray-900">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === questions[currentQuestion].correct;
                  const isSelected = index === selectedOption;
                  const isTimeout = selectedOption === -1;
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        isCorrect
                          ? 'bg-green-100 border-green-500'
                          : isSelected && !isCorrect
                          ? 'bg-red-100 border-red-500'
                          : isTimeout && isCorrect
                          ? 'bg-yellow-100 border-yellow-500'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{option}</span>
                        {isCorrect && <span className="text-green-600 font-bold">✓ Correct</span>}
                        {isSelected && !isCorrect && (
                          <span className="text-red-600 font-bold">✗ Your Answer</span>
                        )}
                        {isTimeout && isCorrect && (
                          <span className="text-yellow-600 font-bold">⏰ Time's Up</span>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">Explanation:</span>{' '}
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 text-lg font-medium"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-indigo-800">
            <li>Read each question about AI trends and predictions</li>
            <li>Select the most accurate answer</li>
            <li>You have 45 seconds per question</li>
            <li>Learn from explanations after each answer!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PredictionGame;


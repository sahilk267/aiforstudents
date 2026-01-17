import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Game {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  route: string;
  color: string;
}

const Games: React.FC = () => {
  const navigate = useNavigate();

  const games: Game[] = [
    {
      id: 'train-the-ai',
      title: 'Train the AI',
      description: 'Teach an AI by providing examples and see how it learns! Add training data and test predictions.',
      icon: '🤖',
      difficulty: 'Easy',
      duration: '5-10 min',
      route: '/games/train-the-ai',
      color: 'from-purple-500 to-blue-500',
    },
    {
      id: 'ai-or-human',
      title: 'AI or Human?',
      description: 'Can you tell if the text was written by AI or a human? Test your ability to distinguish between them.',
      icon: '👤',
      difficulty: 'Medium',
      duration: '5 min',
      route: '/games/ai-or-human',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'prediction-game',
      title: 'AI Prediction Game',
      description: 'Test your knowledge about AI trends and predictions! Answer questions about the future of AI.',
      icon: '🔮',
      difficulty: 'Medium',
      duration: '10 min',
      route: '/games/prediction-game',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'memory-match',
      title: 'Memory Match',
      description: 'Match AI terms with their definitions! A classic memory game to learn AI concepts.',
      icon: '🧠',
      difficulty: 'Easy',
      duration: '5-15 min',
      route: '/games/memory-match',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'puzzle-challenge',
      title: 'Puzzle Challenge',
      description: 'Arrange the machine learning pipeline steps in the correct order! Test your ML knowledge.',
      icon: '🧩',
      difficulty: 'Medium',
      duration: '10 min',
      route: '/games/puzzle-challenge',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 'quick-brain-test',
      title: 'Quick Brain Test',
      description: 'Find patterns in number sequences! Challenge your brain with increasing difficulty levels.',
      icon: '⚡',
      difficulty: 'Hard',
      duration: '5-10 min',
      route: '/games/quick-brain-test',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Interactive Games</h1>
          <p className="text-lg text-gray-600">
            Learn AI concepts through fun and engaging games
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(game.route)}
            >
              {/* Game Header with Gradient */}
              <div className={`bg-gradient-to-r ${game.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{game.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mt-4">{game.title}</h3>
              </div>

              {/* Game Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⏱️ {game.duration}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors font-medium">
                  Play Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Game Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">{games.length}</div>
              <div className="text-gray-600 mt-1">Total Games</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">
                {games.filter((g) => g.difficulty === 'Easy').length}
              </div>
              <div className="text-gray-600 mt-1">Easy Games</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">
                {games.filter((g) => g.difficulty === 'Hard').length}
              </div>
              <div className="text-gray-600 mt-1">Challenging Games</div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Click on any game card to start playing</li>
            <li>Each game has different rules and objectives</li>
            <li>Track your progress and improve your scores</li>
            <li>Games are designed to help you learn AI concepts while having fun!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Games;


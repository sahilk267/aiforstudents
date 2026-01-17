import React from 'react';
import { useNavigate } from 'react-router-dom';

const AITools: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      id: 1,
      name: 'Text Summarizer',
      icon: '📝',
      description: 'Quickly summarize long texts, articles, or documents with AI.',
      status: 'Available',
      path: '/tools/summarizer',
    },
    {
      id: 2,
      name: 'Flashcard Generator',
      icon: '📚',
      description: 'Automatically create flashcards from your study material.',
      status: 'Available',
      path: '/tools/flashcard-generator',
    },
    {
      id: 3,
      name: 'Study Plan Generator',
      icon: '📅',
      description: 'Create a personalized study schedule tailored to your needs.',
      status: 'Available',
      path: '/tools/study-plan-generator',
    },
    {
      id: 4,
      name: 'Code Assistant',
      icon: '💻',
      description: 'Get help with coding problems and learn programming concepts.',
      status: 'Available',
      path: '/teaching/code-assistant',
    },
    {
      id: 5,
      name: 'AI Tutor',
      icon: '🤖',
      description: 'Get personalized help and answers to your AI questions.',
      status: 'Available',
      path: '/ai-tutor',
    },
  ];

  const handleToolClick = (path: string, status: string) => {
    if (status === 'Available') {
      navigate(path);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Tools</h1>
          <p className="text-gray-600 mt-1">Powerful AI-powered tools to enhance your learning</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-blue-300"
            onClick={() => handleToolClick(tool.path, tool.status)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{tool.icon}</span>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                <span className={`text-sm ${
                  tool.status === 'Available' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {tool.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <button
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                tool.status === 'Available'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={tool.status !== 'Available'}
            >
              {tool.status === 'Available' ? 'Launch Tool →' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AITools; 
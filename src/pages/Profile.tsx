import React, { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';

interface SavedFlashcard {
  id: number;
  front: string;
  back: string;
  subject: string;
  createdAt: string;
}

interface StudyPlan {
  id: number;
  subject: string;
  duration: string;
  startDate: string;
  progress: number;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'flashcards' | 'studyplans'>('overview');

  // Mock data - in production, this would come from backend/context
  const userStats = {
    coursesCompleted: 8,
    lessonsCompleted: 24,
    gamesPlayed: 15,
    totalScore: 2450,
    streak: 7,
  };

  const savedFlashcards: SavedFlashcard[] = [
    {
      id: 1,
      front: 'What is AI?',
      back: 'Artificial Intelligence is the simulation of human intelligence in machines.',
      subject: 'AI Fundamentals',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      front: 'Neural Network',
      back: 'A computing system inspired by biological neural networks.',
      subject: 'Machine Learning',
      createdAt: '2024-01-16',
    },
    {
      id: 3,
      front: 'Supervised Learning',
      back: 'Machine learning using labeled training data.',
      subject: 'Machine Learning',
      createdAt: '2024-01-17',
    },
  ];

  const studyPlans: StudyPlan[] = [
    {
      id: 1,
      subject: 'Machine Learning Basics',
      duration: '14 days',
      startDate: '2024-01-10',
      progress: 65,
    },
    {
      id: 2,
      subject: 'Deep Learning Fundamentals',
      duration: '21 days',
      startDate: '2024-01-20',
      progress: 30,
    },
  ];

  const recentActivity = [
    { action: 'Completed Lesson', item: 'What is AI?', date: '2 hours ago' },
    { action: 'Played Game', item: 'AI or Human?', date: '1 day ago' },
    { action: 'Generated Flashcards', item: 'AI Fundamentals', date: '2 days ago' },
    { action: 'Created Study Plan', item: 'Deep Learning', date: '3 days ago' },
  ];

  return (
    <>
      <SEOHead
        title="Profile - AI for Students"
        description="View your learning progress, saved flashcards, and study plans"
      />
      <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-lg text-gray-600">Manage your learning progress and saved content</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              U
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">User Name</h2>
              <p className="text-gray-600">user@example.com</p>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-600">🔥 {userStats.streak} day streak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{userStats.coursesCompleted}</div>
            <div className="text-gray-600 mt-1">Courses Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{userStats.lessonsCompleted}</div>
            <div className="text-gray-600 mt-1">Lessons Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{userStats.gamesPlayed}</div>
            <div className="text-gray-600 mt-1">Games Played</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{userStats.totalScore}</div>
            <div className="text-gray-600 mt-1">Total Score</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'flashcards', label: 'Saved Flashcards' },
              { id: 'studyplans', label: 'Study Plans' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <div>
                      <span className="font-medium text-gray-900">{activity.action}:</span>{' '}
                      <span className="text-gray-600">{activity.item}</span>
                    </div>
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Level 1: AI Fundamentals</span>
                    <span className="text-gray-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Level 2: Machine Learning Basics</span>
                    <span className="text-gray-600">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Level 3: Practical AI</span>
                    <span className="text-gray-600">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'flashcards' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Saved Flashcards ({savedFlashcards.length})
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Create New
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedFlashcards.map((card) => (
                <div
                  key={card.id}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                      {card.subject}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="font-semibold text-gray-900 mb-1">{card.front}</div>
                    <div className="text-sm text-gray-600">{card.back}</div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{card.createdAt}</span>
                    <button className="text-blue-600 hover:text-blue-700">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'studyplans' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Study Plans ({studyPlans.length})
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Create New
              </button>
            </div>
            <div className="space-y-4">
              {studyPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{plan.subject}</h4>
                      <p className="text-sm text-gray-600">
                        Duration: {plan.duration} • Started: {plan.startDate}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{plan.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Continue
                    </button>
                    <button className="text-sm bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Profile;


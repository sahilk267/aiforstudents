import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Courses', value: '12', subtext: '3 courses in progress', icon: '📚', color: 'blue' },
    { label: 'AI Tools Used', value: '48', subtext: 'Last 30 days', icon: '🤖', color: 'purple' },
    { label: 'Games Played', value: '15', subtext: '6 games available', icon: '🎮', color: 'green' },
    { label: 'Assignments', value: '5', subtext: '2 due this week', icon: '📝', color: 'orange' },
  ];

  const recentActivity = [
    { id: 1, title: 'Completed Module 1', course: 'Introduction to AI', date: '2 hours ago', type: 'lesson' },
    { id: 2, title: 'Played Memory Match', course: 'Games', date: '1 day ago', type: 'game' },
    { id: 3, title: 'Submitted Assignment', course: 'Machine Learning Basics', date: '1 day ago', type: 'assignment' },
    { id: 4, title: 'Started New Course', course: 'Deep Learning Fundamentals', date: '3 days ago', type: 'course' },
  ];

  const quickActions = [
    { name: 'Learn AI', path: '/learning', icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { name: 'Play Games', path: '/games', icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { name: 'AI Tools', path: '/ai-tools', icon: '🛠️', color: 'from-green-500 to-teal-500' },
    { name: 'AI Tutor', path: '/ai-tutor', icon: '💬', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <>
      <SEOHead
        title="Dashboard - AI for Students"
        description="Track your learning progress, access courses, games, and AI tools"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Continue your AI learning journey.</p>
        </div>
        <Link
          to="/learning"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
        >
          Start Learning
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            to={action.path}
            className={`bg-gradient-to-r ${action.color} rounded-lg p-4 text-white hover:shadow-lg transition-all transform hover:scale-105 text-center`}
          >
            <div className="text-3xl mb-2">{action.icon}</div>
            <div className="font-semibold text-sm">{action.name}</div>
          </Link>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-100 text-${stat.color}-800`}>
                {stat.label.split(' ')[0]}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-2 text-xs text-gray-500">{stat.subtext}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">
                      {activity.type === 'lesson' ? '📖' : activity.type === 'game' ? '🎮' : activity.type === 'assignment' ? '📝' : '📚'}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.course}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="space-y-3">
            <Link
              to="/learning"
              className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
            >
              <span className="text-2xl mr-3">🎓</span>
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-blue-700">Continue Learning</p>
                <p className="text-xs text-gray-500">Resume your AI lessons</p>
              </div>
              <span className="text-blue-600">→</span>
            </Link>
            <Link
              to="/games"
              className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
            >
              <span className="text-2xl mr-3">🎮</span>
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-purple-700">Play Games</p>
                <p className="text-xs text-gray-500">6 interactive games available</p>
              </div>
              <span className="text-purple-600">→</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
            >
              <span className="text-2xl mr-3">👤</span>
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-green-700">View Profile</p>
                <p className="text-xs text-gray-500">Check your progress</p>
              </div>
              <span className="text-green-600">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;

import React from 'react';

const Progress: React.FC = () => {
  const stats = [
    { label: 'Courses Completed', value: 12 },
    { label: 'Assignments Submitted', value: 45 },
    { label: 'Hours Spent Learning', value: 128 },
    { label: 'Achievement Points', value: 2450 },
  ];

  const achievements = [
    {
      id: 1,
      title: 'AI Explorer',
      description: 'Completed 10 AI-related courses',
      icon: '🎯',
      progress: 100,
      unlocked: true,
    },
    {
      id: 2,
      title: 'Code Master',
      description: 'Submitted 50 coding assignments',
      icon: '💻',
      progress: 90,
      unlocked: false,
    },
    {
      id: 3,
      title: 'Community Leader',
      description: 'Helped 25 students in the community',
      icon: '👥',
      progress: 60,
      unlocked: false,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Completed Course',
      subject: 'Introduction to Machine Learning',
      date: '2 days ago',
      points: 100,
    },
    {
      id: 2,
      action: 'Submitted Assignment',
      subject: 'Neural Networks Project',
      date: '4 days ago',
      points: 50,
    },
    {
      id: 3,
      action: 'Earned Achievement',
      subject: 'AI Explorer Badge',
      date: '1 week ago',
      points: 200,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Progress</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-600">{stat.label}</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-lg shadow-md p-6 ${
                achievement.unlocked ? 'border-2 border-green-500' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-2xl mb-2">{achievement.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600 mt-1">{achievement.description}</p>
                </div>
                {achievement.unlocked && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Unlocked
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${
                      achievement.unlocked ? 'bg-green-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md">
          {recentActivity.map((activity, index) => (
            <div
              key={activity.id}
              className={`p-4 flex items-center justify-between ${
                index !== recentActivity.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div>
                <h4 className="font-medium text-gray-900">{activity.action}</h4>
                <p className="text-sm text-gray-600">{activity.subject}</p>
                <span className="text-xs text-gray-500">{activity.date}</span>
              </div>
              <span className="text-green-600 font-medium">+{activity.points} points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress; 
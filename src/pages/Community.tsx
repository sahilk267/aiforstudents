import React from 'react';

const Community: React.FC = () => {
  const discussions = [
    {
      id: 1,
      title: 'How to use AI for essay writing?',
      author: 'John Doe',
      avatar: '👨',
      replies: 12,
      views: 156,
      category: 'Writing',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      title: 'Best practices for coding with AI assistance',
      author: 'Jane Smith',
      avatar: '👩',
      replies: 8,
      views: 94,
      category: 'Programming',
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      title: 'Study group for Machine Learning basics',
      author: 'Mike Johnson',
      avatar: '👨',
      replies: 15,
      views: 203,
      category: 'Study Groups',
      timestamp: '1 day ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Community</h1>
        <button className="btn-primary">Start Discussion</button>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {['All', 'Writing', 'Programming', 'Math', 'Study Groups', 'Questions'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Discussions */}
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{discussion.avatar}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900 truncate">
                    {discussion.title}
                  </h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {discussion.category}
                  </span>
                </div>
                <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{discussion.author}</span>
                  <span>•</span>
                  <span>{discussion.timestamp}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{discussion.replies} replies</span>
                <span>•</span>
                <span>{discussion.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50">
          Previous
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
          1
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Community; 
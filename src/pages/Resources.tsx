import React from 'react';

const Resources: React.FC = () => {
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'programming', name: 'Programming' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'tools', name: 'Tools & Software' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Introduction to Neural Networks',
      category: 'ai',
      type: 'Video Course',
      duration: '2 hours',
      level: 'Beginner',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      reviews: 245,
      thumbnail: '🎥',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      category: 'programming',
      type: 'Interactive Tutorial',
      duration: '4 hours',
      level: 'Intermediate',
      author: 'Mike Chen',
      rating: 4.6,
      reviews: 189,
      thumbnail: '💻',
    },
    {
      id: 3,
      title: 'Machine Learning Algorithms',
      category: 'ai',
      type: 'E-Book',
      duration: '6 hours',
      level: 'Advanced',
      author: 'Prof. Alex Thompson',
      rating: 4.9,
      reviews: 312,
      thumbnail: '📚',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Resources</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search resources..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-4xl mb-4 block">{resource.thumbnail}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 mt-1">by {resource.author}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-medium">{resource.rating}</span>
                <span className="text-gray-600">({resource.reviews} reviews)</span>
              </div>

              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>{resource.duration}</span>
                <span>{resource.level}</span>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Start Learning
                </button>
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          Load More Resources
        </button>
      </div>
    </div>
  );
};

export default Resources; 
import React from 'react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: 'The Future of AI in Education: A Comprehensive Guide',
    excerpt:
      'Explore how artificial intelligence is transforming education and what it means for students and educators.',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Education',
    image: '🎓',
  };

  const posts = [
    {
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt:
        'Learn the fundamentals of machine learning and how to apply them in your projects.',
      author: 'Mike Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Machine Learning',
      image: '🤖',
    },
    {
      title: 'Top 10 AI Tools for Students in 2024',
      excerpt:
        'Discover the most useful AI tools that can help students enhance their learning experience.',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Tools',
      image: '🛠️',
    },
    {
      title: 'How to Build Your First AI Project',
      excerpt:
        'A step-by-step guide to creating your first artificial intelligence project from scratch.',
      author: 'Alex Thompson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Tutorials',
      image: '💻',
    },
  ];

  const categories = [
    'All',
    'Education',
    'Machine Learning',
    'Tools',
    'Tutorials',
    'Industry News',
    'Student Success',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Blog</h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              Insights, tutorials, and updates from the AI education community.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto py-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-6xl">{featuredPost.image}</span>
              <div>
                <span className="text-blue-600 font-medium">{featuredPost.category}</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">{featuredPost.title}</h2>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{featuredPost.author}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{featuredPost.date}</span>
              </div>
              <span className="text-gray-500">{featuredPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{post.image}</span>
                  <div>
                    <span className="text-blue-600 font-medium">{post.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{post.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{post.author}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles and updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
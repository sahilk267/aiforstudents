import React from 'react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: "The Future of AI in Education: A Comprehensive Guide",
    excerpt: "Explore how artificial intelligence is transforming the educational landscape and what it means for students, teachers, and institutions.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80"
  };

  const posts = [
    {
      title: "How AI is Personalizing Learning Experiences",
      excerpt: "Discover how AI algorithms are creating customized learning paths for students.",
      author: "James Wilson",
      date: "March 12, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
    },
    {
      title: "The Role of AI in Student Assessment",
      excerpt: "Learn about innovative ways AI is helping evaluate student progress and performance.",
      author: "Dr. Maria Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
    },
    {
      title: "AI Tools Every Teacher Should Know About",
      excerpt: "A curated list of AI-powered tools that are revolutionizing classroom teaching.",
      author: "Emily Thompson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
    }
  ];

  const categories = [
    "All Posts",
    "AI Technology",
    "Education",
    "Teaching Methods",
    "Student Success",
    "Industry News"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-32 pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Blog
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Insights & Updates
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Stay informed about the latest developments in AI education
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-96"
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                    alt={featuredPost.author}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{featuredPost.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                      alt={post.author}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{post.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-6">
              Get the latest updates and insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
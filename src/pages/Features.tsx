import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Learning",
      description: "Personalized learning paths and adaptive content that evolves with your progress",
      icon: "🤖",
      stats: "95% student satisfaction"
    },
    {
      title: "Interactive Sessions",
      description: "Engaging live sessions with real-time feedback and collaborative learning",
      icon: "🎯",
      stats: "1000+ hours of content"
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry professionals and experienced educators",
      icon: "👨‍🏫",
      stats: "50+ expert mentors"
    },
    {
      title: "Practical Projects",
      description: "Hands-on experience with real-world AI applications and projects",
      icon: "💻",
      stats: "100+ projects completed"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Student",
      content: "The AI-powered learning system has completely transformed how I understand complex concepts. It's like having a personal tutor available 24/7!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "Parent",
      content: "As a parent, I'm impressed by how the platform adapts to my child's learning pace. The progress tracking and regular updates give me confidence in their development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content: "The teaching resources and AI tools provided have enhanced my classroom experience. My students are more engaged and excited about learning than ever before.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
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
              Features
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Discover Our Powerful Features
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Experience the future of education with our cutting-edge AI-powered platform
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-sm text-blue-400">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students already benefiting from our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 
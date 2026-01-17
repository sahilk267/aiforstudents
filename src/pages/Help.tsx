import React, { useState } from 'react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with AI for Students?',
      answer:
        'To get started, create an account and complete your profile. Then, explore our courses, AI tools, and learning resources. We recommend starting with the "Introduction to AI" course.',
    },
    {
      id: 2,
      question: 'What are the system requirements?',
      answer:
        'You need a modern web browser (Chrome, Firefox, Safari, or Edge) and a stable internet connection. Some AI tools may require additional computational resources.',
    },
    {
      id: 3,
      question: 'How can I track my progress?',
      answer:
        'Your progress is automatically tracked in the Progress section. You can view completed courses, assignments, and earned achievements there.',
    },
  ];

  const supportCategories = [
    {
      title: 'Technical Support',
      icon: '🔧',
      description: 'Get help with technical issues and platform access.',
    },
    {
      title: 'Course Support',
      icon: '📚',
      description: 'Questions about course content and materials.',
    },
    {
      title: 'Account Help',
      icon: '👤',
      description: 'Manage your account settings and preferences.',
    },
    {
      title: 'Community Guidelines',
      icon: '🤝',
      description: 'Learn about our community rules and policies.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
            🔍
          </button>
        </div>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {supportCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <span className="text-3xl mb-4 block">{category.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still need help?</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help; 
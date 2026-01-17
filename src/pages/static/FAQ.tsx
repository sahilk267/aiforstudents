import React, { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'What is AI for Students?',
      answer: 'AI for Students is an educational platform designed to help students of all ages learn Artificial Intelligence through interactive modules, games, and AI-powered tools.',
    },
    {
      category: 'general',
      question: 'Is the platform free?',
      answer: 'Yes! We offer a free tier with access to learning modules, games, and AI tools. Some advanced features may require a subscription.',
    },
    {
      category: 'general',
      question: 'What age groups is this platform for?',
      answer: 'Our platform is designed for students of all ages, from elementary school to college level. Content is organized by difficulty levels.',
    },
    {
      category: 'programs',
      question: 'What programs do you offer?',
      answer: 'We offer School Seminars, Online Classes, AI Teacher programs, and Summer Camps. Each program is tailored to different learning needs.',
    },
    {
      category: 'programs',
      question: 'How do I enroll in a program?',
      answer: 'Visit our Programs page, select the program you\'re interested in, and click "Enroll Now" or "Contact Us" for more information.',
    },
    {
      category: 'technical',
      question: 'Do I need any special software?',
      answer: 'No special software is required. Our platform works in any modern web browser. We recommend using Chrome, Firefox, or Safari for the best experience.',
    },
    {
      category: 'technical',
      question: 'Can I use this on mobile devices?',
      answer: 'Yes! Our platform is fully responsive and works on smartphones, tablets, and desktop computers.',
    },
    {
      category: 'learning',
      question: 'How do I track my progress?',
      answer: 'Your progress is automatically saved. Visit your Profile page to see completed lessons, games played, and achievements.',
    },
    {
      category: 'learning',
      question: 'Are the games educational?',
      answer: 'Absolutely! All our games are designed to teach AI concepts in a fun and engaging way. They help reinforce learning through interactive gameplay.',
    },
    {
      category: 'ai-tools',
      question: 'How do the AI tools work?',
      answer: 'Our AI tools use advanced algorithms to help with summarization, flashcard generation, and study planning. They\'re designed to enhance your learning experience.',
    },
    {
      category: 'support',
      question: 'How can I get help?',
      answer: 'You can contact our support team through the Contact page, use the AI Tutor for learning questions, or check our Help section for common issues.',
    },
    {
      category: 'support',
      question: 'What if I forget my password?',
      answer: 'Click "Forgot Password" on the Sign In page, and we\'ll send you a password reset link to your email address.',
    },
  ];

  const categories = ['all', 'general', 'programs', 'technical', 'learning', 'ai-tools', 'support'];

  const filteredFAQs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about AI for Students platform"
        keywords="FAQ, questions, help, support, AI education"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our platform
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-gray-500 ml-4">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-200 animate-fade-in">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-blue-800 mb-6">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;


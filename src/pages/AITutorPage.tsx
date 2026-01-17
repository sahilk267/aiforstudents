import React from 'react';
import AITutor from '@/components/ai/AITutor';
import SEOHead from '@/components/seo/SEOHead';

const AITutorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Tutor - Get Personalized AI Help"
        description="Ask questions and get instant answers about Artificial Intelligence from our AI tutor"
        keywords="AI tutor, artificial intelligence help, AI questions, machine learning help"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Tutor</h1>
          <p className="text-lg text-gray-600">
            Get personalized help and answers to your AI questions
          </p>
        </div>
        <AITutor />
      </div>
      </div>
    </>
  );
};

export default AITutorPage;


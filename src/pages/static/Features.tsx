import React from 'react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      title: 'AI-Powered Learning',
      description:
        'Experience personalized learning with our advanced AI algorithms that adapt to your learning style and pace.',
      icon: '🤖',
    },
    {
      title: 'Interactive Courses',
      description:
        'Engage with dynamic course content featuring hands-on exercises, real-world projects, and instant feedback.',
      icon: '📚',
    },
    {
      title: 'AI Tools Integration',
      description:
        'Access and learn to use cutting-edge AI tools directly within our platform, from machine learning to natural language processing.',
      icon: '🛠️',
    },
    {
      title: 'Progress Tracking',
      description:
        'Monitor your learning journey with detailed analytics, achievements, and personalized recommendations.',
      icon: '📊',
    },
  ];

  const additionalFeatures = [
    {
      title: 'Community Learning',
      description: 'Connect with fellow students, share knowledge, and collaborate on projects.',
      benefits: ['Discussion forums', 'Study groups', 'Peer reviews', 'Knowledge sharing'],
    },
    {
      title: 'Expert Support',
      description: 'Get guidance from AI experts and educators whenever you need help.',
      benefits: ['Live mentoring', 'Q&A sessions', 'Expert feedback', 'Technical support'],
    },
    {
      title: 'Career Development',
      description: 'Prepare for your future career with AI-focused skills and certifications.',
      benefits: ['Industry projects', 'Skill assessments', 'Certificates', 'Job resources'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Platform Features
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              Discover how our innovative features make learning AI accessible and engaging for every
              student.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose AI for Students?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 text-center font-semibold border-b">
                <div className="p-4 bg-gray-50">Features</div>
                <div className="p-4 bg-blue-50 text-blue-700">AI for Students</div>
                <div className="p-4 bg-gray-50">Others</div>
              </div>
              {[
                'AI-Powered Learning',
                'Interactive Courses',
                'Expert Support',
                'Community Features',
                'Career Resources',
              ].map((feature, index) => (
                <div key={index} className="grid grid-cols-3 text-center border-b">
                  <div className="p-4 bg-gray-50">{feature}</div>
                  <div className="p-4 text-green-500">✓</div>
                  <div className="p-4 text-red-500">×</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already using our platform to master AI technology.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features; 
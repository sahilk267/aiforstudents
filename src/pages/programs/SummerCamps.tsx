import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

const SummerCamps: React.FC = () => {
  const campPrograms = [
    {
      id: 1,
      name: 'AI Discovery Camp',
      ageGroup: 'Ages 8-12',
      duration: '1 Week',
      description: 'An exciting introduction to AI concepts through fun activities and games.',
      features: [
        'Hands-on AI projects',
        'Interactive games and challenges',
        'Team building activities',
        'Certificate of completion',
      ],
      price: '$299',
    },
    {
      id: 2,
      name: 'Machine Learning Bootcamp',
      ageGroup: 'Ages 13-17',
      duration: '2 Weeks',
      description: 'Deep dive into machine learning with real-world projects.',
      features: [
        'Build your own ML models',
        'Work on real projects',
        'Mentorship from AI experts',
        'Portfolio development',
      ],
      price: '$599',
    },
    {
      id: 3,
      name: 'AI Innovation Lab',
      ageGroup: 'Ages 15-18',
      duration: '3 Weeks',
      description: 'Advanced program for students ready to create AI solutions.',
      features: [
        'Advanced AI concepts',
        'Project-based learning',
        'Industry guest speakers',
        'College prep guidance',
      ],
      price: '$899',
    },
  ];

  return (
    <>
      <SEOHead
        title="Summer Camps - AI Education Camps"
        description="Join our exciting summer camps and learn AI through hands-on projects and fun activities"
        keywords="summer camps, AI camps, educational camps, AI learning"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Summer AI Camps</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Make this summer unforgettable! Join our immersive AI camps designed for students of all ages.
              Learn, create, and have fun with AI!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </section>

        {/* Camp Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Camp Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {campPrograms.map((camp) => (
                <div key={camp.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{camp.name}</h3>
                        <p className="text-blue-100">{camp.ageGroup}</p>
                      </div>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{camp.duration}</span>
                    </div>
                    <div className="text-3xl font-bold">{camp.price}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{camp.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {camp.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Camps */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Camps?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">Learn from experienced AI educators</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold text-gray-900 mb-2">Small Groups</h3>
                <p className="text-gray-600 text-sm">Personalized attention for every student</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-semibold text-gray-900 mb-2">Hands-On Projects</h3>
                <p className="text-gray-600 text-sm">Build real AI projects you can showcase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-semibold text-gray-900 mb-2">Fun & Engaging</h3>
                <p className="text-gray-600 text-sm">Learning through games and activities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Camp Schedule</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Session 1: Early Summer</h3>
                  <p className="text-gray-600">June 10 - June 24, 2024</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Session 2: Mid Summer</h3>
                  <p className="text-gray-600">July 8 - July 22, 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Session 3: Late Summer</h3>
                  <p className="text-gray-600">August 5 - August 19, 2024</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 text-sm">
                  <strong>Note:</strong> All camps are available in both in-person and online formats. 
                  Early bird discounts available for registrations before May 1st.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't miss out on this amazing opportunity to learn AI this summer!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SummerCamps;


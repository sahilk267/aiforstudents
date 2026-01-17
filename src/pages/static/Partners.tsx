import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

interface Partner {
  id: number;
  name: string;
  type: string;
  description: string;
  logo?: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'Tech Education Foundation',
      type: 'Educational Partner',
      description: 'Collaborating on curriculum development and student outreach programs.',
    },
    {
      id: 2,
      name: 'AI Research Institute',
      type: 'Research Partner',
      description: 'Partnering on cutting-edge AI research and educational content.',
    },
    {
      id: 3,
      name: 'Global Learning Network',
      type: 'Distribution Partner',
      description: 'Helping us reach students worldwide through their network.',
    },
    {
      id: 4,
      name: 'School District Partnership',
      type: 'Institutional Partner',
      description: 'Working with schools to bring AI education to classrooms.',
    },
  ];

  const partnershipTypes = [
    {
      title: 'Educational Institutions',
      description: 'Partner with schools, colleges, and universities to bring AI education to students.',
      benefits: [
        'Custom curriculum development',
        'Teacher training programs',
        'Student assessment tools',
        'Ongoing support and resources',
      ],
    },
    {
      title: 'Technology Companies',
      description: 'Collaborate with tech companies to provide real-world AI experiences.',
      benefits: [
        'Industry insights and case studies',
        'Guest speaker opportunities',
        'Internship programs',
        'Technology partnerships',
      ],
    },
    {
      title: 'Non-Profit Organizations',
      description: 'Work together to make AI education accessible to underserved communities.',
      benefits: [
        'Scholarship programs',
        'Community outreach',
        'Free resources and materials',
        'Volunteer opportunities',
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Partners - Partner With Us"
        description="Join our network of partners and help bring AI education to students worldwide"
        keywords="partners, partnerships, collaboration, AI education"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Together, we can make AI education accessible to students everywhere
            </p>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{partner.type}</p>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Partnership Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Partnering?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for organizations that share our mission of making AI education accessible. 
              Let's discuss how we can work together!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;


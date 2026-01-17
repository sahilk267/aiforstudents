import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const Careers: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: 'Senior AI Education Specialist',
      department: 'Education',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead the development of AI curriculum and educational content for students.',
      requirements: [
        'Master\'s degree in Education or AI/Computer Science',
        '5+ years experience in educational content development',
        'Strong understanding of AI/ML concepts',
        'Excellent communication skills',
      ],
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our React-based educational platform.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Experience with modern frontend tools (Vite, TailwindCSS)',
        'Strong UI/UX skills',
        'Portfolio of educational or learning platforms preferred',
      ],
    },
    {
      id: 3,
      title: 'AI Content Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Part-time / Contract',
      description: 'Create engaging educational content about AI for students.',
      requirements: [
        'Background in AI/Computer Science or Education',
        'Excellent writing skills',
        'Ability to explain complex concepts simply',
        'Portfolio of educational content',
      ],
    },
    {
      id: 4,
      title: 'Community Manager',
      department: 'Community',
      location: 'Remote',
      type: 'Full-time',
      description: 'Engage with our student community and manage social media presence.',
      requirements: [
        '2+ years community management experience',
        'Strong social media skills',
        'Passion for education and AI',
        'Excellent communication skills',
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Careers - Join Our Team"
        description="Join AI for Students and help shape the future of AI education"
        keywords="careers, jobs, employment, AI education, join our team"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Help us revolutionize AI education and empower the next generation of learners
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission-Driven</h3>
                <p className="text-gray-600">
                  Work on something meaningful that impacts students' lives
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Learn and grow in a fast-paced, innovative environment
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Friendly</h3>
                <p className="text-gray-600">
                  Work from anywhere with flexible hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>📍 {job.location}</span>
                        <span>🏢 {job.department}</span>
                        <span>⏰ {job.type}</span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-4 md:mt-0 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See a Role That Fits?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute!
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

export default Careers;


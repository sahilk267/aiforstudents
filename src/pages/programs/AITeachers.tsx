import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ProgramOption {
  name: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

const AITeachers: React.FC = () => {
  // const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0, 0]);

  // const tabs = [
  //   { id: 'overview', label: 'Overview' },
  //   { id: 'features', label: 'Features' },
  //   { id: 'teachers', label: 'Our Teachers' },
  //   { id: 'benefits', label: 'Benefits' }
  // ];

  const statistics = [
    { label: 'Expert AI Teachers', value: 50 },
    { label: 'Students Mentored', value: 1000 },
    { label: 'Satisfaction Rate', value: 98 },
    { label: 'Schools Partnered', value: 100 }
  ];

  // const testimonials = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'AI Teacher',
  //     content: 'Teaching AI to students has been incredibly rewarding. Seeing their excitement and growth is amazing.',
  //     image: '/images/testimonials/teacher1.jpg'
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'School Principal',
  //     content: 'The AI Teachers program has transformed our school\'s approach to technology education.',
  //     image: '/images/testimonials/principal1.jpg'
  //   }
  // ];

  const faqs = [
    {
      question: 'What qualifications do your AI teachers have?',
      answer: 'Our AI teachers are experts in artificial intelligence and education, with advanced degrees and years of teaching experience.'
    },
    {
      question: 'How long is the commitment?',
      answer: 'Programs can be customized to your school\'s needs, ranging from semester-long courses to year-round programs.'
    },
    {
      question: 'What resources are provided?',
      answer: 'We provide comprehensive teaching materials, software licenses, and ongoing support for both teachers and students.'
    }
  ];

  const programOptions: ProgramOption[] = [
    {
      name: 'Basic AI Education',
      description: 'Introduction to AI concepts and applications',
      features: ['Weekly sessions', 'Basic AI tools', 'Student progress tracking'],
      price: '$2,000',
      duration: '3 months'
    },
    {
      name: 'Advanced AI Program',
      description: 'Deep dive into AI development and applications',
      features: ['Daily sessions', 'Advanced AI tools', 'Project-based learning'],
      price: '$5,000',
      duration: '6 months'
    }
  ];

  const skills = [
    { name: 'AI Fundamentals', level: 90 },
    { name: 'Programming Skills', level: 85 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Ethical Understanding', level: 88 }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setAnimatedStats(prevStats => 
        prevStats.map((stat, index) => {
          const target = statistics[index].value;
          const increment = target / steps;
          const newValue = Math.min(stat + increment, target);
          return newValue;
        })
      );
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AI Teachers Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Expert AI educators bringing cutting-edge technology to your school
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Request AI Teacher
            </Link>
            <Link
              to="/programs"
              className="px-8 py-3 border border-blue-600 hover:bg-blue-600/20 rounded-lg transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {Math.round(animatedStats[index])}{stat.label === 'Satisfaction Rate' ? '%' : '+'}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Options */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Program Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programOptions.map((program, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                onMouseEnter={() => setHoveredCard(program.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">{program.price}</div>
                    <div className="text-gray-400">{program.duration}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills Developed</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your School's AI Education?</h2>
          <p className="text-xl mb-8">Join the growing number of schools benefiting from our AI Teachers program</p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg transition-colors inline-block"
          >
            Request AI Teacher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AITeachers; 
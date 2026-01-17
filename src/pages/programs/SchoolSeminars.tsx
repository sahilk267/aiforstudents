import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Statistics from '@/components/interactive/Statistics';
import TestimonialsCarousel from '@/components/interactive/TestimonialsCarousel';
import FAQSection from '@/components/interactive/FAQSection';
import ProgramComparison from '@/components/interactive/ProgramComparison';
import SkillLevelIndicator from '@/components/interactive/SkillLevelIndicator';

const SchoolSeminars: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'structure', label: 'Program Structure' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'schedule', label: 'Schedule' }
  ];

  const statistics = [
    { value: 1000, label: 'Students Trained', suffix: '+' },
    { value: 50, label: 'Schools Reached', suffix: '+' },
    { value: 95, label: 'Satisfaction Rate', suffix: '%' },
    { value: 30, label: 'Expert Instructors', suffix: '+' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'School Principal',
      content: 'The AI seminar was a game-changer for our students. They were engaged throughout the session and gained valuable insights into the world of AI.',
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Grade 8 Student',
      content: 'I never thought AI could be so interesting! The hands-on demonstrations and IQ games made learning about AI fun and exciting.',
      image: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Science Teacher',
      content: 'As an educator, I was impressed by how well the seminar was structured. It perfectly balanced theory with practical applications.',
      image: '/images/testimonials/emily.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What age groups are the seminars suitable for?',
      answer: 'Our seminars are designed for students in Grades 5-7 and 8-10. The content is tailored to each age group\'s understanding and interests.'
    },
    {
      question: 'How long does a typical seminar last?',
      answer: 'Each seminar is a 3-hour interactive session, including breaks for activities and discussions.'
    },
    {
      question: 'What equipment or facilities does the school need to provide?',
      answer: 'We bring all necessary equipment. The school only needs to provide a suitable classroom or auditorium with basic audio-visual facilities.'
    },
    {
      question: 'How many students can participate in one seminar?',
      answer: 'We recommend 30-50 students per session for optimal interaction and engagement.'
    }
  ];

  const programs = [
    {
      name: 'Basic AI Introduction',
      description: 'Perfect for beginners with no prior AI knowledge',
      features: [
        { name: 'AI Fundamentals', description: 'Understanding basic AI concepts and applications' },
        { name: 'Interactive Demos', description: 'Hands-on experience with AI tools' },
        { name: 'Basic IQ Games', description: 'Simple pattern recognition and logic exercises' }
      ],
      price: 'Free',
      duration: '3 hours'
    },
    {
      name: 'Advanced AI Workshop',
      description: 'For students with basic AI understanding',
      features: [
        { name: 'Deep Learning Basics', description: 'Introduction to neural networks and machine learning' },
        { name: 'AI Ethics', description: 'Understanding AI\'s impact on society' },
        { name: 'Advanced IQ Games', description: 'Complex problem-solving challenges' }
      ],
      price: 'Contact for pricing',
      duration: '6 hours'
    },
    {
      name: 'AI Career Guidance',
      description: 'Comprehensive program with career counseling',
      features: [
        { name: 'Industry Insights', description: 'Real-world AI applications and career paths' },
        { name: 'Skill Assessment', description: 'Detailed evaluation of AI-related skills' },
        { name: 'Career Planning', description: 'Personalized guidance for AI careers' }
      ],
      price: 'Contact for pricing',
      duration: 'Full day'
    }
  ];

  const skills = [
    {
      name: 'AI Understanding',
      level: 85,
      description: 'Basic comprehension of AI concepts and applications'
    },
    {
      name: 'Problem Solving',
      level: 90,
      description: 'Ability to approach and solve AI-related challenges'
    },
    {
      name: 'Technical Skills',
      level: 75,
      description: 'Hands-on experience with AI tools and technologies'
    },
    {
      name: 'Critical Thinking',
      level: 95,
      description: 'Analytical and logical reasoning abilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-32">
        {/* Hero Section */}
        <div className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-block animate-fade-in">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                  School Seminars
                </span>
              </div>
              <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
                <span className="block">Interactive AI Education</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  for Schools
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Engaging seminars that introduce students to AI concepts, demonstrate real-world applications,
                and help identify future AI talent through interactive activities and IQ assessments.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Schedule a Seminar
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800 transition-all duration-300"
                >
                  View All Programs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Statistics stats={statistics} />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="border-b border-gray-700">
              <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                      }
                      transition-all duration-300
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div 
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCard('duration')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Duration</h3>
                    <p className="text-gray-300">3-hour interactive session</p>
                    {hoveredCard === 'duration' && (
                      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-blue-300 text-sm animate-fade-in">
                        Perfect length to maintain student engagement while covering all key topics
                      </div>
                    )}
                  </div>
                  <div 
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCard('group')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Group Size</h3>
                    <p className="text-gray-300">30-50 students per session</p>
                    {hoveredCard === 'group' && (
                      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-blue-300 text-sm animate-fade-in">
                        Ideal size for interactive discussions and hands-on activities
                      </div>
                    )}
                  </div>
                  <div 
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCard('grade')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Grade Levels</h3>
                    <p className="text-gray-300">Grades 5-7 and 8-10</p>
                    {hoveredCard === 'grade' && (
                      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-blue-300 text-sm animate-fade-in">
                        Content tailored to different age groups and knowledge levels
                      </div>
                    )}
                  </div>
                  <div 
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCard('certificate')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Certificate</h3>
                    <p className="text-gray-300">Certificate of Participation</p>
                    {hoveredCard === 'certificate' && (
                      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-blue-300 text-sm animate-fade-in">
                        Students receive a certificate recognizing their participation and learning
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Program Structure Tab */}
            {activeTab === 'structure' && (
              <div className="animate-fade-in">
                <div className="space-y-12">
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-blue-400">1</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Introduction to AI</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-gray-300 mb-4">Understanding AI fundamentals and its impact on society</p>
                      <ul className="space-y-3">
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">What is AI and how does it work?</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Real-world AI applications</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Interactive demonstrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-blue-400">2</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Mind IQ Games</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-gray-300 mb-4">Engaging activities to assess and develop AI-related skills</p>
                      <ul className="space-y-3">
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Pattern recognition challenges</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Logic and problem-solving exercises</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Team-based AI challenges</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-blue-400">3</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Career Guidance</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-gray-300 mb-4">Exploring AI career paths and opportunities</p>
                      <ul className="space-y-3">
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">AI career pathways</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Required skills and education</span>
                        </li>
                        <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">Industry insights and trends</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-6">For Schools</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Early exposure to AI technology and concepts</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Identify students with AI potential</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Enhance STEM curriculum with AI focus</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-300">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Prepare students for future AI careers</span>
                      </li>
                    </ul>
                  </div>
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-6">For Students</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Hands-on experience with AI technology</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Develop critical thinking and problem-solving skills</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="00 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Gain insights into AI career opportunities</span>
                      </li>
                      <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-300">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Receive a certificate of participation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div className="animate-fade-in">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">Seminar Schedule</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-blue-400">9:00</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Introduction & Welcome</h4>
                        <p className="text-gray-300">Overview of the seminar and introduction to AI concepts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-blue-400">9:30</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">AI Fundamentals</h4>
                        <p className="text-gray-300">Understanding what AI is and how it works</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-blue-400">10:30</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Interactive Demonstrations</h4>
                        <p className="text-gray-300">Hands-on experience with AI applications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-blue-400">11:30</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Mind IQ Games</h4>
                        <p className="text-gray-300">Engaging activities to assess AI-related skills</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-blue-400">12:30</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Career Guidance</h4>
                        <p className="text-gray-300">Exploring AI career paths and opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What People Say</h2>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>

        {/* Program Comparison Section */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Program Options</h2>
            <ProgramComparison programs={programs} />
          </div>
        </div>

        {/* Skill Level Indicators Section */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills Developed</h2>
            <SkillLevelIndicator skills={skills} />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <FAQSection faqs={faqs} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Bring AI Education to Your School?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Schedule a Seminar
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800 transition-all duration-300"
              >
                Explore All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSeminars; 
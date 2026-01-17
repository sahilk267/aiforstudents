import React from 'react';
import { Link } from 'react-router-dom';

const OnlineClasses: React.FC = () => {
  // const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,198,120,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32">
        {/* Hero Section */}
        <div className="relative pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-block animate-fade-in">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Online AI Classes
                </span>
              </div>
              <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
                <span className="block">Learn AI From Anywhere</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                  at Your Own Pace
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Comprehensive online AI education programs designed for students of all levels.
                Learn from expert instructors and get hands-on experience with real AI projects.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Enroll Now
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

        {/* Program Overview */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Schedule</h3>
                <p className="text-gray-300">Learn at your own pace</p>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Sessions</h3>
                <p className="text-gray-300">Interactive online classes</p>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Resources</h3>
                <p className="text-gray-300">Comprehensive materials</p>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Certification</h3>
                <p className="text-gray-300">Recognized credentials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Levels */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Course Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Junior AI Explorer</h3>
                <p className="text-gray-300 mb-4">For Grades 5-7</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Basics
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Simple Projects
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Interactive Games
                  </li>
                </ul>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Innovator</h3>
                <p className="text-gray-300 mb-4">For Grades 8-10</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Concepts
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Machine Learning
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real Projects
                  </li>
                </ul>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Developer</h3>
                <p className="text-gray-300 mb-4">For Grades 11+</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Deep Learning
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Research
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Career Prep
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Program Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Learning Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Live interactive sessions with expert instructors</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Recorded lectures for flexible learning</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Hands-on projects and assignments</span>
                  </li>
                </ul>
              </div>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Support & Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">24/7 access to learning materials</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">One-on-one mentoring sessions</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Community forum for peer learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Start Your AI Learning Journey Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Enroll Now
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

export default OnlineClasses; 
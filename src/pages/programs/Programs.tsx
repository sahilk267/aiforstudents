import React from 'react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Explore Our Programs
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a variety of AI education programs designed to empower students and educators.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/programs/ai-teachers"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">AI Teachers</h3>
              <p className="text-gray-300">Expert AI educators for your school</p>
            </Link>
            <Link
              to="/programs/online-classes"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Online Classes</h3>
              <p className="text-gray-300">Learn AI from anywhere at your own pace</p>
            </Link>
            <Link
              to="/programs/school-seminars"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">School Seminars</h3>
              <p className="text-gray-300">Interactive seminars for schools</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs; 
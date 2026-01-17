import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-8">🔍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </Link>
          <div className="mt-4">
            <Link to="/help" className="text-blue-600 hover:text-blue-700">
              Visit Help Center
            </Link>
          </div>
        </div>
        <div className="mt-12 text-gray-500">
          <p>Error Code: 404</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
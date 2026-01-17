import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const PublicHeader: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsMenuOpen, setIsProgramsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Programs', href: '/programs', hasSubmenu: true },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  const programLinks = [
    { name: 'AI Teachers', href: '/programs/ai-teachers' },
    { name: 'Online Classes', href: '/programs/online-classes' },
    { name: 'School Seminars', href: '/programs/school-seminars' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold text-blue-600">🚀 AI for Students</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:flex">
              {navigation.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-base font-medium ${
                      location.pathname.startsWith(link.href)
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onMouseEnter={() => link.hasSubmenu && setIsProgramsMenuOpen(true)}
                    onMouseLeave={() => link.hasSubmenu && setIsProgramsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasSubmenu && isProgramsMenuOpen && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => setIsProgramsMenuOpen(true)}
                      onMouseLeave={() => setIsProgramsMenuOpen(false)}
                    >
                      {programLinks.map((program) => (
                        <Link
                          key={program.name}
                          to={program.href}
                          className={`block px-4 py-2 text-sm ${
                            location.pathname === program.href
                              ? 'text-blue-600 bg-gray-100'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                          }`}
                        >
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname.startsWith(link.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasSubmenu && (
                    <div className="pl-4 space-y-1">
                      {programLinks.map((program) => (
                        <Link
                          key={program.name}
                          to={program.href}
                          className={`block px-3 py-2 rounded-md text-sm font-medium ${
                            location.pathname === program.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default PublicHeader; 
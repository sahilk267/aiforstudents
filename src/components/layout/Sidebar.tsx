import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Learn AI', path: '/learning', icon: '🎓' },
    { name: 'My Courses', path: '/courses', icon: '📚' },
    { name: 'Games', path: '/games', icon: '🎮' },
    { name: 'AI Tools', path: '/ai-tools', icon: '🤖' },
    { name: 'AI Tutor', path: '/ai-tutor', icon: '💬' },
    { name: 'Assignments', path: '/assignments', icon: '📝' },
    { name: 'Progress', path: '/progress', icon: '📈' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Resources', path: '/resources', icon: '📁' },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white h-auto lg:h-screen shadow-lg lg:sticky lg:top-0">
      <div className="h-full flex flex-col">
        <div className="flex-1 py-4 lg:py-6 overflow-y-auto">
          <nav className="px-3 space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200">
          <Link
            to="/help"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-3">❓</span>
            Help & Support
          </Link>
          <button
            onClick={logout}
            className="mt-2 w-full flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-3">🚪</span>
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

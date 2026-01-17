import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SkipToContent from '@/components/accessibility/SkipToContent';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SkipToContent />
      <Header />
      <div className="flex flex-col lg:flex-row pt-16">
        <Sidebar />
        <main id="main-content" className="flex-1 overflow-auto min-h-screen" role="main" aria-label="Main content">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

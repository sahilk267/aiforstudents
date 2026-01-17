import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/utils/analytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component to handle analytics tracking
 */
const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analytics.trackPageView({
      path: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  useEffect(() => {
    // Initialize analytics on mount
    analytics.init();
  }, []);

  return <>{children}</>;
};

export default AnalyticsWrapper;


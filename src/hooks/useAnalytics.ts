import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics, PageViewEvent } from '@/utils/analytics';

/**
 * Hook to automatically track page views
 */
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    const pageView: PageViewEvent = {
      path: location.pathname + location.search,
      title: document.title,
    };

    analytics.trackPageView(pageView);
  }, [location]);
};

/**
 * Hook to track component mount/unmount
 */
export const useComponentTracking = (componentName: string): void => {
  useEffect(() => {
    analytics.trackEvent({
      action: 'component_view',
      category: 'engagement',
      label: componentName,
    });

    return () => {
      analytics.trackEvent({
        action: 'component_unmount',
        category: 'engagement',
        label: componentName,
      });
    };
  }, [componentName]);
};

/**
 * Hook to track user interactions
 */
export const useInteractionTracking = () => {
  const trackClick = (element: string, details?: Record<string, any>) => {
    analytics.trackAction('click', {
      element,
      ...details,
    });
  };

  const trackHover = (element: string, duration?: number) => {
    analytics.trackAction('hover', {
      element,
      duration,
    });
  };

  const trackFocus = (element: string) => {
    analytics.trackAction('focus', {
      element,
    });
  };

  return {
    trackClick,
    trackHover,
    trackFocus,
  };
};


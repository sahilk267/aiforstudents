/**
 * Analytics tracking utilities
 * Supports multiple analytics providers (Google Analytics, custom, etc.)
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export interface PageViewEvent {
  path: string;
  title?: string;
  [key: string]: any;
}

class Analytics {
  private enabled: boolean = false;
  private debug: boolean = false;

  constructor() {
    this.enabled = process.env.NODE_ENV === 'production';
    this.debug = process.env.NODE_ENV === 'development';
  }

  /**
   * Initialize analytics
   */
  init(): void {
    if (!this.enabled) {
      if (this.debug) {
        console.log('[Analytics] Analytics disabled in development mode');
      }
      return;
    }

    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      if (this.debug) {
        console.log('[Analytics] Google Analytics initialized');
      }
    }

    // Initialize custom analytics
    this.trackEvent({
      action: 'init',
      category: 'analytics',
    });
  }

  /**
   * Track page view
   */
  trackPageView(event: PageViewEvent): void {
    if (!this.enabled) {
      if (this.debug) {
        console.log('[Analytics] Page view:', event);
      }
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.VITE_GA_MEASUREMENT_ID || '', {
        page_path: event.path,
        page_title: event.title,
      });
    }

    // Custom analytics
    this.sendToAnalytics('pageview', event);
  }

  /**
   * Track custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.enabled) {
      if (this.debug) {
        console.log('[Analytics] Event:', event);
      }
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event,
      });
    }

    // Custom analytics
    this.sendToAnalytics('event', event);
  }

  /**
   * Track user action (simplified)
   */
  trackAction(action: string, details?: Record<string, any>): void {
    this.trackEvent({
      action,
      category: 'user_action',
      ...details,
    });
  }

  /**
   * Track game completion
   */
  trackGameComplete(gameName: string, score: number, timeSpent: number): void {
    this.trackEvent({
      action: 'game_complete',
      category: 'games',
      label: gameName,
      value: score,
      time_spent: timeSpent,
    });
  }

  /**
   * Track lesson completion
   */
  trackLessonComplete(lessonId: string, lessonName: string, timeSpent: number): void {
    this.trackEvent({
      action: 'lesson_complete',
      category: 'learning',
      label: lessonName,
      lesson_id: lessonId,
      time_spent: timeSpent,
    });
  }

  /**
   * Track AI tool usage
   */
  trackToolUsage(toolName: string, action: string): void {
    this.trackEvent({
      action: 'tool_usage',
      category: 'ai_tools',
      label: toolName,
      tool_action: action,
    });
  }

  /**
   * Track search query
   */
  trackSearch(query: string, resultsCount?: number): void {
    this.trackEvent({
      action: 'search',
      category: 'user_action',
      label: query,
      value: resultsCount,
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    const errorEvent = {
      action: 'error',
      category: 'system',
      label: error.message,
      error_name: error.name,
      error_stack: error.stack,
      ...context,
    };

    this.trackEvent(errorEvent);

    // In production, you can send to error tracking service
    if (this.enabled && typeof fetch !== 'undefined') {
      // Example: Send to error tracking API
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...errorEvent,
      //     timestamp: Date.now(),
      //     url: window.location.href,
      //     userAgent: navigator.userAgent,
      //   }),
      // }).catch((err) => {
      //   console.error('[Analytics] Failed to send error:', err);
      // });
    }
  }

  /**
   * Track performance metric
   */
  trackPerformance(metricName: string, value: number, unit: string = 'ms'): void {
    this.trackEvent({
      action: 'performance',
      category: 'metrics',
      label: metricName,
      value,
      unit,
    });
  }

  /**
   * Send data to analytics service
   */
  private sendToAnalytics(type: string, data: any): void {
    // In production, send to your analytics endpoint
    if (this.enabled && typeof fetch !== 'undefined') {
      // Example: Send to custom analytics API
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ type, data, timestamp: Date.now() }),
      // }).catch((err) => {
      //   console.error('[Analytics] Failed to send:', err);
      // });
    }

    if (this.debug) {
      console.log(`[Analytics] ${type}:`, data);
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    if (!this.enabled) {
      if (this.debug) {
        console.log('[Analytics] User properties:', properties);
      }
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('set', 'user_properties', properties);
    }
  }

  /**
   * Identify user
   */
  identify(userId: string, traits?: Record<string, any>): void {
    if (!this.enabled) {
      if (this.debug) {
        console.log('[Analytics] Identify user:', userId, traits);
      }
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('set', { user_id: userId, ...traits });
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Initialize on import in production
if (typeof window !== 'undefined') {
  analytics.init();
}


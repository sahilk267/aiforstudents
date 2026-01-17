/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

/**
 * Measure component render time
 */
export const measureRenderTime = (componentName: string): (() => void) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to analytics service
      // analytics.track('component_render_time', { componentName, renderTime });
    }
  };
};

/**
 * Measure function execution time
 */
export const measureExecutionTime = async <T>(
  fn: () => Promise<T>,
  label: string
): Promise<T> => {
  const startTime = performance.now();
  try {
    const result = await fn();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${label} executed in ${executionTime.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.error(`[Performance] ${label} failed after ${executionTime.toFixed(2)}ms`, error);
    throw error;
  }
};

/**
 * Get Web Vitals metrics
 */
export const getWebVitals = (): void => {
  if (typeof window === 'undefined') return;

  // Measure Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('[Web Vitals] LCP:', lastEntry);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // PerformanceObserver not supported
    }

    // Measure First Input Delay (FID)
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('[Web Vitals] FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


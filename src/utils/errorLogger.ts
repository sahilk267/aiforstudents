/**
 * Error Logging Utility
 * Centralized error logging and tracking system
 */

import { analytics } from './analytics';

export interface ErrorLog {
  id: string;
  timestamp: number;
  message: string;
  stack?: string;
  errorName: string;
  url: string;
  userAgent: string;
  userId?: string;
  context?: Record<string, any>;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorLogger {
  private logs: ErrorLog[] = [];
  private maxLogs: number = 100; // Keep last 100 errors in memory
  private isDevelopment: boolean = process.env.NODE_ENV === 'development';

  /**
   * Log an error
   */
  logError(
    error: Error | string,
    context?: Record<string, any>,
    severity: ErrorLog['severity'] = 'medium'
  ): string {
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const errorMessage = typeof error === 'string' ? error : error.message;
    const errorStack = typeof error === 'string' ? undefined : error.stack;
    const errorName = typeof error === 'string' ? 'Error' : error.name;

    const errorLog: ErrorLog = {
      id: errorId,
      timestamp: Date.now(),
      message: errorMessage,
      stack: errorStack,
      errorName,
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      context,
      severity,
    };

    // Add to logs array
    this.logs.unshift(errorLog);
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }

    // Send to analytics
    if (typeof error === 'object') {
      analytics.trackError(error, {
        error_id: errorId,
        severity,
        ...context,
      });
    }

    // Console log in development
    if (this.isDevelopment) {
      console.error(`[ErrorLogger] ${errorName}:`, errorMessage, {
        id: errorId,
        stack: errorStack,
        context,
        severity,
      });
    }

    // Store in localStorage for persistence (development only)
    if (this.isDevelopment && typeof window !== 'undefined') {
      try {
        const storedErrors = this.getStoredErrors();
        storedErrors.unshift(errorLog);
        // Keep only last 50 in localStorage
        if (storedErrors.length > 50) {
          storedErrors.pop();
        }
        localStorage.setItem('error_logs', JSON.stringify(storedErrors));
      } catch (e) {
        // localStorage might be disabled
        console.warn('[ErrorLogger] Failed to store error in localStorage:', e);
      }
    }

    return errorId;
  }

  /**
   * Get all logged errors
   */
  getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  /**
   * Get errors from localStorage
   */
  getStoredErrors(): ErrorLog[] {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem('error_logs');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('error_logs');
      } catch (e) {
        // Ignore
      }
    }
  }

  /**
   * Get error count by severity
   */
  getErrorStats(): Record<string, number> {
    const stats: Record<string, number> = {
      total: this.logs.length,
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    };

    this.logs.forEach((log) => {
      stats[log.severity] = (stats[log.severity] || 0) + 1;
    });

    return stats;
  }

  /**
   * Get recent errors (last N errors)
   */
  getRecentErrors(count: number = 10): ErrorLog[] {
    return this.logs.slice(0, count);
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();

// Global error handler
if (typeof window !== 'undefined') {
  // Handle unhandled errors
  window.addEventListener('error', (event) => {
    errorLogger.logError(
      event.error || new Error(event.message),
      {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        type: 'unhandled_error',
      },
      'high'
    );
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    errorLogger.logError(
      error,
      {
        type: 'unhandled_promise_rejection',
        reason: event.reason,
      },
      'high'
    );
  });
}


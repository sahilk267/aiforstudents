/**
 * Error Dashboard Component
 * Displays error logs in development mode
 */

import React, { useState, useEffect } from 'react';
import { errorLogger, ErrorLog } from '@/utils/errorLogger';

const ErrorDashboard: React.FC = () => {
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedError, setSelectedError] = useState<ErrorLog | null>(null);

  useEffect(() => {
    // Load errors from logger
    const loadErrors = () => {
      const storedErrors = errorLogger.getStoredErrors();
      const currentErrors = errorLogger.getLogs();
      // Merge and deduplicate
      const allErrors = [...currentErrors, ...storedErrors].reduce(
        (acc, error) => {
          if (!acc.find((e) => e.id === error.id)) {
            acc.push(error);
          }
          return acc;
        },
        [] as ErrorLog[]
      );
      // Sort by timestamp (newest first)
      allErrors.sort((a, b) => b.timestamp - a.timestamp);
      setErrors(allErrors);
    };

    loadErrors();

    // Refresh every 5 seconds
    const interval = setInterval(loadErrors, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = errorLogger.getErrorStats();

  const getSeverityColor = (severity: ErrorLog['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
        title="Error Dashboard"
      >
        <span className="text-xl">🐛</span>
        {stats.total > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {stats.total}
          </span>
        )}
      </button>

      {/* Dashboard Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Error Dashboard</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Stats */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="grid grid-cols-5 gap-2 text-sm">
                <div className="text-center">
                  <div className="font-bold text-gray-900">{stats.total}</div>
                  <div className="text-gray-600">Total</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-red-600">{stats.critical}</div>
                  <div className="text-gray-600">Critical</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">{stats.high}</div>
                  <div className="text-gray-600">High</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-yellow-600">{stats.medium}</div>
                  <div className="text-gray-600">Medium</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600">{stats.low}</div>
                  <div className="text-gray-600">Low</div>
                </div>
              </div>
              <button
                onClick={() => {
                  errorLogger.clearLogs();
                  setErrors([]);
                }}
                className="mt-3 text-sm text-red-600 hover:text-red-700"
              >
                Clear All Logs
              </button>
            </div>

            {/* Error List */}
            <div className="flex-1 overflow-y-auto p-4">
              {errors.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  No errors logged yet
                </div>
              ) : (
                <div className="space-y-2">
                  {errors.map((error) => (
                    <div
                      key={error.id}
                      onClick={() => setSelectedError(error)}
                      className={`p-3 border rounded cursor-pointer hover:bg-gray-50 ${
                        selectedError?.id === error.id ? 'border-blue-500 bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(
                                error.severity
                              )}`}
                            >
                              {error.severity}
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {error.errorName}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">{error.message}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatTime(error.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Error Details */}
            {selectedError && (
              <div className="border-t p-4 bg-gray-50 max-h-64 overflow-y-auto">
                <h3 className="font-semibold text-gray-900 mb-2">Error Details</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">ID:</span> {selectedError.id}
                  </div>
                  <div>
                    <span className="font-medium">Message:</span> {selectedError.message}
                  </div>
                  {selectedError.stack && (
                    <div>
                      <span className="font-medium">Stack:</span>
                      <pre className="mt-1 text-xs bg-gray-100 p-2 rounded overflow-auto">
                        {selectedError.stack}
                      </pre>
                    </div>
                  )}
                  {selectedError.context && Object.keys(selectedError.context).length > 0 && (
                    <div>
                      <span className="font-medium">Context:</span>
                      <pre className="mt-1 text-xs bg-gray-100 p-2 rounded overflow-auto">
                        {JSON.stringify(selectedError.context, null, 2)}
                      </pre>
                    </div>
                  )}
                  <div>
                    <span className="font-medium">URL:</span> {selectedError.url}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorDashboard;


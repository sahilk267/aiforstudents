import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { errorLogger } from '@/utils/errorLogger';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'aiforstudents_auth';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(AUTH_STORAGE_KEY);
        return stored === 'true';
      } catch (error) {
        errorLogger.logError(new Error('Failed to read auth from localStorage'), { type: 'auth_init' }, 'low');
        return false;
      }
    }
    return false;
  });

  // Sync to localStorage whenever auth state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, String(isAuthenticated));
      } catch (error) {
        errorLogger.logError(new Error('Failed to save auth to localStorage'), { type: 'auth_save' }, 'low');
      }
    }
  }, [isAuthenticated]);

  const login = async (_email: string, _password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, accept any email/password
    setIsAuthenticated(true);
    
    // Log login for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('[AuthContext] User logged in');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Clear from localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } catch (error) {
        errorLogger.logError(new Error('Failed to clear auth from localStorage'), { type: 'auth_logout' }, 'low');
      }
    }
    
    // Log logout for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('[AuthContext] User logged out');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
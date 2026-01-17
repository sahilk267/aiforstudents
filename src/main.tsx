import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.tsx';
import { getWebVitals } from './utils/performance';
import { errorLogger } from './utils/errorLogger';
import ErrorDashboard from './components/error/ErrorDashboard';

// Initialize performance monitoring
if (process.env.NODE_ENV === 'development') {
  getWebVitals();
}

// Global error handlers are set up in errorLogger.ts
// This ensures errors are logged even before React renders

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      {process.env.NODE_ENV === 'development' && <ErrorDashboard />}
    </HelmetProvider>
  </StrictMode>
);

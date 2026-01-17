import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import PublicLayout from '@components/layout/PublicLayout';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { usePageTracking } from '@/hooks/useAnalytics';
import ErrorBoundary from '@/components/error/ErrorBoundary';

// Lazy load pages for better performance
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Courses = lazy(() => import('@/pages/Courses'));
const AITools = lazy(() => import('@/pages/AITools'));
const Community = lazy(() => import('@/pages/Community'));
const Assignments = lazy(() => import('@/pages/Assignments'));
const Progress = lazy(() => import('@/pages/Progress'));
const Resources = lazy(() => import('@/pages/Resources'));
const LearningMaterials = lazy(() => import('@/pages/resources/LearningMaterials'));
const Help = lazy(() => import('@/pages/Help'));

// Auth pages
const SignIn = lazy(() => import('@/pages/auth/SignIn'));
const SignUp = lazy(() => import('@/pages/auth/SignUp'));

// Static pages
const Landing = lazy(() => import('@/pages/static/Landing'));
const About = lazy(() => import('@/pages/static/About'));
const Features = lazy(() => import('@/pages/static/Features'));
const Pricing = lazy(() => import('@/pages/static/Pricing'));
const Blog = lazy(() => import('@/pages/static/Blog'));
const Privacy = lazy(() => import('@/pages/static/Privacy'));
const Terms = lazy(() => import('@/pages/static/Terms'));
const Contact = lazy(() => import('@/pages/static/Contact'));
const FAQ = lazy(() => import('@/pages/static/FAQ'));
const Careers = lazy(() => import('@/pages/static/Careers'));
const Partners = lazy(() => import('@/pages/static/Partners'));

// Error pages
const NotFound = lazy(() => import('@/pages/error/NotFound'));

// Programs
const SchoolSeminars = lazy(() => import('@/pages/programs/SchoolSeminars'));
const OnlineClasses = lazy(() => import('@/pages/programs/OnlineClasses'));
const AITeachers = lazy(() => import('@/pages/programs/AITeachers'));
const Programs = lazy(() => import('@/pages/programs/Programs'));
const SummerCamps = lazy(() => import('@/pages/programs/SummerCamps'));

// Learning pages
const LearnAI = lazy(() => import('@/pages/learning/LearnAI'));
const LessonView = lazy(() => import('@/pages/learning/LessonView'));

// Games
const TrainTheAI = lazy(() => import('@/pages/games/TrainTheAI'));
const AIOrHuman = lazy(() => import('@/pages/games/AIOrHuman'));
const PredictionGame = lazy(() => import('@/pages/games/PredictionGame'));
const MemoryMatch = lazy(() => import('@/pages/games/MemoryMatch'));
const PuzzleChallenge = lazy(() => import('@/pages/games/PuzzleChallenge'));
const QuickBrainTest = lazy(() => import('@/pages/games/QuickBrainTest'));

// AI Tools
const Summarizer = lazy(() => import('@/pages/tools/Summarizer'));
const FlashcardGenerator = lazy(() => import('@/pages/tools/FlashcardGenerator'));
const StudyPlanGenerator = lazy(() => import('@/pages/tools/StudyPlanGenerator'));

// Profile and AI Tutor
const Profile = lazy(() => import('@/pages/Profile'));
const AITutorPage = lazy(() => import('@/pages/AITutorPage'));
const Games = lazy(() => import('@/pages/Games'));
const CodeAssistant = lazy(() => import('@/components/teaching/CodeAssistant'));

// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

function AppRoutes() {
  // Track page views
  usePageTracking();

  return (
    <Suspense fallback={<LoadingSpinner fullScreen message="Loading page..." />}>
      <Routes>
      {/* Public Routes with PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Programs Route */}
        <Route path="/programs" element={<Programs />} />

        {/* Programs Routes */}
        <Route path="/programs/school-seminars" element={<SchoolSeminars />} />
        <Route path="/programs/online-classes" element={<OnlineClasses />} />
        <Route path="/programs/ai-teachers" element={<AITeachers />} />
        <Route path="/programs/summer-camps" element={<SummerCamps />} />
      </Route>

      {/* Protected Routes with Layout */}
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/*"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning"
          element={
            <ProtectedRoute>
              <LearnAI />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <LessonView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-tools"
          element={
            <ProtectedRoute>
              <AITools />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools/summarizer"
          element={
            <ProtectedRoute>
              <Summarizer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools/flashcard-generator"
          element={
            <ProtectedRoute>
              <FlashcardGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools/study-plan-generator"
          element={
            <ProtectedRoute>
              <StudyPlanGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/train-the-ai"
          element={
            <ProtectedRoute>
              <TrainTheAI />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/ai-or-human"
          element={
            <ProtectedRoute>
              <AIOrHuman />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/prediction-game"
          element={
            <ProtectedRoute>
              <PredictionGame />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/memory-match"
          element={
            <ProtectedRoute>
              <MemoryMatch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/puzzle-challenge"
          element={
            <ProtectedRoute>
              <PuzzleChallenge />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/quick-brain-test"
          element={
            <ProtectedRoute>
              <QuickBrainTest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <Games />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-tutor"
          element={
            <ProtectedRoute>
              <AITutorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <Assignments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources/materials"
          element={
            <ProtectedRoute>
              <LearningMaterials />
            </ProtectedRoute>
          }
        />
        <Route path="/help" element={<Help />} />
        <Route path="/teaching/code-assistant" element={<CodeAssistant />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

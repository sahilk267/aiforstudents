import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { analytics } from '@/utils/analytics';

interface LessonContent {
  id: string;
  title: string;
  content: string[];
  quiz?: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

const lessonsData: Record<string, LessonContent> = {
  'what-is-ai': {
    id: 'what-is-ai',
    title: 'What is AI?',
    content: [
      'Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans.',
      'The term "AI" was first coined in 1956 at a conference at Dartmouth College. Since then, AI has evolved significantly.',
      'AI systems can perform tasks such as visual perception, speech recognition, decision-making, and language translation.',
      'There are two main types of AI: Narrow AI (designed for specific tasks) and General AI (hypothetical AI with human-like intelligence).',
      'Examples of AI in daily life include virtual assistants (Siri, Alexa), recommendation systems (Netflix, Amazon), and autonomous vehicles.',
    ],
    quiz: [
      {
        question: 'What is Artificial Intelligence?',
        options: [
          'A type of computer virus',
          'Simulation of human intelligence in machines',
          'A programming language',
          'A type of database',
        ],
        correct: 1,
      },
      {
        question: 'When was the term "AI" first coined?',
        options: ['1945', '1956', '1970', '1985'],
        correct: 1,
      },
    ],
  },
  'ai-vs-human': {
    id: 'ai-vs-human',
    title: 'AI vs Human',
    content: [
      'AI excels at processing large amounts of data quickly and finding patterns that humans might miss.',
      'Humans have creativity, emotional intelligence, and common sense that AI currently lacks.',
      'AI can work 24/7 without fatigue, while humans need rest and breaks.',
      'Humans can understand context and nuance better than current AI systems.',
      'The best approach is often a combination of AI and human intelligence working together.',
    ],
  },
  'where-is-ai-used': {
    id: 'where-is-ai-used',
    title: 'Where is AI Used?',
    content: [
      'Healthcare: AI helps in disease diagnosis, drug discovery, and personalized treatment plans.',
      'Transportation: Self-driving cars, traffic optimization, and route planning.',
      'Finance: Fraud detection, algorithmic trading, and credit scoring.',
      'Education: Personalized learning, automated grading, and intelligent tutoring systems.',
      'Entertainment: Content recommendation, game AI, and virtual reality experiences.',
      'Retail: Inventory management, customer service chatbots, and price optimization.',
    ],
  },
  'myths-about-ai': {
    id: 'myths-about-ai',
    title: 'Myths about AI',
    content: [
      'Myth 1: AI will replace all human jobs. Reality: AI will change jobs and create new opportunities.',
      'Myth 2: AI is infallible. Reality: AI systems can make errors and have biases.',
      'Myth 3: AI will become conscious and take over. Reality: Current AI lacks consciousness and general intelligence.',
      'Myth 4: AI is too complex for students. Reality: Anyone can learn AI basics with the right resources.',
      'Myth 5: AI is only for tech companies. Reality: AI is being used across all industries.',
    ],
  },
};

const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());

  const lesson = lessonId ? lessonsData[lessonId] : null;

  // Track lesson view
  useEffect(() => {
    if (lesson) {
      analytics.trackEvent({
        action: 'lesson_view',
        category: 'learning',
        label: lesson.title,
        lesson_id: lesson.id,
      });
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <button
            onClick={() => navigate('/learning')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Learning
          </button>
        </div>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentSection < lesson.content.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/learning')}
            className="text-blue-600 hover:text-blue-700 mb-4 flex items-center"
          >
            ← Back to Lessons
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              Section {currentSection + 1} of {lesson.content.length}
            </span>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {lesson.content[currentSection]}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentSection === lesson.content.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* Quiz Section */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quiz</h2>
            {lesson.quiz.map((q, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {index + 1}. {q.question}
                </h3>
                <div className="space-y-2">
                  {q.options.map((option, optIndex) => (
                    <label
                      key={optIndex}
                      className={`flex items-center p-3 border-2 rounded-md cursor-pointer ${
                        showResults
                          ? optIndex === q.correct
                            ? 'border-green-500 bg-green-50'
                            : quizAnswers[index] === optIndex && optIndex !== q.correct
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={optIndex}
                        checked={quizAnswers[index] === optIndex}
                        onChange={() => {
                          const newAnswers = [...quizAnswers];
                          newAnswers[index] = optIndex;
                          setQuizAnswers(newAnswers);
                        }}
                        disabled={showResults}
                        className="mr-3"
                      />
                      <span>{option}</span>
                      {showResults && optIndex === q.correct && (
                        <span className="ml-auto text-green-600 font-semibold">✓ Correct</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {!showResults ? (
              <button
                onClick={handleQuizSubmit}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 mt-4"
              >
                Submit Quiz
              </button>
            ) : (
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <p className="text-blue-900">
                  Score:{' '}
                  {lesson.quiz.filter((q, i) => quizAnswers[i] === q.correct).length} /{' '}
                  {lesson.quiz.length}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Complete Lesson Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              // Track lesson completion
              const timeSpent = Math.floor((Date.now() - startTime) / 1000);
              if (lesson) {
                analytics.trackLessonComplete(lesson.id, lesson.title, timeSpent);
              }
              // Mark lesson as complete (would integrate with backend)
              navigate('/learning');
            }}
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 text-lg font-medium"
          >
            Mark as Complete ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;


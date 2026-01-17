import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface Level {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

const LearnAI: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string>('level1');
  const [completedLessons] = useState<Set<string>>(new Set());

  const levels: Level[] = [
    {
      id: 'level1',
      title: 'Level 1: AI Fundamentals',
      description: 'Start your AI journey with the basics',
      lessons: [
        {
          id: 'what-is-ai',
          title: 'What is AI?',
          description: 'Understand the fundamental concepts of Artificial Intelligence and its history.',
          duration: '15 min',
          completed: completedLessons.has('what-is-ai'),
          locked: false,
        },
        {
          id: 'ai-vs-human',
          title: 'AI vs Human',
          description: 'Explore the differences and similarities between AI and human intelligence.',
          duration: '20 min',
          completed: completedLessons.has('ai-vs-human'),
          locked: false,
        },
        {
          id: 'where-is-ai-used',
          title: 'Where is AI Used?',
          description: 'Discover real-world applications of AI in various industries.',
          duration: '25 min',
          completed: completedLessons.has('where-is-ai-used'),
          locked: false,
        },
        {
          id: 'myths-about-ai',
          title: 'Myths about AI',
          description: 'Debunk common misconceptions about Artificial Intelligence.',
          duration: '18 min',
          completed: completedLessons.has('myths-about-ai'),
          locked: false,
        },
      ],
    },
    {
      id: 'level2',
      title: 'Level 2: Machine Learning Basics',
      description: 'Dive deeper into how machines learn',
      lessons: [
        {
          id: 'intro-ml',
          title: 'Introduction to Machine Learning',
          description: 'Learn what machine learning is and how it differs from traditional programming.',
          duration: '20 min',
          completed: completedLessons.has('intro-ml'),
          locked: !completedLessons.has('myths-about-ai'),
        },
        {
          id: 'types-of-ml',
          title: 'Types of Machine Learning',
          description: 'Explore supervised, unsupervised, and reinforcement learning.',
          duration: '25 min',
          completed: completedLessons.has('types-of-ml'),
          locked: !completedLessons.has('intro-ml'),
        },
        {
          id: 'ml-algorithms',
          title: 'Common ML Algorithms',
          description: 'Understand popular algorithms like linear regression, decision trees, and neural networks.',
          duration: '30 min',
          completed: completedLessons.has('ml-algorithms'),
          locked: !completedLessons.has('types-of-ml'),
        },
        {
          id: 'training-models',
          title: 'Training ML Models',
          description: 'Learn how to train, validate, and test machine learning models.',
          duration: '35 min',
          completed: completedLessons.has('training-models'),
          locked: !completedLessons.has('ml-algorithms'),
        },
      ],
    },
    {
      id: 'level3',
      title: 'Level 3: Practical AI',
      description: 'Build real AI applications',
      lessons: [
        {
          id: 'ai-projects',
          title: 'AI Project Ideas',
          description: 'Get inspired with practical AI project ideas you can build.',
          duration: '20 min',
          completed: completedLessons.has('ai-projects'),
          locked: !completedLessons.has('training-models'),
        },
        {
          id: 'ai-tools',
          title: 'Essential AI Tools',
          description: 'Discover tools and frameworks used in AI development.',
          duration: '25 min',
          completed: completedLessons.has('ai-tools'),
          locked: !completedLessons.has('ai-projects'),
        },
        {
          id: 'building-chatbot',
          title: 'Building a Chatbot',
          description: 'Step-by-step guide to creating your first AI chatbot.',
          duration: '40 min',
          completed: completedLessons.has('building-chatbot'),
          locked: !completedLessons.has('ai-tools'),
        },
        {
          id: 'ai-ethics',
          title: 'AI Ethics and Future',
          description: 'Explore ethical considerations and the future of AI.',
          duration: '30 min',
          completed: completedLessons.has('ai-ethics'),
          locked: !completedLessons.has('building-chatbot'),
        },
      ],
    },
  ];

  const currentLevel = levels.find((l) => l.id === selectedLevel) || levels[0];

  const handleLessonClick = (lessonId: string) => {
    if (!currentLevel.lessons.find((l) => l.id === lessonId)?.locked) {
      navigate(`/learning/lesson/${lessonId}`);
    }
  };

  // Function reserved for future lesson completion feature
  // const markLessonComplete = (lessonId: string) => {
  //   setCompletedLessons(new Set([...completedLessons, lessonId]));
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main" aria-label="Learn AI section">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn AI</h1>
          <p className="text-lg text-gray-600">
            Master Artificial Intelligence step by step with our comprehensive learning modules
          </p>
        </div>

        {/* Level Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedLevel === level.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {level.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Level Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{currentLevel.title}</h2>
          <p className="text-gray-600">{currentLevel.description}</p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLevel.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`bg-white rounded-lg shadow-sm border-2 p-6 transition-all ${
                lesson.locked
                  ? 'opacity-60 cursor-not-allowed border-gray-200'
                  : lesson.completed
                  ? 'border-green-500 hover:shadow-md cursor-pointer'
                  : 'border-gray-200 hover:border-blue-500 hover:shadow-md cursor-pointer'
              }`}
              onClick={() => !lesson.locked && handleLessonClick(lesson.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                  {lesson.completed && (
                    <span className="text-green-500 text-xl">✓</span>
                  )}
                  {lesson.locked && (
                    <span className="text-gray-400 text-xl">🔒</span>
                  )}
                </div>
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{lesson.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
              {!lesson.locked && (
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
                </button>
              )}
              {lesson.locked && (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed"
                >
                  Locked
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
          <div className="space-y-3">
            {levels.map((level) => {
              const completedCount = level.lessons.filter((l) =>
                completedLessons.has(l.id)
              ).length;
              const totalCount = level.lessons.length;
              const percentage = (completedCount / totalCount) * 100;
              return (
                <div key={level.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{level.title}</span>
                    <span className="text-gray-600">
                      {completedCount}/{totalCount} lessons
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAI;


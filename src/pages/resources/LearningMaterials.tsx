import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

interface Material {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  downloadUrl?: string;
  level: string;
}

const LearningMaterials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const materials: Material[] = [
    {
      id: 1,
      title: 'Introduction to AI - Beginner Guide',
      category: 'guides',
      type: 'PDF',
      description: 'A comprehensive guide covering AI basics, history, and applications.',
      level: 'beginner',
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      category: 'guides',
      type: 'PDF',
      description: 'Learn the core concepts of machine learning with examples.',
      level: 'intermediate',
    },
    {
      id: 3,
      title: 'AI Project Ideas for Students',
      category: 'projects',
      type: 'PDF',
      description: '50+ project ideas to practice your AI skills.',
      level: 'all',
    },
    {
      id: 4,
      title: 'Neural Networks Explained',
      category: 'tutorials',
      type: 'Video Series',
      description: 'Step-by-step video tutorials on neural networks.',
      level: 'advanced',
    },
    {
      id: 5,
      title: 'AI Glossary - Terms & Definitions',
      category: 'reference',
      type: 'PDF',
      description: 'Complete glossary of AI and ML terms.',
      level: 'all',
    },
    {
      id: 6,
      title: 'Python for AI - Cheat Sheet',
      category: 'reference',
      type: 'PDF',
      description: 'Quick reference guide for Python libraries used in AI.',
      level: 'intermediate',
    },
    {
      id: 7,
      title: 'AI Ethics and Responsibility',
      category: 'guides',
      type: 'PDF',
      description: 'Understanding the ethical implications of AI.',
      level: 'all',
    },
    {
      id: 8,
      title: 'Building Your First AI Model',
      category: 'tutorials',
      type: 'Interactive',
      description: 'Hands-on tutorial to build your first machine learning model.',
      level: 'beginner',
    },
  ];

  const categories = ['all', 'guides', 'tutorials', 'projects', 'reference'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredMaterials = materials.filter((material) => {
    const categoryMatch = selectedCategory === 'all' || material.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || material.level === 'all' || material.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <>
      <SEOHead
        title="Learning Materials - Free AI Resources"
        description="Download free learning materials, guides, tutorials, and resources for AI education"
        keywords="learning materials, AI resources, free downloads, study guides, tutorials"
      />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Materials</h1>
            <p className="text-lg text-gray-600">
              Free resources to enhance your AI learning journey
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => (
              <div key={material.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h3>
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {material.type}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {material.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Level: {material.level.charAt(0).toUpperCase() + material.level.slice(1)}
                  </span>
                  <button
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    onClick={() => {
                      // In production, this would download the file
                      alert(`Downloading ${material.title}...`);
                    }}
                  >
                    Download →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMaterials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No materials found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Additional Resources */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Looking for More?</h2>
            <p className="text-blue-800 mb-6">
              Check out our other resources including AI Tools, Blog articles, and interactive learning modules.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ai-tools"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors"
              >
                Explore AI Tools
              </Link>
              <Link
                to="/blog"
                className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 font-medium transition-colors border border-blue-600"
              >
                Read Blog
              </Link>
              <Link
                to="/learning"
                className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 font-medium transition-colors border border-blue-600"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningMaterials;


import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
        <button className="btn-primary">Browse All Courses</button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course) => (
          <div key={course} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <div className="flex items-center justify-center text-4xl">
                📚
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Course {course}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Learn about AI and its applications in various fields.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">12 lessons</span>
                <button className="text-sm text-primary-600 hover:text-primary-700">
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 
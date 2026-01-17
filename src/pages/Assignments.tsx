import React from 'react';

const Assignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: 'Introduction to AI',
      dueDate: '2024-04-15',
      status: 'pending',
      progress: 0,
      description: 'Learn the basics of Artificial Intelligence and its applications.',
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      dueDate: '2024-04-20',
      status: 'in-progress',
      progress: 45,
      description: 'Understand core concepts of Machine Learning algorithms.',
    },
    {
      id: 3,
      title: 'Neural Networks',
      dueDate: '2024-04-25',
      status: 'completed',
      progress: 100,
      description: 'Deep dive into Neural Networks and their architectures.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New Assignment
        </button>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                <p className="text-gray-600 mt-1">{assignment.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : assignment.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{assignment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${assignment.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
              <button className="text-blue-600 hover:text-blue-800">View Details →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments; 
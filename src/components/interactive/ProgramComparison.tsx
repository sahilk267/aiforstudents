import React, { useState } from 'react';

interface Feature {
  name: string;
  description: string;
}

interface Program {
  name: string;
  description: string;
  features: Feature[];
  price?: string;
  duration?: string;
}

interface ProgramComparisonProps {
  programs: Program[];
}

const ProgramComparison: React.FC<ProgramComparisonProps> = ({ programs }) => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 transform ${
              hoveredProgram === index
                ? 'border-blue-500 scale-105 shadow-lg shadow-blue-500/20'
                : 'border-gray-700 hover:border-gray-600'
            }`}
            onMouseEnter={() => setHoveredProgram(index)}
            onMouseLeave={() => setHoveredProgram(null)}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{program.name}</h3>
            <p className="text-gray-400 mb-4">{program.description}</p>
            
            {program.price && (
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-400">{program.price}</span>
                <span className="text-gray-400 ml-2">/ {program.duration}</span>
              </div>
            )}

            <div className="space-y-4">
              {program.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="group flex items-start space-x-3"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {feature.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramComparison; 
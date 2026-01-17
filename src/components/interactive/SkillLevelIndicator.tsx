import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  description: string;
}

interface SkillLevelIndicatorProps {
  skills: Skill[];
}

const SkillLevelIndicator: React.FC<SkillLevelIndicatorProps> = ({ skills }) => {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const duration = 1500; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const stepDuration = duration / steps;

    skills.forEach((skill, index) => {
      let currentStep = 0;
      const increment = skill.level / steps;

      const interval = setInterval(() => {
        currentStep++;
        setAnimatedLevels(prev => {
          const newLevels = [...prev];
          newLevels[index] = Math.min(Math.round(increment * currentStep), skill.level);
          return newLevels;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    });
  }, [skills]);

  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
              {skill.name}
            </h4>
            <span className="text-blue-400 font-medium">{animatedLevels[index]}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${animatedLevels[index]}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillLevelIndicator; 
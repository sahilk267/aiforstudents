import React, { useState, useEffect } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface StatisticsProps {
  stats: StatItem[];
}

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  const [animatedStats, setAnimatedStats] = useState<StatItem[]>(stats.map(stat => ({ ...stat, value: 0 })));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const interval = setInterval(() => {
        currentStep++;
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = {
            ...newStats[index],
            value: Math.min(Math.round(increment * currentStep), stat.value)
          };
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    });
  }, [stats]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {animatedStats.map((stat, index) => (
        <div
          key={index}
          className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="text-4xl font-bold text-blue-400 mb-2">
            {stat.value.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics; 
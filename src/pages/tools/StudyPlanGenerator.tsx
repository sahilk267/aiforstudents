import React, { useState } from 'react';
import { analytics } from '@/utils/analytics';

interface StudyPlan {
  day: string;
  topics: string[];
  duration: string;
  tasks: string[];
}

const StudyPlanGenerator: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [duration, setDuration] = useState('7');
  const [hoursPerDay, setHoursPerDay] = useState('2');
  const [topics, setTopics] = useState('');
  const [studyPlan, setStudyPlan] = useState<StudyPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateStudyPlan = async () => {
    if (!subject.trim() || !topics.trim()) {
      alert('Please fill in subject and topics');
      return;
    }

    setIsLoading(true);

    // Simulate API call - in production, this would call an actual AI API
    setTimeout(() => {
      const topicList = topics.split(',').map(t => t.trim()).filter(t => t.length > 0);
      const days = parseInt(duration);
      const hours = parseInt(hoursPerDay);
      const topicsPerDay = Math.ceil(topicList.length / days);

      const generated: StudyPlan[] = [];
      let topicIndex = 0;

      for (let day = 1; day <= days; day++) {
        const dayTopics = topicList.slice(topicIndex, topicIndex + topicsPerDay);
        topicIndex += topicsPerDay;

        generated.push({
          day: `Day ${day}`,
          topics: dayTopics.length > 0 ? dayTopics : ['Review previous topics'],
          duration: `${hours} hours`,
          tasks: [
            `Study ${dayTopics[0] || 'review materials'}`,
            'Complete practice exercises',
            'Review notes and key concepts',
            day === days ? 'Final review and assessment' : 'Prepare for next day',
          ],
        });
      }

      setStudyPlan(generated);
      setIsLoading(false);
      // Track tool usage
      analytics.trackToolUsage('StudyPlanGenerator', 'generate_study_plan');
    }, 1500);
  };

  const exportStudyPlan = () => {
    try {
      const planText = studyPlan
        .map(
          (day) =>
            `${day.day} (${day.duration})\n` +
            `Topics: ${day.topics.join(', ')}\n` +
            `Tasks:\n${day.tasks.map((t) => `- ${t}`).join('\n')}\n\n`
        )
        .join('');

      const blob = new Blob([planText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${subject || 'study'}-study-plan.txt`;
      a.click();
      URL.revokeObjectURL(url);
      analytics.trackToolUsage('StudyPlanGenerator', 'export_study_plan');
    } catch (error) {
      console.error('Failed to export study plan:', error);
      alert('Failed to export. Please try again.');
    }
  };

  const clearAll = () => {
    setSubject('');
    setDuration('7');
    setHoursPerDay('2');
    setTopics('');
    setStudyPlan([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Study Plan Generator</h1>
          <p className="text-lg text-gray-600">
            Create a personalized study schedule tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Study Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject/Course Name
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Machine Learning, Mathematics"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Study Duration (days)
                  </label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    min="1"
                    max="90"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours per Day
                  </label>
                  <input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(e.target.value)}
                    min="1"
                    max="12"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topics to Cover (comma-separated)
                </label>
                <textarea
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                  placeholder="e.g., Introduction to AI, Neural Networks, Deep Learning, Natural Language Processing"
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate topics with commas
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={generateStudyPlan}
                  disabled={isLoading || !subject.trim() || !topics.trim()}
                  className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isLoading ? 'Generating Plan...' : 'Generate Study Plan'}
                </button>
                <button
                  onClick={clearAll}
                  className="px-4 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Study Plan Output */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Study Plan</h2>
              {studyPlan.length > 0 && (
                <button
                  onClick={exportStudyPlan}
                  className="text-sm bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium"
                >
                  Export
                </button>
              )}
            </div>

            {studyPlan.length === 0 ? (
              <div className="h-96 bg-gray-50 border-2 border-gray-200 rounded-md flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📅</div>
                  <p>Your personalized study plan will appear here</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {studyPlan.map((day, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-purple-900">{day.day}</h3>
                      <span className="text-sm text-purple-700 font-medium">{day.duration}</span>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {day.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Tasks:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {day.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">💡 Tips for Best Results:</h3>
          <ul className="list-disc list-inside space-y-1 text-purple-800">
            <li>Be specific with your topics for a more detailed plan</li>
            <li>Set realistic study hours based on your schedule</li>
            <li>Adjust the plan as needed - it's a starting point!</li>
            <li>Export and save your plan to track your progress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanGenerator;


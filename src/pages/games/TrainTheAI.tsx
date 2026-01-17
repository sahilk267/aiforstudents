import React, { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface TrainingData {
  input: string;
  output: string;
}

const TrainTheAI: React.FC = () => {
  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentOutput, setCurrentOutput] = useState('');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTraining, setIsTraining] = useState(false);
  const [predictions, setPredictions] = useState<string[]>([]);
  const [testInput, setTestInput] = useState('');

  const examples = [
    { input: 'Hello', output: 'Hi there!' },
    { input: 'How are you?', output: "I'm doing well, thank you!" },
    { input: 'What is AI?', output: 'AI is Artificial Intelligence' },
    { input: 'Good morning', output: 'Good morning! How can I help you?' },
  ];

  useEffect(() => {
    if (isTraining && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsTraining(false);
    }
  }, [timeLeft, isTraining]);

  const addTrainingExample = () => {
    if (currentInput.trim() && currentOutput.trim()) {
      setTrainingData([
        ...trainingData,
        { input: currentInput, output: currentOutput },
      ]);
      setCurrentInput('');
      setCurrentOutput('');
      setScore(score + 10);
    }
  };

  const startTraining = () => {
    if (trainingData.length >= 3) {
      setIsTraining(true);
      setTimeLeft(60);
      setRound(round + 1);
    } else {
      alert('Add at least 3 training examples to start!');
    }
  };

  const makePrediction = () => {
    if (!testInput.trim() || !isTraining) return;

    // Simple pattern matching based on training data
    const similarExample = trainingData.find(
      (ex) => ex.input.toLowerCase().includes(testInput.toLowerCase()) ||
      testInput.toLowerCase().includes(ex.input.toLowerCase())
    );

    if (similarExample) {
      const newScore = score + 20;
      setPredictions([...predictions, `Input: ${testInput} → Output: ${similarExample.output}`]);
      setScore(newScore);
      setTestInput('');
      // Track successful prediction
      analytics.trackEvent({
        action: 'game_prediction',
        category: 'games',
        label: 'TrainTheAI',
        value: newScore,
      });
    } else {
      setPredictions([...predictions, `Input: ${testInput} → Output: [No match found]`]);
      setTestInput('');
    }
  };

  const resetGame = () => {
    // Track game completion if there was progress
    if (score > 0 || trainingData.length > 0) {
      analytics.trackGameComplete('Train the AI', score, 60 - timeLeft);
    }
    setTrainingData([]);
    setScore(0);
    setRound(1);
    setTimeLeft(60);
    setIsTraining(false);
    setPredictions([]);
    setTestInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Train the AI</h1>
          <p className="text-lg text-gray-600">
            Teach an AI by providing examples and see how it learns!
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{score}</div>
            <div className="text-gray-600 mt-1">Score</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{round}</div>
            <div className="text-gray-600 mt-1">Round</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{timeLeft}s</div>
            <div className="text-gray-600 mt-1">Time Left</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Training Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Training Data ({trainingData.length} examples)
            </h2>

            {/* Add Training Example */}
            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Input Example
                </label>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  placeholder="e.g., Hello"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Output
                </label>
                <input
                  type="text"
                  value={currentOutput}
                  onChange={(e) => setCurrentOutput(e.target.value)}
                  placeholder="e.g., Hi there!"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={addTrainingExample}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Training Example
              </button>
            </div>

            {/* Training Examples List */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {trainingData.map((example, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-md border border-gray-200"
                >
                  <div className="text-sm">
                    <span className="font-medium">Input:</span> {example.input}
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-medium">Output:</span> {example.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Example Suggestions */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Quick Examples:</p>
              <div className="flex flex-wrap gap-2">
                {examples.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentInput(ex.input);
                      setCurrentOutput(ex.output);
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md"
                  >
                    {ex.input}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startTraining}
              disabled={trainingData.length < 3 || isTraining}
              className="w-full mt-4 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isTraining ? 'Training in Progress...' : 'Start Training AI'}
            </button>
          </div>

          {/* Testing Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Test the AI</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Test Input
              </label>
              <input
                type="text"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && makePrediction()}
                placeholder="Enter something to test..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                disabled={!isTraining}
              />
              <button
                onClick={makePrediction}
                disabled={!isTraining || !testInput.trim()}
                className="w-full mt-3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Make Prediction
              </button>
            </div>

            {/* Predictions */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Predictions:</h3>
              {predictions.length === 0 ? (
                <p className="text-gray-500 text-sm">No predictions yet. Start training first!</p>
              ) : (
                predictions.map((pred, idx) => (
                  <div
                    key={idx}
                    className="bg-green-50 border border-green-200 p-3 rounded-md text-sm"
                  >
                    {pred}
                  </div>
                ))
              )}
            </div>

            <button
              onClick={resetGame}
              className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Reset Game
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Play:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-800">
            <li>Add at least 3 training examples (input-output pairs)</li>
            <li>Click "Start Training AI" to begin the training phase</li>
            <li>Test the AI by entering new inputs and see its predictions</li>
            <li>Earn points for each correct prediction!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TrainTheAI;


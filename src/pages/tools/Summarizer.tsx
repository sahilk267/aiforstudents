import React, { useState } from 'react';
import { analytics } from '@/utils/analytics';

const Summarizer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryLength, setSummaryLength] = useState<'short' | 'medium' | 'long'>('medium');

  const generateSummary = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text to summarize');
      return;
    }

    setIsLoading(true);

    // Simulate API call - in production, this would call an actual AI API
    setTimeout(() => {
      const words = inputText.split(' ');
      const wordCount = words.length;
      
      let targetLength = wordCount * 0.3; // Default 30%
      if (summaryLength === 'short') targetLength = wordCount * 0.15;
      if (summaryLength === 'long') targetLength = wordCount * 0.5;

      // Simple extractive summarization (first sentences)
      const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const selectedSentences = Math.max(1, Math.floor(sentences.length * (targetLength / wordCount)));
      
      const generatedSummary = sentences
        .slice(0, selectedSentences)
        .map(s => s.trim())
        .join('. ') + '.';

      setSummary(generatedSummary);
      setIsLoading(false);
      
      // Track tool usage
      analytics.trackToolUsage('Summarizer', 'generate_summary');
    }, 1500);
  };

  const clearAll = () => {
    setInputText('');
    setSummary('');
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
      // Track copy action
      analytics.trackToolUsage('Summarizer', 'copy_summary');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      alert('Failed to copy. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Text Summarizer</h1>
          <p className="text-lg text-gray-600">
            Quickly summarize long texts, articles, or documents with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Input Text</h2>
              <span className="text-sm text-gray-500">
                {inputText.split(/\s+/).filter(w => w.length > 0).length} words
              </span>
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type the text you want to summarize here..."
              className="w-full h-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Summary Length
                </label>
                <div className="flex gap-2">
                  {(['short', 'medium', 'long'] as const).map((length) => (
                    <button
                      key={length}
                      onClick={() => setSummaryLength(length)}
                      className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                        summaryLength === length
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {length.charAt(0).toUpperCase() + length.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={generateSummary}
                  disabled={isLoading || !inputText.trim()}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isLoading ? 'Summarizing...' : 'Generate Summary'}
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

          {/* Output Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
              {summary && (
                <button
                  onClick={() => copyToClipboard(summary)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Copy
                </button>
              )}
            </div>

            <div className="h-96 bg-gray-50 border-2 border-gray-200 rounded-md p-4 overflow-y-auto">
              {summary ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{summary}</p>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p>Your summary will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {summary && inputText.trim() && (
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>
                  Summary: {summary.split(/\s+/).filter(w => w.length > 0).length} words
                </span>
                <span>
                  Reduction: {(() => {
                    const inputWords = inputText.split(/\s+/).filter(w => w.length > 0).length;
                    const summaryWords = summary.split(/\s+/).filter(w => w.length > 0).length;
                    return inputWords > 0 ? Math.round((1 - summaryWords / inputWords) * 100) : 0;
                  })()}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Tips for Best Results:</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Paste complete paragraphs or articles for better summarization</li>
            <li>Choose the appropriate summary length based on your needs</li>
            <li>Longer texts generally produce better summaries</li>
            <li>Use this tool to quickly understand key points from lengthy documents</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summarizer;


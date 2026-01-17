import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';

// Register languages
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);

interface Explanation {
  lineNumber: number;
  explanation: string;
}

const CodeAssistant: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [currentExplanation, setCurrentExplanation] = useState('');

  const supportedLanguages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' }
  ];

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleLineClick = (lineNumber: number) => {
    setSelectedLine(lineNumber);
    const existingExplanation = explanations.find(exp => exp.lineNumber === lineNumber);
    setCurrentExplanation(existingExplanation?.explanation || '');
  };

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentExplanation(e.target.value);
  };

  const handleSaveExplanation = () => {
    if (selectedLine === null || !currentExplanation.trim()) return;

    setExplanations(prev => {
      const filtered = prev.filter(exp => exp.lineNumber !== selectedLine);
      return [...filtered, { lineNumber: selectedLine, explanation: currentExplanation }];
    });
  };

  const handleGenerateExplanation = async () => {
    // TODO: Integrate with AI API to generate explanations
    console.log('Generating explanation for line:', selectedLine);
  };

  const handleShareWithStudent = () => {
    // TODO: Implement sharing functionality
    const lessonData = {
      code,
      language,
      explanations
    };
    console.log('Sharing lesson:', lessonData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Code Assistant</h2>
            <p className="mt-1 text-sm text-gray-500">
              Add explanations to your code to help students understand better
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left Column - Code Input */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {supportedLanguages.map(lang => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleShareWithStudent}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Share with Student
                </button>
              </div>

              <div className="relative">
                <textarea
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="Paste your code here..."
                  className="w-full h-96 font-mono text-sm p-4 bg-gray-800 text-white rounded-md"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <SyntaxHighlighter
                    language={language}
                    style={docco}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      background: 'transparent',
                    }}
                    lineProps={(lineNumber) => ({
                      style: { 
                        display: 'block',
                        cursor: 'pointer',
                        background: selectedLine === lineNumber ? 'rgba(62, 184, 255, 0.1)' : 'transparent'
                      },
                      onClick: () => handleLineClick(lineNumber)
                    })}
                    showLineNumbers
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            {/* Right Column - Explanations */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {selectedLine ? `Explanation for line ${selectedLine}` : 'Select a line to explain'}
                </h3>
                <textarea
                  value={currentExplanation}
                  onChange={handleExplanationChange}
                  placeholder="Add your explanation here..."
                  className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={selectedLine === null}
                />
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={handleSaveExplanation}
                    disabled={selectedLine === null}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
                  >
                    Save Explanation
                  </button>
                  <button
                    onClick={handleGenerateExplanation}
                    disabled={selectedLine === null}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100"
                  >
                    Generate AI Explanation
                  </button>
                </div>
              </div>

              {/* Explanations List */}
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">All Explanations</h3>
                <div className="space-y-4">
                  {explanations
                    .sort((a, b) => a.lineNumber - b.lineNumber)
                    .map((exp) => (
                      <div
                        key={exp.lineNumber}
                        className="bg-white p-4 rounded-md shadow-sm"
                      >
                        <div className="font-medium text-gray-900">Line {exp.lineNumber}</div>
                        <p className="mt-1 text-gray-600">{exp.explanation}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeAssistant; 
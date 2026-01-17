import React, { useState } from 'react';
import { analytics } from '@/utils/analytics';

interface Flashcard {
  id: number;
  front: string;
  back: string;
}

const FlashcardGenerator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentCard, setCurrentCard] = useState(0);

  const generateFlashcards = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text to generate flashcards from');
      return;
    }

    setIsLoading(true);

    // Simulate API call - in production, this would call an actual AI API
    setTimeout(() => {
      // Simple extraction of key concepts
      const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const generated: Flashcard[] = [];

      sentences.slice(0, 10).forEach((sentence, index) => {
        const words = sentence.trim().split(/\s+/);
        if (words.length > 5) {
          // Extract key term (first significant word) and definition
          const keyTerm = words.find(w => w.length > 4) || words[0];
          const definition = sentence.trim();
          
          generated.push({
            id: index + 1,
            front: keyTerm,
            back: definition,
          });
        }
      });

      // If not enough, create Q&A pairs
      if (generated.length < 5) {
        const questions = [
          { q: 'What is the main topic?', a: 'The main topic is: ' + inputText.substring(0, 100) },
          { q: 'Key concept 1?', a: 'First important point from the text' },
          { q: 'Key concept 2?', a: 'Second important point from the text' },
        ];
        questions.forEach((qa, idx) => {
          generated.push({
            id: generated.length + idx + 1,
            front: qa.q,
            back: qa.a,
          });
        });
      }

      setFlashcards(generated);
      setIsLoading(false);
      // Track tool usage
      analytics.trackToolUsage('FlashcardGenerator', 'generate_flashcards');
    }, 1500);
  };

  const flipCard = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  const exportFlashcards = () => {
    try {
      const data = flashcards.map(fc => `${fc.front} | ${fc.back}`).join('\n');
      const blob = new Blob([data], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'flashcards.txt';
      a.click();
      URL.revokeObjectURL(url);
      analytics.trackToolUsage('FlashcardGenerator', 'export_flashcards');
    } catch (error) {
      console.error('Failed to export flashcards:', error);
      alert('Failed to export. Please try again.');
    }
  };

  const clearAll = () => {
    setInputText('');
    setFlashcards([]);
    setFlippedCards(new Set());
    setCurrentCard(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Flashcard Generator</h1>
          <p className="text-lg text-gray-600">
            Automatically create flashcards from your study material
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Input Text</h2>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your study material, notes, or text here. The AI will automatically extract key concepts and create flashcards..."
              className="w-full h-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
            />

            <div className="mt-4 flex gap-2">
              <button
                onClick={generateFlashcards}
                disabled={isLoading || !inputText.trim()}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Generating Flashcards...' : 'Generate Flashcards'}
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Flashcards Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Flashcards ({flashcards.length})
              </h2>
              {flashcards.length > 0 && (
                <button
                  onClick={exportFlashcards}
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 font-medium"
                >
                  Export
                </button>
              )}
            </div>

            {flashcards.length === 0 ? (
              <div className="h-96 bg-gray-50 border-2 border-gray-200 rounded-md flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📚</div>
                  <p>Generated flashcards will appear here</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Card Viewer */}
                <div className="h-64 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg border-2 border-green-300 p-6 flex items-center justify-center relative">
                  {flashcards[currentCard] && (
                    <div
                      className="w-full h-full flex items-center justify-center cursor-pointer transform transition-transform"
                      onClick={() => flipCard(flashcards[currentCard].id)}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800 mb-2">
                          {flippedCards.has(flashcards[currentCard].id)
                            ? flashcards[currentCard].back
                            : flashcards[currentCard].front}
                        </div>
                        <div className="text-sm text-gray-600 mt-4">
                          {flippedCards.has(flashcards[currentCard].id) ? 'Back' : 'Front'} - Click to flip
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}
                    disabled={currentCard === 0}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentCard + 1} / {flashcards.length}
                  </span>
                  <button
                    onClick={() => setCurrentCard(Math.min(flashcards.length - 1, currentCard + 1))}
                    disabled={currentCard === flashcards.length - 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>

                {/* All Cards List */}
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {flashcards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setCurrentCard(card.id - 1);
                        flipCard(card.id);
                      }}
                    >
                      <div className="font-medium text-gray-900">{card.front}</div>
                      {flippedCards.has(card.id) && (
                        <div className="text-gray-600 mt-1">{card.back}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">💡 Tips for Best Results:</h3>
          <ul className="list-disc list-inside space-y-1 text-green-800">
            <li>Include key terms and definitions in your input text</li>
            <li>Use clear, structured content for better flashcard generation</li>
            <li>Review and edit generated flashcards to ensure accuracy</li>
            <li>Export flashcards to study them later or share with others</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlashcardGenerator;


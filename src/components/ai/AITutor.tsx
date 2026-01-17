import React, { useState, useRef, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI tutor. I can help you understand AI concepts, answer questions, and guide your learning. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Simple rule-based responses - in production, this would call an AI API
    if (lowerMessage.includes('what is ai') || lowerMessage.includes('artificial intelligence')) {
      return "Artificial Intelligence (AI) is the simulation of human intelligence in machines. AI systems can learn, reason, and make decisions. There are two main types: Narrow AI (designed for specific tasks) and General AI (hypothetical AI with human-like intelligence).";
    }

    if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. There are three main types: Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through rewards and penalties).";
    }

    if (lowerMessage.includes('neural network') || lowerMessage.includes('deep learning')) {
      return "Neural Networks are computing systems inspired by biological neural networks. They consist of layers of interconnected nodes (neurons) that process information. Deep Learning uses neural networks with multiple hidden layers to learn complex patterns from data.";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you learn about AI. Feel free to ask me any questions about artificial intelligence, machine learning, or related topics!";
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return "I can help you with:\n- Explaining AI concepts\n- Answering questions about machine learning\n- Providing study tips\n- Clarifying technical terms\n\nWhat specific topic would you like to explore?";
    }

    if (lowerMessage.includes('difference') || lowerMessage.includes('vs') || lowerMessage.includes('versus')) {
      return "Great question! Here are some key differences:\n\n• AI vs Machine Learning: AI is the broader concept of machines performing intelligent tasks, while ML is a method to achieve AI through learning from data.\n\n• Supervised vs Unsupervised Learning: Supervised learning uses labeled data, while unsupervised learning finds patterns in unlabeled data.\n\nWhat specific comparison would you like me to explain further?";
    }

    // Default response
    return `I understand you're asking about "${userMessage}". That's an interesting question! While I'm a simplified AI tutor, I'd recommend:\n\n1. Reviewing the relevant lesson in the "Learn AI" section\n2. Trying the interactive games to reinforce concepts\n3. Using the AI tools like the Summarizer or Flashcard Generator\n\nIs there a specific AI concept you'd like me to explain in more detail?`;
  };

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
      // Track AI tutor usage
      analytics.trackToolUsage('AITutor', 'ask_question');
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'What is AI?',
    'Explain Machine Learning',
    'What are Neural Networks?',
    'AI vs Human Intelligence',
  ];

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <div>
            <h3 className="font-semibold text-lg">AI Tutor</h3>
            <p className="text-sm text-blue-100">Ask me anything about AI!</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(question);
                  setTimeout(() => handleSend(), 100);
                }}
                className="text-xs bg-white hover:bg-gray-50 border border-gray-300 px-3 py-1 rounded-full"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about AI..."
            aria-label="Message input"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={2}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isLoading}
            aria-label="Send message"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;


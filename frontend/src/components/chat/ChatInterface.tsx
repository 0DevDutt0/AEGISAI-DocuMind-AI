'use client';

import { useState } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'ai'}[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user' as const
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: 'This is a simulated response. In a real implementation, this would connect to the RAG system.',
        sender: 'ai' as const
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Chat with Documents</h2>

      <div className="border rounded-lg h-96 overflow-y-auto p-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-indigo-100 text-gray-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 border rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
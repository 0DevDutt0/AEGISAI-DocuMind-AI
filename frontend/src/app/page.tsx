'use client';

import { useState } from 'react';
import DocumentUpload from '@/components/documents/DocumentUpload';
import ChatInterface from '@/components/chat/ChatInterface';
import GraphView from '@/components/graph/GraphView';
import Dashboard from '@/components/dashboards/Dashboard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AegisAI Platform</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upload'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upload Document
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'chat'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'graph'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Graph View
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'upload' && <DocumentUpload />}
          {activeTab === 'chat' && <ChatInterface />}
          {activeTab === 'graph' && <GraphView />}
        </div>
      </main>
    </div>
  );
}
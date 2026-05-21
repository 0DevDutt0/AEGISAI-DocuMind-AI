import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>AegisAI Platform</title>
        <meta name="description" content="AI-powered document analysis and knowledge management platform" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AegisAI Platform</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced document analysis and knowledge management powered by AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Document Analysis</h2>
            <p className="text-gray-600">
              Upload and analyze documents with AI-powered insights and knowledge extraction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Knowledge Graph</h2>
            <p className="text-gray-600">
              Visualize relationships between entities in your documents through interactive graphs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Natural Language Query</h2>
            <p className="text-gray-600">
              Ask questions about your documents and get intelligent answers using RAG techniques.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsLoaded(!isLoaded)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            {isLoaded ? 'Loaded!' : 'Get Started'}
          </button>
        </div>
      </main>
    </div>
  );
}
#!/bin/bash

# Initialize AegisAI frontend project

echo "Initializing AegisAI frontend project..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories if they don't exist
mkdir -p src/components src/app src/lib public

# Create basic directory structure
echo "Creating directory structure..."

# Create a simple index file for the main app
cat > src/app/page.tsx << 'EOF'
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">AegisAI Knowledge Management</h1>
          <p className="text-gray-500">Welcome to your intelligent knowledge management system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Graph</CardTitle>
              <CardDescription>Visualize relationships between your documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore interconnected knowledge with our visual knowledge graph. See how documents relate to each other and discover new insights.</p>
              <div className="mt-4">
                <Link href="/dashboard?tab=knowledge">
                  <Button>View Graph</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Management</CardTitle>
              <CardDescription>Upload, organize, and search your documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Upload documents in various formats and organize them in a structured way for easy retrieval.</p>
              <div className="mt-4">
                <Link href="/dashboard?tab=documents">
                  <Button>Manage Documents</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>Ask questions and get intelligent answers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Chat with our AI assistant to get answers based on your knowledge base.</p>
              <div className="mt-4">
                <Link href="/dashboard?tab=chat">
                  <Button>Start Chat</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold">Documents</h3>
                <p className="text-2xl">1,248</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold">Active Users</h3>
                <p className="text-2xl">243</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold">Chat Sessions</h3>
                <p className="text-2xl">1,892</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold">Avg. Response Time</h3>
                <p className="text-2xl">2.4s</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
EOF

echo "AegisAI frontend project initialized successfully!"
echo "To start the development server, run:"
echo "  npm run dev"
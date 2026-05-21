# AegisAI Frontend

This is the frontend application for AegisAI, a knowledge management system with AI capabilities.

## Features

- Knowledge graph visualization
- Document management
- AI-powered chat interface
- System observability dashboard
- Analytics and monitoring

## Structure

- `src/components/` - Reusable React components
- `src/app/` - Next.js pages and routes
- `src/lib/` - Utility functions and libraries

## Components

1. **Layout** (`layout.tsx`) - Main application layout with navigation
2. **Knowledge Graph** (`knowledge-graph.tsx`) - Visual representation of knowledge relationships
3. **Analytics Dashboard** (`analytics-dashboard.tsx`) - System metrics and analytics
4. **Observability** (`observability.tsx`) - System monitoring and logging
5. **Chat Interface** (`chat-interface.tsx`) - AI chat with document context
6. **Document Manager** (`document-manager.tsx`) - Document upload and management

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Dependencies

- Next.js 14.0.0
- React 18.2.0
- Tailwind CSS
- Lucide React icons
- Recharts for data visualization
# AegisAI Frontend Structure

This document outlines the structure and components of the AegisAI frontend application.

## Project Overview

The AegisAI frontend is built with Next.js 14.0.0 and uses:
- React 18.2.0
- Tailwind CSS for styling
- Lucide React for icons
- Recharts for data visualization

## Directory Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js pages and routes
│   │   ├── dashboard/       # Dashboard page with all components
│   │   ├── page.tsx         # Main landing page
│   │   └── layout.tsx       # Main application layout
│   ├── components/          # Reusable React components
│   │   ├── layout.tsx       # Main application layout
│   │   ├── knowledge-graph.tsx
│   │   ├── analytics-dashboard.tsx
│   │   ├── observability.tsx
│   │   ├── chat-interface.tsx
│   │   ├── document-manager.tsx
│   │   └── ui/              # UI primitives (button, card, etc.)
│   └── lib/                 # Utility functions and libraries
├── public/                  # Static assets
├── styles/                  # Global styles
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── next.config.js           # Next.js configuration
```

## Key Components

### 1. Layout Component (`layout.tsx`)
- Main application layout with sidebar navigation
- Responsive design for mobile and desktop
- Header with refresh/export functionality

### 2. Dashboard Page (`dashboard/page.tsx`)
- Tabbed interface for different sections
- Overview statistics cards
- Recent activity feed
- Quick access to all features

### 3. Knowledge Graph Component (`knowledge-graph.tsx`)
- Visual representation of document relationships
- Interactive graph visualization
- Node and edge highlighting

### 4. Analytics Dashboard Component (`analytics-dashboard.tsx`)
- System metrics and performance data
- Charts and graphs using Recharts
- Real-time monitoring capabilities

### 5. Observability Component (`observability.tsx`)
- System logging and monitoring
- Error tracking and alerting
- Performance metrics

### 6. Chat Interface Component (`chat-interface.tsx`)
- AI-powered chat with document context
- Message history with timestamps
- Document attachment support
- Loading states and animations

### 7. Document Manager Component (`document-manager.tsx`)
- Document upload functionality
- File type validation
- Document organization and search

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run development server:
   ```
   npm run dev
   ```

3. Visit http://localhost:3000

## Development Guidelines

- All components should be client-side (use 'use client' directive)
- Follow Tailwind CSS utility class naming conventions
- Use Lucide React icons for consistent iconography
- Implement responsive design for all screen sizes
- Ensure proper TypeScript typing for all components
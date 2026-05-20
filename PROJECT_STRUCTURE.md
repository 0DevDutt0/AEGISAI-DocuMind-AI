# AegisAI Platform Project Structure

## Overview
A comprehensive AI-powered platform for document processing, knowledge management, and observability with both backend and frontend components.

## Project Structure

```
AegisAI/
├── backend/                # FastAPI backend application
│   ├── app/                # Main application code
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── dependencies.py
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py
│   │   │   │   ├── documents.py
│   │   │   │   ├── extraction.py
│   │   │   │   ├── rag.py
│   │   │   │   ├── graph.py
│   │   │   │   ├── agents.py
│   │   │   │   ├── analytics.py
│   │   │   │   └── admin.py
│   │   │   └── websocket/
│   │   │       └── agent_chat.py
│   │   ├── services/
│   │   │   ├── ocr_service.py
│   │   │   ├── vision_service.py
│   │   │   ├── ner_service.py
│   │   │   ├── rag_service.py
│   │   │   ├── planning_service.py
│   │   │   ├── memory_service.py
│   │   │   ├── graph_service.py
│   │   │   ├── security_service.py
│   │   │   ├── analytics_service.py
│   │   │   └── pipeline_service.py
│   │   ├── agents/
│   │   │   ├── base.py
│   │   │   ├── ocr_agent.py
│   │   │   ├── vision_agent.py
│   │   │   ├── ner_agent.py
│   │   │   ├── rag_agent.py
│   │   │   ├── planning_agent.py
│   │   │   ├── validation_agent.py
│   │   │   ├── memory_agent.py
│   │   │   ├── analytics_agent.py
│   │   │   └── security_agent.py
│   │   ├── orchestration/
│   │   │   ├── langgraph_workflows.py
│   │   │   └── crewai_teams.py
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── document.py
│   │   │   ├── entity.py
│   │   │   ├── memory.py
│   │   │   └── graph_schema.py
│   │   ├── db/
│   │   │   ├── session.py
│   │   │   ├── neo4j.py
│   │   │   ├── chroma.py
│   │   │   └── redis.py
│   │   ├── core/
│   │   │   ├── security.py
│   │   │   ├── observability.py
│   │   │   └── celery_app.py
│   │   └── utils/
│   │       ├── chunking.py
│   │       ├── embeddings.py
│   │       └── file_utils.py
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── fixtures/
│   ├── alembic/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── pyproject.toml
├── frontend/               # React frontend application
│   ├── src/                # Source code
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   └── badge.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── document-manager.tsx
│   │   │   ├── knowledge-graph.tsx
│   │   │   ├── analytics-dashboard.tsx
│   │   │   ├── observability.tsx
│   │   │   └── chat-interface.tsx
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── hooks/
│   │   ├── stores/
│   │   └── styles/
│   │       └── globals.css
│   ├── public/
│   ├── Dockerfile
│   ├── tailwind.config.ts
│   └── next.config.js
├── infrastructure/
│   ├── docker-compose.yml
│   ├── docker-compose.gpu.yml
│   ├── nginx/
│   │   └── nginx.conf
│   ├── prometheus/
│   │   └── prometheus.yml
│   ├── grafana/
│   │   └── dashboards/
│   ├── opentelemetry/
│   │   └── collector-config.yml
│   └── scripts/
│       ├── setup.sh
│       ├── init_db.sh
│       └── download_models.sh
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── datasets/
│   ├── sample_invoice.pdf
│   ├── sample_contract.docx
│   └── sample_medical_report.png
├── README.md
└── .env.example
```

## Key Features

### Backend Components
1. **Authentication & Authorization**
   - User registration and login
   - JWT-based authentication
   - Role-based access control

2. **Document Management**
   - Upload and store documents
   - Document metadata handling
   - Status tracking

3. **Retrieval-Augmented Generation (RAG)**
   - Query processing
   - Context retrieval
   - Response generation

4. **Knowledge Graph**
   - Entity search
   - Graph neighborhood exploration
   - Relationship mapping

5. **Analytics & Monitoring**
   - Usage statistics
   - Token consumption tracking
   - System health monitoring

6. **Observability**
   - Tracing and monitoring
   - Performance insights

### Frontend Components
1. **Main Application Layout**
   - Responsive sidebar navigation
   - Header with refresh/export functionality

2. **Dashboard Interface**
   - Tabbed navigation between different sections
   - Overview statistics cards
   - Recent activity feed

3. **Knowledge Graph Visualization**
   - Interactive graph representation of document relationships
   - Node and edge highlighting

4. **Analytics Dashboard**
   - System metrics and performance data
   - Charts and graphs using Recharts

5. **Observability System**
   - System logging and monitoring
   - Error tracking and alerting
   - Performance metrics

6. **AI Chat Interface**
   - Interactive chat with document context
   - Message history with timestamps
   - Document attachment support

7. **Document Management**
   - Document upload functionality
   - File type validation
   - Document organization and search

## Technologies Used

### Backend
- **Framework**: FastAPI, Python 3.11
- **Database**: PostgreSQL, Redis, Neo4j, ChromaDB
- **LLM**: Ollama
- **Containerization**: Docker, Docker Compose
- **Testing**: Pytest

### Frontend
- **Framework**: Next.js 14.0.0, React 18.2.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **TypeScript**: Full type safety

## Getting Started

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   make install
   ```

3. Run the development server:
   ```bash
   make run
   ```

4. Run tests:
   ```bash
   make test
   ```

5. Access the API at `http://localhost:8000`

6. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

7. Install frontend dependencies:
   ```bash
   npm install
   ```

8. Run the frontend development server:
   ```bash
   npm run dev
   ```

9. Access the frontend at `http://localhost:3000`
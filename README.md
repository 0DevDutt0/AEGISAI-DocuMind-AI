# AEGISAI-DocuMind-AI - Document Intelligence Platform

<!-- Build & quality -->
[![CI](https://github.com/0DevDutt0/AEGISAI-DocuMind-AI/actions/workflows/ci.yml/badge.svg)](https://github.com/0DevDutt0/AEGISAI-DocuMind-AI/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/0DevDutt0/AEGISAI-DocuMind-AI/branch/main/graph/badge.svg)](https://codecov.io/gh/0DevDutt0/AEGISAI-DocuMind-AI)
![Tests](https://img.shields.io/badge/tests-pytest-0A9EDC?logo=pytest&logoColor=white)
![Ruff](https://img.shields.io/badge/lint-ruff-261230?logo=ruff&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

<!-- Stack -->
![Python](https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![Neo4j](https://img.shields.io/badge/Neo4j-5.10-4581C3?logo=neo4j&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Modular-blue)

An advanced AI-powered platform for document analysis, knowledge graph construction, and natural language understanding with multi-modal processing capabilities.

## Project Description

AegisAI is a comprehensive AI-powered platform designed to transform document processing and knowledge management. By combining cutting-edge AI technologies with robust infrastructure, it enables organizations to extract insights from documents, construct intelligent knowledge graphs, and engage in natural language interactions with their data. The platform supports multi-modal processing including text, image, and document analysis, making it suitable for enterprise knowledge management, legal document analysis, and research applications.

## Features

### Core Capabilities
- **Multi-modal Document Processing**: Support for PDF, DOC, TXT, and image documents
- **Knowledge Graph Construction**: Automatic entity extraction and relationship mapping
- **Natural Language Querying**: Intuitive chat interface with document context
- **Retrieval-Augmented Generation (RAG)**: Context-aware response generation
- **Multi-agent AI Workflows**: Complex document analysis using CrewAI and LangGraph
- **Security & Access Control**: JWT-based authentication with role-based access
- **Observability & Monitoring**: Comprehensive system monitoring with OpenTelemetry

### Technical Features
- **Document Management**: Upload, store, and retrieve documents with metadata
- **AI Service Integration**: Seamless integration with OpenAI, Ollama, and local LLMs
- **Database Infrastructure**: PostgreSQL, Neo4j, Redis, and ChromaDB integration
- **Caching & Performance**: Redis caching for improved response times
- **Scalable Architecture**: Containerized deployment with Docker Compose
- **API-First Design**: RESTful API with comprehensive documentation

## Tech Stack

### Backend
- **Framework**: FastAPI 0.104.1 (Python 3.11)
- **Database**: PostgreSQL 15, Neo4j 5.10, Redis 7, ChromaDB
- **AI/ML**: OpenAI API, Ollama, LangChain, LangGraph, CrewAI
- **Security**: JWT, bcrypt, Role-based Access Control
- **Monitoring**: OpenTelemetry, Prometheus, Grafana
- **Infrastructure**: Docker, Docker Compose, Celery

### Frontend
- **Framework**: Next.js 14.0.0, React 18.2.0
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS, CSS Modules
- **Data Visualization**: Recharts, D3.js
- **UI Components**: Tailwind UI, Lucide React Icons

### DevOps & Infrastructure
- **Containerization**: Docker, Docker Compose
- **Testing**: Pytest, pytest-asyncio, Jest
- **Documentation**: MkDocs, Swagger/OpenAPI
- **Monitoring**: Prometheus, Grafana, OpenTelemetry
- **CI/CD**: GitHub Actions

## Current Implementation Status

### Completed
- FastAPI backend setup
- Multi-agent architecture
- RAG pipeline
- Document ingestion
- OCR pipeline
- Vector database integration

### Planned for v1.1
- Knowledge graph visualization UI
- Observability dashboard
- Agent memory persistence layer

### Planned
- Federated learning
- Multi-tenant support
- Voice interaction

## Roadmap

### Q2 2026 - Foundation
- Complete core document processing pipeline
- Implement basic RAG system
- Deploy initial multi-agent workflows
- Establish observability framework

### Q3 2026 - Enhancement
- Advanced knowledge graph visualization
- Enhanced agent memory and state management
- Performance optimization and caching improvements
- Mobile UI components

### Q4 2026 - Advanced Features
- Federated learning capabilities
- Multi-tenant architecture support
- Voice interaction and speech-to-text
- Plugin system for third-party integrations

### 2027 - Enterprise Features
- Advanced analytics and business intelligence
- Predictive modeling capabilities
- Enhanced security and compliance features
- API marketplace for third-party integrations

## Project Architecture

### System Overview

```mermaid
flowchart TB
    subgraph Client["Frontend - Next.js 14"]
        UI["Dashboard · Chat · Graph Viz"]
    end

    subgraph API["Backend - FastAPI"]
        GW["API Gateway<br/>Auth (JWT/RBAC) · Rate Limit"]
        WS["WebSocket<br/>Agent Chat"]
    end

    subgraph Orchestration["Multi-Agent Orchestration"]
        CW["CrewAI<br/>role-based agent teams"]
        LG["LangGraph<br/>stateful workflow graph"]
        AG["Agents<br/>OCR · Vision · NER · RAG · Planning · Memory"]
        CW --> AG
        LG --> AG
    end

    subgraph RAG["Hybrid RAG Pipeline"]
        CHUNK["Chunking + Embeddings"]
        VEC["ChromaDB<br/>vector / semantic search"]
        KG["Neo4j<br/>knowledge graph"]
        FUSE["Result Fusion<br/>vector + graph context"]
        CHUNK --> VEC
        CHUNK --> KG
        VEC --> FUSE
        KG --> FUSE
    end

    subgraph LLM["Inference"]
        OAI["OpenAI GPT-4"]
        OLL["Ollama<br/>local LLMs"]
    end

    subgraph Data["Data & Infra"]
        PG[("PostgreSQL<br/>metadata")]
        RD[("Redis<br/>cache + Celery")]
        OTEL["OpenTelemetry<br/>Prometheus · Grafana"]
    end

    UI --> GW
    UI <--> WS
    GW --> Orchestration
    WS --> Orchestration
    AG --> RAG
    FUSE --> LLM
    AG --> PG
    GW --> RD
    API --> OTEL
    LLM --> GW
```

### Layered View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            AegisAI Platform                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                           Frontend (Next.js)                                │
│         ┌───────────────┐    ┌───────────────┐    ┌─────────────────┐       │
│         │   Dashboard   │    │   Chat UI     │    │ Knowledge Graph │       │
│         │   Interface   │    │   Interface   │    │   Visualization │       │
│         └───────────────┘    └───────────────┘    └─────────────────┘       │
│                    │                    │                    │           │
│                    └────────────────────┼────────────────────┘           │
│                                         │                                    │
├─────────────────────────────────────────┼───────────────────────────────────┤
│                           Backend (FastAPI)                                 │
│    ┌─────────────────────────────────────────────────────────────────────┐   │
│    │                         API Layer                                   │   │
│    │  - Authentication                                                   │   │
│    │  - Document Management                                              │   │
│    │  - Chat & RAG                                                       │   │
│    │  - Graph Operations                                                 │   │
│    └─────────────────────────────────────────────────────────────────────┘   │
│    ┌─────────────────────────────────────────────────────────────────────┐   │
│    │                         Services Layer                              │   │
│    │  - Document Processing                                              │   │
│    │  - AI Agent Orchestration                                           │   │
│    │  - Knowledge Graph Management                                       │   │
│    │  - Analytics & Monitoring                                           │   │
│    └─────────────────────────────────────────────────────────────────────┘   │
│    ┌─────────────────────────────────────────────────────────────────────┐   │
│    │                         Data Layer                                  │   │
│    │  - PostgreSQL ORM                                                   │   │
│    │  - Neo4j Graph Database                                             │   │
│    │  - Redis Caching                                                    │   │
│    │  - ChromaDB Vector Store                                            │   │
│    └─────────────────────────────────────────────────────────────────────┘   │
│    ┌─────────────────────────────────────────────────────────────────────┐   │
│    │                         AI Services                                 │   │
│    │  - OpenAI API Integration                                           │   │
│    │  - Ollama Local LLM                                                 │   │
│    │  - LangChain Workflows                                              │   │
│    │  - CrewAI Multi-agent Framework                                    │   │
│    └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions & Engineering Trade-offs

These are the decisions a reviewer is most likely to ask about — and why each was made.

### CrewAI **and** LangGraph together (not either/or)
The two solve different problems, so the system uses both at different layers:
- **CrewAI** models *who does the work* — role-based agent teams (OCR, Vision, NER, RAG, Planning) with delegation and shared goals. It's the right abstraction for "assemble a crew to analyze this document."
- **LangGraph** models *how control flows* — an explicit, stateful graph with conditional branches, retries, and checkpointing. It's the right abstraction for deterministic, resumable pipelines where a step can fail and must be re-entered.
- **Trade-off:** running both adds orchestration surface area, but a pure-CrewAI approach lacked the deterministic state machine needed for long-running document jobs, and pure-LangGraph pushed too much role/coordination logic into hand-written graph nodes.

### Neo4j over a relational store for the knowledge graph
Entity-relationship queries ("find documents two hops from this entity") are recursive joins that degrade badly in PostgreSQL as depth grows. Neo4j executes multi-hop traversals in near-constant time per hop via index-free adjacency, and Cypher expresses relationship patterns directly.
- **Trade-off:** a second datastore to operate. Mitigated by keeping PostgreSQL as the system of record for documents/users/metadata and Neo4j strictly for the graph — each store does what it's best at.

### Ollama for local inference alongside OpenAI
- **Privacy & cost:** enterprise/legal/medical documents often can't leave the network; Ollama keeps inference on-prem and removes per-token cost for high-volume extraction.
- **Resilience:** OpenAI is used where quality matters most (final RAG generation), while local models handle bulk classification/extraction — a graceful-degradation path if the external API is unavailable.
- **Trade-off:** local models are weaker and require GPU/RAM. The platform routes per-task rather than committing to one provider.

## Dataset Information

### Supported Document Types
- **Text Documents**: TXT, DOC, DOCX
- **Image Documents**: PNG, JPG, JPEG, BMP
- **PDF Documents**: Standard PDF formats
- **Presentation**: PPT, PPTX

### Processing Capabilities
- **Text Extraction**: OCR and text parsing
- **Image Analysis**: Computer vision for document images
- **Metadata Extraction**: Automatic document metadata tagging
- **Entity Recognition**: Named entity extraction and classification
- **Relationship Mapping**: Semantic relationship identification

## Model Architecture

### AI Service Integration
- **Language Models**: OpenAI GPT-4, Ollama local LLMs
- **Multi-agent Framework**: CrewAI for coordinated AI workflows
- **Graph Processing**: LangGraph for workflow orchestration
- **Retrieval Systems**: ChromaDB vector database with semantic search
- **Natural Language Processing**: Transformer-based models for text understanding

### Workflow Architecture
1. **Document Ingestion**: Upload and initial processing
2. **Multi-modal Analysis**: Text and image processing
3. **Entity Extraction**: Named entity recognition and classification
4. **Knowledge Graph Construction**: Relationship mapping and graph building
5. **Contextual Understanding**: RAG for enhanced responses
6. **Response Generation**: Natural language generation with context

## Installation

### Prerequisites
- Docker and Docker Compose
- Python 3.11
- Node.js 18+ (for frontend development)

### Quick Setup

1. Clone the repository:
```bash
git clone https://github.com/0DevDutt0/AEGISAI-DocuMind-AI.git
cd AEGISAI-DocuMind-AI
```

2. Build and start the services:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Database: http://localhost:5432
- Neo4j: http://localhost:7474 (user: neo4j, password: password)

### Development Setup

#### Backend Development
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

## Usage

### API Endpoints

#### Authentication
- `POST /api/v1/users/` - Create user
- `POST /api/v1/token` - Get access token

#### Documents
- `POST /api/v1/documents/` - Upload document
- `GET /api/v1/documents/` - List documents
- `GET /api/v1/documents/{id}` - Get document
- `DELETE /api/v1/documents/{id}` - Delete document

#### Chat
- `POST /api/v1/chat/query` - Query chat with document context
- `POST /api/v1/chat/conversation` - Start new conversation
- `GET /api/v1/chat/conversations` - List conversations

#### Graph
- `GET /api/v1/graph/entities` - Get entities
- `GET /api/v1/graph/relationships` - Get relationships
- `GET /api/v1/graph/search` - Search graph with query

### Example Usage

#### Upload a Document
```bash
curl -X POST "http://localhost:8000/api/v1/documents/" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/document.pdf"
```

#### Query with Context
```bash
curl -X POST "http://localhost:8000/api/v1/chat/query" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What are the key points in this document?",
    "document_id": "12345"
  }'
```

## Results & Performance Metrics

> **Note:** The figures below are **design targets / SLOs**, not yet independently benchmarked on a fixed hardware profile. A reproducible benchmark harness (`scripts/benchmark.py` + a pinned dataset) is on the v1.1 list so these can be replaced with measured p50/p95 numbers and retrieval scores. See [Reproducing benchmarks](#reproducing-benchmarks).

### System Performance (target SLOs)
| Metric | Target |
|--------|-----|
| API Response Time (p95) | < 200 ms |
| Document Processing throughput | 100+ documents/minute |
| Concurrent Users | 100+ |
| Graph Query Time (p95) | < 500 ms |
| Memory Usage (steady state) | < 2 GB |

### AI Processing Capabilities (target quality)
| Task | Target Accuracy | Target Latency |
|------|----------|-----------------|
| Entity Extraction | ≥ 95% | < 2 s |
| Relationship Mapping | ≥ 92% | < 3 s |
| Document Classification | ≥ 94% | < 1 s |
| RAG Retrieval (MRR@10 / NDCG@10) | _measure & fill in_ | — |
| RAG Response Generation | — | < 3 s |

### Reproducing benchmarks
Once the harness lands, results will be generated with:
```bash
cd backend
python scripts/benchmark.py --dataset ../datasets --report ../docs/benchmarks.md
```
Until then, treat the tables above as the engineering targets the system is built against.

## Demo

<!--
TODO (author): record and drop assets into docs/assets/, then uncomment.
  Streamlit/dashboard screenshots:  put PNGs in docs/assets/ and reference below.
  30s terminal demo:                asciinema rec docs/assets/demo.cast
                                    (or capture a GIF with: terminalizer / vhs)
-->

<!--
![Dashboard](docs/assets/dashboard.png)
![Chat with document context](docs/assets/chat.png)
![Knowledge graph view](docs/assets/graph.png)
[![asciicast](https://asciinema.org/a/REPLACE_ID.svg)](https://asciinema.org/a/REPLACE_ID)
-->

> 🎬 Demo GIF and dashboard screenshots are being recorded — assets will live in `docs/assets/`.

## System Status

| Module | Status | Working Description |
|-------|--------|-------------------|
| Backend Infrastructure | ✅ Completed | FastAPI-based backend with RESTful endpoints, authentication, and middleware |
| Multi-Agent Framework | ✅ Completed | Distributed agent system with coordination and communication protocols |
| RAG Pipeline | ✅ Completed | Retrieval-Augmented Generation pipeline with document processing and context retrieval |
| OCR Processing | ✅ Completed | Optical Character Recognition for document text extraction and processing |
| Vector Database Integration | ✅ Completed | Integration with vector databases for semantic search and similarity matching |
| Knowledge Graph UI | 🗓️ v1.1 planned | Interactive visualization of document relationships and entity connections |
| Agent Memory System | 🗓️ v1.1 planned | Persistent memory storage and retrieval for agent conversations and context |
| Federated Learning | 🔮 Planned | Distributed machine learning approach for model training across agents |

> The graph backend (Neo4j entity/relationship extraction) and the agent orchestration layer are complete and tested; the items marked **v1.1 planned** are UI/persistence layers scheduled on top of the existing backend APIs.

## Project Structure

```
aegisai-platform/
├── backend/                # FastAPI backend application
│   ├── app/                # Main application code
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── dependencies.py
│   │   ├── api/            # API routes and endpoints
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
│   │   ├── services/       # Business logic services
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
│   │   ├── agents/         # AI agents
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
│   │   ├── orchestration/  # Workflow orchestration
│   │   │   ├── langgraph_workflows.py
│   │   │   └── crewai_teams.py
│   │   ├── models/         # Data models
│   │   │   ├── user.py
│   │   │   ├── document.py
│   │   │   ├── entity.py
│   │   │   ├── memory.py
│   │   │   └── graph_schema.py
│   │   ├── db/             # Database integration
│   │   │   ├── session.py
│   │   │   ├── neo4j.py
│   │   │   ├── chroma.py
│   │   │   └── redis.py
│   │   ├── core/           # Core configuration
│   │   │   ├── security.py
│   │   │   ├── observability.py
│   │   │   └── celery_app.py
│   │   └── utils/          # Utility functions
│   │       ├── chunking.py
│   │       ├── embeddings.py
│   │       └── file_utils.py
│   ├── tests/              # Test files
│   ├── alembic/            # Database migrations
│   ├── Dockerfile
│   ├── requirements.txt
│   └── pyproject.toml
├── frontend/               # React/Next.js frontend
│   ├── src/                # Source code
│   │   ├── app/            # Next.js app directory
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── components/     # React components
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
│   │   ├── lib/            # API and auth libraries
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── stores/         # State management
│   │   └── styles/         # CSS styles
│   │       └── globals.css
│   ├── public/             # Static assets
│   ├── Dockerfile
│   ├── tailwind.config.ts
│   └── next.config.js
├── infrastructure/         # Infrastructure configuration
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
├── datasets/               # Sample datasets
│   ├── sample_invoice.pdf
│   ├── sample_contract.docx
│   └── sample_medical_report.png
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── README.md
└── .env.example
```

## Challenges & Learnings

### Technical Challenges Faced
- **Multi-modal Processing Integration**: Combining text, image, and document analysis
- **Knowledge Graph Construction**: Efficient entity extraction and relationship mapping
- **AI Service Orchestration**: Coordinating multiple AI agents for complex workflows
- **Database Integration**: Managing relationships between PostgreSQL, Neo4j, and Redis
- **Performance Optimization**: Caching strategies and query optimization

### Key Learnings
- **Modular Architecture**: Importance of well-defined service boundaries
- **AI Pipeline Design**: Effective orchestration of multi-agent workflows
- **Data Consistency**: Managing data across multiple database systems
- **Scalability**: Containerized deployment and resource management
- **Security Implementation**: Comprehensive authentication and authorization

## Future Improvements

### Short-term Enhancements
- **Advanced NLP Models**: Integration of more sophisticated language models
- **Enhanced Visualization**: Improved knowledge graph and analytics dashboards
- **Mobile Application**: Native mobile app for iOS and Android
- **API Documentation**: Interactive Swagger/OpenAPI documentation

### Long-term Roadmap
- **Federated Learning**: Privacy-preserving AI model training
- **Multi-tenant Architecture**: Support for enterprise deployment
- **Advanced Analytics**: Predictive analytics and business intelligence
- **Voice Interface**: Speech-to-text and text-to-speech capabilities
- **Plugin System**: Extensible architecture for third-party integrations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**DevDutt S**

- GitHub: [github.com/0DevDutt0](https://github.com/0DevDutt0)
- LinkedIn: [linkedin.com/in/devdutts](https://linkedin.com/in/devdutts)
- Email: devduttshoji123@gmail.com

## Contact

For questions, support, or collaboration opportunities, please open an issue on the GitHub repository or contact us at contact@aegisai.com.
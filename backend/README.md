# AegisAI Backend

This is the backend API for the AegisAI platform, built with FastAPI.

## Project Structure

```
app/
├── main.py                 # Main application entry point
├── api/                    # API routes
│   └── v1/
│       └── endpoints/      # API endpoint handlers
├── core/                   # Core configuration and security
│   ├── config.py           # Application configuration
│   └── security.py         # Authentication and security utilities
├── models/                 # Database models
├── db/                     # Database connection and session management
├── schemas/                # Pydantic models for data validation
├── services/               # Business logic
└── utils/                  # Utility functions
```

## API Endpoints

- **Authentication**: `/api/v1/auth/login`, `/api/v1/auth/register`
- **Documents**: `/api/v1/documents/`
- **RAG**: `/api/v1/rag/query`, `/api/v1/rag/stream`
- **Graph**: `/api/v1/graph/search`, `/api/v1/graph/neighborhood`
- **Analytics**: `/api/v1/analytics/summary`, `/api/v1/analytics/tokens`
- **Observability**: `/api/v1/observability/traces`

## Running the Application

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run with Uvicorn:
   ```
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

3. Access the API at `http://localhost:8000`

## Development

- The application uses PostgreSQL for data storage
- Redis for caching
- ChromaDB for vector storage
- Neo4j for graph database
- Ollama for LLM access
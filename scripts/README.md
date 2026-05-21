# AegisAI Scripts

This directory contains utility scripts for the AegisAI platform.

## Available Scripts

### start_dev.sh
Starts the complete development environment using Docker Compose.

Usage:
```bash
./start_dev.sh
```

This script will:
- Build all Docker images
- Start all services (backend, frontend, database, Redis, Neo4j)
- Expose the necessary ports

## Development Setup

1. Make sure Docker and Docker Compose are installed
2. Run the development script:
```bash
./start_dev.sh
```

3. Access the services:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Database: http://localhost:5432
- Neo4j: http://localhost:7474 (user: neo4j, password: password)
#!/bin/bash
set -e
echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h postgres -p 5432 -U aegisai; do
  sleep 1
done
echo "Running Alembic migrations..."
docker compose exec backend alembic upgrade head
echo "Creating initial indexes..."
docker compose exec backend python -c "
from app.db.neo4j import Neo4jClient
from app.models.graph_schema import init_graph_schema
import asyncio
asyncio.run(init_graph_schema(Neo4jClient().driver))
"
echo "Database initialization complete."
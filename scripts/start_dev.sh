#!/bin/bash

# Start AegisAI development environment
echo "Starting AegisAI development environment..."

# Build and start Docker containers
docker-compose up --build

echo "AegisAI development environment started!"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000"
echo "Database: http://localhost:5432"
echo "Neo4j: http://localhost:7474 (user: neo4j, password: password)"
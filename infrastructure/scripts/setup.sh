#!/bin/bash
set -e
echo "Running database migrations..."
docker compose exec backend alembic upgrade head
echo "Loading models into Ollama..."
bash infrastructure/scripts/download_models.sh
echo "Setup complete."
"""Shared test fixtures and environment setup.

Settings in app.core.config declare several required fields with no defaults
(DATABASE_URL, REDIS_URL, NEO4J_*, SECRET_KEY). Importing the app without them
raises a pydantic ValidationError, so we populate safe test values here *before*
the app module is imported by any test.
"""
import os

os.environ.setdefault("DATABASE_URL", "sqlite:///./test.db")
os.environ.setdefault("REDIS_URL", "redis://localhost:6379/0")
os.environ.setdefault("NEO4J_URI", "bolt://localhost:7687")
os.environ.setdefault("NEO4J_USER", "neo4j")
os.environ.setdefault("NEO4J_PASSWORD", "test")
os.environ.setdefault("SECRET_KEY", "test-secret-key-not-for-production")

import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture(scope="session")
def client() -> TestClient:
    """A reusable TestClient bound to the canonical FastAPI app (app.main:app)."""
    return TestClient(app)

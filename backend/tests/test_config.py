"""Tests for application settings (app.core.config)."""

from app.core.config import settings


def test_project_defaults():
    assert settings.PROJECT_NAME == "AegisAI Platform"
    assert settings.API_V1_STR == "/api/v1"
    assert settings.ALGORITHM == "HS256"


def test_required_settings_populated():
    # conftest sets these for the test session.
    assert settings.DATABASE_URL
    assert settings.SECRET_KEY
    assert settings.NEO4J_URI

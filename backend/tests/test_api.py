"""Tests for the API surface: OpenAPI schema, routing, and v1 wiring."""

from app.core.config import settings


def test_openapi_schema_available(client):
    response = client.get(f"{settings.API_V1_STR}/openapi.json")
    assert response.status_code == 200
    schema = response.json()
    assert schema["info"]["title"] == settings.PROJECT_NAME
    assert "paths" in schema


def test_unknown_route_returns_404(client):
    response = client.get("/this-route-does-not-exist")
    assert response.status_code == 404


def test_v1_routers_are_registered(client):
    """documents, users, chat, and graph routers should be mounted under /api/v1."""
    schema = client.get(f"{settings.API_V1_STR}/openapi.json").json()
    paths = " ".join(schema["paths"].keys())
    for prefix in ("/documents", "/users", "/chat", "/graph"):
        assert f"{settings.API_V1_STR}{prefix}" in paths


def test_docs_endpoint_served(client):
    response = client.get("/docs")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]

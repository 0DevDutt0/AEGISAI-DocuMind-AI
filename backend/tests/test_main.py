"""Smoke tests for the application entrypoint (app.main:app)."""


def test_read_root(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to AegisAI Platform"}


def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_health_content_type(client):
    response = client.get("/health")
    assert response.headers["content-type"].startswith("application/json")

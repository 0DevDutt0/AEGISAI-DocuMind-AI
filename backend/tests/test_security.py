"""Unit tests for password hashing and JWT helpers (app.core.security)."""

from datetime import timedelta

from app.core.security import (
    create_access_token,
    get_password_hash,
    verify_password,
    verify_token,
)


def test_password_hash_roundtrip():
    password = "s3cr3t-passw0rd"
    hashed = get_password_hash(password)
    assert hashed != password
    assert verify_password(password, hashed) is True


def test_password_verify_rejects_wrong_password():
    hashed = get_password_hash("correct-horse")
    assert verify_password("battery-staple", hashed) is False


def test_access_token_roundtrip():
    token = create_access_token({"sub": "alice"})
    payload = verify_token(token)
    assert payload is not None
    assert payload["sub"] == "alice"
    assert "exp" in payload


def test_verify_token_rejects_garbage():
    assert verify_token("not-a-real-jwt") is None


def test_expired_token_is_rejected():
    token = create_access_token({"sub": "bob"}, expires_delta=timedelta(seconds=-1))
    assert verify_token(token) is None

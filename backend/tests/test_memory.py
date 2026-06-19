"""Tests for the memory model/schema/service reconciliation.

These guard the previously-mismatched contract: the SQLAlchemy MemoryItem model,
the MemoryCreate/MemoryItem schemas, and MemoryService all use user_id + content.
"""

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.db.session import Base
from app.models.memory import MemoryItem
from app.services.memory_service import MemoryService


@pytest.fixture
def session():
    engine = create_engine("sqlite:///:memory:")
    Base.metadata.create_all(engine, tables=[MemoryItem.__table__])
    TestingSession = sessionmaker(bind=engine)
    db = TestingSession()
    try:
        yield db
    finally:
        db.close()
        engine.dispose()


def test_create_memory_persists_user_id_and_content(session):
    service = MemoryService(session)
    created = service.create_memory({"user_id": "user-1", "content": "remember this"})

    assert created.id is not None
    assert created.user_id == "user-1"
    assert created.content == "remember this"
    assert created.created_at is not None


def test_list_memory_returns_created_items(session):
    service = MemoryService(session)
    service.create_memory({"user_id": "user-1", "content": "first"})
    service.create_memory({"user_id": "user-2", "content": "second"})

    items = service.get_memory_items()

    assert len(items) == 2
    assert {item.content for item in items} == {"first", "second"}

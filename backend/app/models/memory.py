from sqlalchemy import Column, Integer, String, Text, DateTime
from app.db.session import Base
from datetime import datetime, timezone


def _utcnow():
    return datetime.now(timezone.utc)

class MemoryItem(Base):
    __tablename__ = "memory_items"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    content = Column(Text)
    created_at = Column(DateTime, default=_utcnow)
    updated_at = Column(DateTime, default=_utcnow, onupdate=_utcnow)
from sqlalchemy.orm import Session
from app.models.memory import MemoryItem
from app.schemas.memory import MemoryCreate

class MemoryService:
    def __init__(self, db: Session):
        self.db = db

    def create_memory(self, memory_data: dict):
        memory = MemoryItem(**memory_data)
        self.db.add(memory)
        self.db.commit()
        self.db.refresh(memory)
        return memory

    def get_memory_items(self):
        return self.db.query(MemoryItem).all()
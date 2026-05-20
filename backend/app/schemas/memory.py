from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class MemoryBase(BaseModel):
    user_id: str
    content: str

class MemoryCreate(MemoryBase):
    pass

class Memory(MemoryBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
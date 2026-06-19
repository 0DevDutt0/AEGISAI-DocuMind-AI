from pydantic import BaseModel, ConfigDict
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

    model_config = ConfigDict(from_attributes=True)

class MemoryItem(MemoryBase):
    id: int
    created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)
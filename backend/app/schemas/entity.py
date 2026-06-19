from pydantic import BaseModel, ConfigDict
from typing import Optional

class EntityBase(BaseModel):
    name: str
    type: str

class EntityCreate(EntityBase):
    description: Optional[str] = None

class Entity(EntityBase):
    id: int
    description: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)
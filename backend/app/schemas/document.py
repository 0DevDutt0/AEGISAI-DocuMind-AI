from pydantic import BaseModel, ConfigDict
from typing import Optional
from datetime import datetime

class DocumentBase(BaseModel):
    filename: str
    file_path: str

class DocumentCreate(DocumentBase):
    content: Optional[str] = None

class Document(DocumentBase):
    id: int
    content: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
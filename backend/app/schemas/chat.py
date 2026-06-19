from typing import List, Optional

from pydantic import BaseModel


class ChatQuery(BaseModel):
    query: str
    document_id: Optional[str] = None
    conversation_id: Optional[str] = None


class ChatResponse(BaseModel):
    query: str
    response: str
    sources: List[str] = []

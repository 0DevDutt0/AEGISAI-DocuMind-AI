from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class QueryRequest(BaseModel):
    query: str
    filters: Optional[Dict[str, Any]] = {}

class QueryResponse(BaseModel):
    query: str
    response: str
    sources: List[str]
    context: Optional[str] = None
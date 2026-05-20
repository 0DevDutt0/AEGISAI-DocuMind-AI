from pydantic import BaseModel
from typing import List, Dict, Any

class TraceResponse(BaseModel):
    traces: List[Dict[str, Any]]
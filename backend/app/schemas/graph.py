from pydantic import BaseModel
from typing import List, Dict, Any

class GraphSearchResponse(BaseModel):
    results: List[Dict[str, Any]]

class GraphNeighborhoodResponse(BaseModel):
    nodes: List[Dict[str, Any]]
    relationships: List[Dict[str, Any]]
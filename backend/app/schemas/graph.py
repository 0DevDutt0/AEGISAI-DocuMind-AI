from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class Entity(BaseModel):
    id: Optional[str] = None
    name: str
    type: Optional[str] = None
    properties: Dict[str, Any] = {}

class Relationship(BaseModel):
    id: Optional[str] = None
    source: str
    target: str
    type: Optional[str] = None
    properties: Dict[str, Any] = {}

class GraphSearchResponse(BaseModel):
    results: List[Dict[str, Any]]

class GraphNeighborhoodResponse(BaseModel):
    nodes: List[Dict[str, Any]]
    relationships: List[Dict[str, Any]]
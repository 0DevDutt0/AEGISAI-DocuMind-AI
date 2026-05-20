from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.graph import Entity, Relationship
from app.services.graph_service import GraphService

router = APIRouter()

@router.get("/entities", response_model=list[Entity])
def get_entities(db: Session = Depends(get_db)):
    service = GraphService(db)
    return service.get_entities()

@router.get("/relationships", response_model=list[Relationship])
def get_relationships(db: Session = Depends(get_db)):
    service = GraphService(db)
    return service.get_relationships()
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.memory import MemoryItem, MemoryCreate
from app.services.memory_service import MemoryService

router = APIRouter()

@router.post("/", response_model=MemoryItem, status_code=status.HTTP_201_CREATED)
def create_memory(memory: MemoryCreate, db: Session = Depends(get_db)):
    service = MemoryService(db)
    return service.create_memory(memory.dict())

@router.get("/", response_model=list[MemoryItem])
def list_memory(db: Session = Depends(get_db)):
    service = MemoryService(db)
    return service.get_memory_items()
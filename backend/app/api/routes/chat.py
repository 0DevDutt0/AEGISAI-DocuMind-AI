from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.chat import ChatQuery, ChatResponse
from app.services.chat_service import ChatService

router = APIRouter()

@router.post("/query", response_model=ChatResponse)
def query_chat(query: ChatQuery, db: Session = Depends(get_db)):
    service = ChatService(db)
    try:
        response = service.process_query(query)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
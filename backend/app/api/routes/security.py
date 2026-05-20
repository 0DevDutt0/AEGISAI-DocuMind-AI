from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.security import Token, TokenData
from app.services.security_service import SecurityService

router = APIRouter()

@router.post("/token", response_model=Token)
def get_token(credentials: TokenData, db: Session = Depends(get_db)):
    service = SecurityService(db)
    try:
        token = service.authenticate_user(credentials.username, credentials.password)
        if not token:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return token
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
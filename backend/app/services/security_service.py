from sqlalchemy.orm import Session
from app.schemas.security import TokenData
from app.core.security import create_access_token, verify_password
from app.models.user import User

class SecurityService:
    def __init__(self, db: Session):
        self.db = db

    def authenticate_user(self, username: str, password: str):
        user = self.db.query(User).filter(User.username == username).first()
        if not user or not verify_password(password, user.hashed_password):
            return None

        # Create access token
        access_token_expires = timedelta(minutes=30)
        token_data = {
            "sub": user.username,
            "user_id": str(user.id)
        }
        token = create_access_token(
            data=token_data,
            expires_delta=access_token_expires
        )
        return {"access_token": token, "token_type": "bearer"}
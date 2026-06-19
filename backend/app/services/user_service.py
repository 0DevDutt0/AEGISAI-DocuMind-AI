from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import get_password_hash

class UserService:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user_data: dict):
        # Check if user already exists
        existing_user = self.db.query(User).filter(User.username == user_data["username"]).first()
        if existing_user:
            raise ValueError("User already exists")

        # Hash password
        user_data["hashed_password"] = get_password_hash(user_data["password"])
        del user_data["password"]

        # Create user
        user = User(**user_data)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def get_user(self, user_id: str):
        return self.db.query(User).filter(User.id == user_id).first()
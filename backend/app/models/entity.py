from sqlalchemy import Column, Integer, String, Text
from app.db.session import Base

class Entity(Base):
    __tablename__ = "entities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String)
    description = Column(Text)
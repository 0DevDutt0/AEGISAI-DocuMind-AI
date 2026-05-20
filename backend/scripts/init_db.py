#!/usr/bin/env python3
"""
Database initialization script for AegisAI Platform
"""

import os
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.session import Base
from app.core.config import settings

def init_db():
    """Initialize the database with required tables"""
    try:
        # Create database engine
        engine = create_engine(settings.DATABASE_URL)

        # Create all tables
        Base.metadata.create_all(bind=engine)

        print("Database initialized successfully!")
        return True

    except Exception as e:
        print(f"Error initializing database: {e}")
        return False

if __name__ == "__main__":
    success = init_db()
    sys.exit(0 if success else 1)
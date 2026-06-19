from fastapi import FastAPI
from app.api.routes import api_router
from app.core.config import settings
from app.db.session import Base, engine

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Include API routes
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Welcome to AegisAI Platform"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    # Create database tables
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully!")
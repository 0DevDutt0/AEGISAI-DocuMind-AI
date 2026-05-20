from fastapi import FastAPI
from app.api.routes import api_router
from app.core.config import settings
from app.db.session import Base, engine
from app.core.observability import Observability

# Initialize database
Base.metadata.create_all(bind=engine)

# Initialize observability
observability = Observability()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Welcome to AegisAI Platform API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
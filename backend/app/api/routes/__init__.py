from fastapi import APIRouter
from app.api.routes import (
    users,
    documents,
    chat,
    graph,
    analytics,
    memory,
    security
)

api_router = APIRouter(prefix="/api/v1")

# Include all API routes
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(documents.router, prefix="/documents", tags=["documents"])
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])
api_router.include_router(graph.router, prefix="/graph", tags=["graph"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(memory.router, prefix="/memory", tags=["memory"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
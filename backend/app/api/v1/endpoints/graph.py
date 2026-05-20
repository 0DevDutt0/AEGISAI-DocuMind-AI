from fastapi import APIRouter, HTTPException
from app.services.graph_service import GraphService

router = APIRouter()

@router.get("/entities")
async def get_entities():
    try:
        # Implementation for getting entities
        return {"entities": []}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/relationships")
async def get_relationships():
    # Implementation for getting relationships
    return {"relationships": []}
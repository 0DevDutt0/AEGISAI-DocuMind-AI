from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from typing import Dict

router = APIRouter()

# WebSocket connections storage
connections: Dict[str, WebSocket] = {}

@router.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    await websocket.accept()
    connections[user_id] = websocket
    try:
        while True:
            data = await websocket.receive_text()
            # Handle message and send to appropriate user
            await websocket.send_text(f"Message received: {data}")
    except WebSocketDisconnect:
        connections.pop(user_id, None)
        await websocket.close()
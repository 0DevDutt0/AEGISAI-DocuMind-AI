from app.agents.base import BaseAgent
from app.services.memory_service import MemoryService

class MemoryAgent(BaseAgent):
    def __init__(self):
        super().__init__("Memory Agent")
        self.memory_service = MemoryService()

    def execute(self, user_id: str, memory: dict):
        # Implementation for memory management
        return self.memory_service.store_memory(user_id, memory)

    def get_status(self):
        return "Memory Agent is ready"
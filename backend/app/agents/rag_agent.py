from app.agents.base import BaseAgent
from app.services.rag_service import RAGService

class RAGAgent(BaseAgent):
    def __init__(self):
        super().__init__("RAG Agent")
        self.rag_service = RAGService()

    def execute(self, query: str, context: str = None):
        # Implementation for RAG processing
        return self.rag_service.query(query, context)

    def get_status(self):
        return "RAG Agent is ready"
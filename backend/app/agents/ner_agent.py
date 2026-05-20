from app.agents.base import BaseAgent
from app.services.ner_service import NERService

class NERAgent(BaseAgent):
    def __init__(self):
        super().__init__("NER Agent")
        self.ner_service = NERService()

    def execute(self, text: str):
        # Implementation for NER processing
        return self.ner_service.extract_entities(text)

    def get_status(self):
        return "NER Agent is ready"
from app.agents.base import BaseAgent
from app.services.security_service import SecurityService

class ValidationAgent(BaseAgent):
    def __init__(self):
        super().__init__("Validation Agent")
        self.security_service = SecurityService()

    def execute(self, data: dict):
        # Implementation for data validation
        return self.security_service.validate_input(data)

    def get_status(self):
        return "Validation Agent is ready"
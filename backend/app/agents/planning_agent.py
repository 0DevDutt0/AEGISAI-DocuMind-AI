from app.agents.base import BaseAgent
from app.services.planning_service import PlanningService

class PlanningAgent(BaseAgent):
    def __init__(self):
        super().__init__("Planning Agent")
        self.planning_service = PlanningService()

    def execute(self, task: str):
        # Implementation for planning
        return self.planning_service.create_plan(task)

    def get_status(self):
        return "Planning Agent is ready"
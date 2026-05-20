from app.agents.base import BaseAgent
from app.services.vision_service import VisionService

class VisionAgent(BaseAgent):
    def __init__(self):
        super().__init__("Vision Agent")
        self.vision_service = VisionService()

    def execute(self, image_path: str):
        # Implementation for vision processing
        return self.vision_service.analyze_image(image_path)

    def get_status(self):
        return "Vision Agent is ready"
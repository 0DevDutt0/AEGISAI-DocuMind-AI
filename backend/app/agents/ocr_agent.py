from app.agents.base import BaseAgent
from app.services.ocr_service import OCRService

class OCRAgent(BaseAgent):
    def __init__(self):
        super().__init__("OCR Agent")
        self.ocr_service = OCRService()

    def execute(self, image_path: str):
        # Implementation for OCR processing
        return self.ocr_service.extract_text(image_path)

    def get_status(self):
        return "OCR Agent is ready"
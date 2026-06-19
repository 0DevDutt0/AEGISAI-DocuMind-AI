from sqlalchemy.orm import Session
from app.models.document import Document

class DocumentService:
    def __init__(self, db: Session):
        self.db = db

    def create_document(self, document_data: dict):
        document = Document(**document_data)
        self.db.add(document)
        self.db.commit()
        self.db.refresh(document)
        return document

    def get_documents(self):
        return self.db.query(Document).all()

    def get_document(self, document_id: int):
        return self.db.query(Document).filter(Document.id == document_id).first()

    def delete_document(self, document_id: int):
        document = self.get_document(document_id)
        if document:
            self.db.delete(document)
            self.db.commit()
            return True
        return False
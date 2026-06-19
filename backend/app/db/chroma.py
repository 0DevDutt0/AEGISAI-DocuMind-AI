from typing import Optional

import chromadb

class ChromaDBClient:
    def __init__(self):
        self.client = chromadb.Client()
        self.collection = self.client.get_or_create_collection(
            name="documents",
            metadata={"hnsw:space": "cosine"}
        )

    def add_documents(self, documents: list, metadatas: Optional[list] = None):
        self.collection.add(
            documents=documents,
            metadatas=metadatas
        )

    def query(self, query_texts: list, n_results: int = 10):
        return self.collection.query(
            query_texts=query_texts,
            n_results=n_results
        )
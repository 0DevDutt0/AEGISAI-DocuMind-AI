from sqlalchemy import Column, Integer, String, Text
from app.db.session import Base

class GraphNode(Base):
    __tablename__ = "graph_nodes"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(String, index=True)
    label = Column(String)
    properties = Column(Text)

class GraphRelationship(Base):
    __tablename__ = "graph_relationships"

    id = Column(Integer, primary_key=True, index=True)
    source_node_id = Column(String, index=True)
    target_node_id = Column(String, index=True)
    relationship_type = Column(String)
    properties = Column(Text)
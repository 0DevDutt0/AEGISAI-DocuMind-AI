from pydantic import BaseModel
from typing import Dict, Any, List
from datetime import datetime

class DashboardData(BaseModel):
    total_documents: int = 0
    total_entities: int = 0
    total_relationships: int = 0
    recent_activity: List[Dict[str, Any]] = []

class AnalyticsSummary(BaseModel):
    total_documents: int
    total_users: int
    total_queries: int
    last_updated: datetime

class TokenUsageResponse(BaseModel):
    total_tokens: int
    tokens_today: int
    tokens_this_week: int
    tokens_this_month: int
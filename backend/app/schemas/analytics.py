from pydantic import BaseModel
from typing import Dict, Any
from datetime import datetime

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
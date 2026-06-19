from typing import Optional

import redis
from app.core.config import settings

class RedisClient:
    def __init__(self):
        self.client = redis.Redis.from_url(settings.REDIS_URL)

    def get(self, key: str):
        return self.client.get(key)

    def set(self, key: str, value: str, ex: Optional[int] = None):
        self.client.set(key, value, ex=ex)

    def delete(self, key: str):
        self.client.delete(key)
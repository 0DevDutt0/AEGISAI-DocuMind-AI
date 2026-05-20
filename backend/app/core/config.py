from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # Application settings
    PROJECT_NAME: str = "AegisAI Platform"
    VERSION: str = "0.1.0"

    # API settings
    API_V1_STR: str = "/api/v1"

    # Database settings
    DATABASE_URL: str

    # Redis settings
    REDIS_URL: str

    # Neo4j settings
    NEO4J_URI: str
    NEO4J_USER: str
    NEO4J_PASSWORD: str

    # Security settings
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # LLM settings
    OPENAI_API_KEY: Optional[str] = None
    OLLAMA_API_URL: str = "http://localhost:11434"

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
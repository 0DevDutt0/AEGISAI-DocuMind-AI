import os
from pathlib import Path

def get_file_extension(file_path: str) -> str:
    return Path(file_path).suffix.lower()

def is_supported_file(file_path: str) -> bool:
    supported_extensions = ['.pdf', '.txt', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.jpg', '.jpeg', '.png']
    return get_file_extension(file_path) in supported_extensions

def sanitize_filename(filename: str) -> str:
    # Remove invalid characters from filename
    return "".join(c for c in filename if c.isalnum() or c in "._- ").rstrip()
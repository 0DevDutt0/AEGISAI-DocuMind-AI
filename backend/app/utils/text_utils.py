import re
from typing import List

def clean_text(text: str) -> str:
    # Remove extra whitespace and normalize text
    return re.sub(r'\s+', ' ', text).strip()

def split_text(text: str, max_length: int = 1000) -> List[str]:
    # Split text into chunks of max_length
    if len(text) <= max_length:
        return [text]

    chunks = []
    while text:
        if len(text) <= max_length:
            chunks.append(text)
            break
        else:
            # Find a good split point
            split_point = text.rfind(' ', 0, max_length)
            if split_point == -1:
                split_point = max_length
            chunks.append(text[:split_point])
            text = text[split_point:].lstrip()
    return chunks

def extract_keywords(text: str, num_keywords: int = 10) -> List[str]:
    # Simple keyword extraction
    words = re.findall(r'\b\w+\b', text.lower())
    # Remove common stop words
    stop_words = {'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'}
    keywords = [word for word in words if word not in stop_words and len(word) > 3]
    return list(set(keywords))[:num_keywords]
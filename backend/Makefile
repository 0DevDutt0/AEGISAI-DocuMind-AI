.PHONY: install run test lint clean

install:
	pip install -r requirements.txt

run:
	uvicorn app.main:app --host 0.0.0.0 --port 8000

test:
	pytest tests/

lint:
	flake8 app/

clean:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
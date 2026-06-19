.PHONY: install run test lint clean

install:
	pip install -r requirements.txt

run:
	uvicorn app.main:app --host 0.0.0.0 --port 8000

# Coverage is configured in pytest.ini (--cov=app), so `make test` matches CI.
test:
	pytest

lint:
	ruff check app
	mypy app --ignore-missing-imports

clean:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	rm -f .coverage coverage.xml test.db
	rm -rf .pytest_cache htmlcov

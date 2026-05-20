#!/usr/bin/env python3
"""
Test runner for AegisAI Platform
"""

import os
import sys
import subprocess

def run_tests():
    """Run all tests in the tests directory"""
    try:
        # Run pytest with coverage
        result = subprocess.run([
            "pytest",
            "tests/",
            "-v",
            "--tb=short"
        ], check=True)

        print("All tests passed successfully!")
        return True

    except subprocess.CalledProcessError as e:
        print(f"Tests failed with exit code {e.returncode}")
        return False
    except Exception as e:
        print(f"Error running tests: {e}")
        return False

if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)
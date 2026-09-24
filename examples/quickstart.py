"""Open Register Company Status & Financials API — quick start (Python, requests).
Set RAPIDAPI_KEY to the key shown on open-register-company-status-financials at rapidapi.com after subscribing to the free plan."""
import os
import requests

HOST = "open-register-company-status-financials.p.rapidapi.com"
KEY = os.environ["RAPIDAPI_KEY"]

def call(path: str):
    r = requests.get(f"https://{HOST}{path}",
                     headers={"X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST}, timeout=30)
    r.raise_for_status()
    return r.json()

if __name__ == "__main__":
    # Find a company by name in one country
    data = call("/v1/companies/search?name=Nokia&country=FI&limit=3")
    import json
    print(json.dumps(data, ensure_ascii=False, indent=2)[:2000])

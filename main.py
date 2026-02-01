from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# THIS SECTION FIXES THE CONNECTION
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows your React app to connect
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/notices")
def get_notices():
    try:
        with open("data.json", "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return [{"title": "Error", "link": "#", "message": "Run scraper.py first!"}]
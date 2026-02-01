StudyBridge YCMOU 🎓
A Real-time Resource Aggregator for BCA Students

The Problem

Navigating university portals for exam schedules, results, and notifications can be time-consuming and confusing for students. Important updates are often buried under multiple menus.

The Solution

StudyBridge YCMOU is a full-stack web application that automates this process. It uses a Python-based scraper to monitor the YCMOU portal and displays the latest resources in a clean, user-friendly React dashboard.

🚀 Key Features
Automated Scraping: Periodically fetches the latest PDF links and notices from the YCMOU Digital University portal.

FastAPI Backend: A lightweight, high-performance API that serves scraped data as JSON.

Modern React UI: A responsive dashboard featuring "Resource Cards" for quick access to documents.

Smart Filtering: Specifically targets BCA and Examination-related keywords to filter out irrelevant information.

Category,Technology Used
Frontend,"React.js, CSS3 (Modern Grid/Flexbox)"
Backend,"Python, FastAPI, Uvicorn"
Scraping,"BeautifulSoup4, Requests"
Data,JSON (Scrape-and-Cache Architecture)


📂 Project Structure

StudyBridge-YCMOU/
├── scraper.py          # The BeautifulSoup "Engine"
├── main.py             # FastAPI Server & CORS Configuration
├── data.json           # Local cache of scraped resources
├── requirements.txt    # Backend dependencies
└── frontend/           # React Application
    ├── src/
    │   ├── App.js      # Main UI Logic & API Fetching
    │   └── App.css     # Custom Dashboard Styling
    └── package.json


    ⚙️ Setup & Installation
1. Backend Setup

# Clone the repository
git clone https://github.com/AnugrahSingh/StudyBridge-YCMOU.git

# Install dependencies
pip install -r requirements.txt

# Run the scraper
python3 scraper.py

⚙️ Setup & Installation
1. Backend Setup

   # Clone the repository
git clone https://github.com/AnugrahSingh/StudyBridge-YCMOU.git

# Install dependencies
pip install -r requirements.txt

# Run the scraper
python3 scraper.py

# Start the API (on port 8001 to avoid conflicts)
python3 -m uvicorn main:app --reload --port 8001

2. Frontend Setup

   cd frontend
npm install
npm start


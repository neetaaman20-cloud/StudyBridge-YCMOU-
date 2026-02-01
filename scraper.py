import requests
from bs4 import BeautifulSoup
import json

def get_ycmou_updates():
    # Example URL: YCMOU's notice board or student portal
    URL = "https://ycmou.digitaluniversity.ac/" 
    headers = {"User-Agent": "Mozilla/5.0"}
    
    try:
        response = requests.get(URL, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        updates = []
        # This selector depends on the site's actual HTML structure
        for link in soup.find_all('a', href=True):
            text = link.text.strip()
            if any(word in text.lower() for word in ['exam', 'timetable', 'bca', 'result']):
                updates.append({
                    "title": text,
                    "link": link['href'] if link['href'].startswith('http') else URL + link['href']
                })
        return updates
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    data = get_ycmou_updates()
    with open("data.json", "w") as f:
        json.dump(data, f, indent=4)
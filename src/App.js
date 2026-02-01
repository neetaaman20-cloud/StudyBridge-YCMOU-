import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Using Port 8001 to bypass your Port 8000 conflict
    fetch('http://127.0.0.1:8001/api/notices')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNotices(data);
        }
      })
      .catch((err) => console.error("Backend Error:", err));
  }, []);

  return (
    <div className="App">
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>StudyBridge YCMOU</h1>
        <p>BCA Student Resource Portal</p>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        {notices.length > 0 ? (
          notices.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ddd', margin: '10px', padding: '15px', borderRadius: '8px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                View Document →
              </a>
            </div>
          ))
        ) : (
          <p>Connecting to backend... ensure main.py is running on port 8001.</p>
        )}
      </div>
    </div>
  );
}

export default App;
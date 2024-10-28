import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      setToken(token);
    }
    
    console.log("I HAVE A TOKEN", token);
  }, []);

  return (
      <div className="app">
        <Login />
      </div>
  );
}

export default App;

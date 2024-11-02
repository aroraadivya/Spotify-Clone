import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Get the token from the URL
    const hash = getTokenFromUrl();
    window.location.hash = ''; // Clear the token from URL for security
    const _token = hash.access_token;

    if (_token) {
      setToken(_token); // Set the token in the state

      spotify.setAccessToken(_token); // Set token for Spotify API requests

      // Fetch user information
      spotify.getMe()
        .then(user => {
          console.log('User info:', user);

          dispatch({
            type: 'SET_USER',
            user: user
          });
        })
        .catch(error => console.error('Error fetching user info:', error)); // Error handling for Spotify API
    }

    console.log('I HAVE A TOKEN', _token);
  }, [dispatch]); // Add dispatch to dependency array to avoid missing dependencies

  console.log('User is', user);

  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify} /> // Pass spotify instance if needed by Player
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

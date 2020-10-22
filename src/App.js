import React, { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './config/spotify';
import Login from './views/Login/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './views/Dashboard/Player/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: 'SET_USER', user: user });
      });
    }
  }, []);

  console.log(user);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { getTokenFromUrl } from './config/spotify';
import Login from './views/Login/Login';

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log(token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;

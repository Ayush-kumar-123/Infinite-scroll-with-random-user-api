import React, { useState } from 'react';
import App from './App';

const AuthApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the login credentials are valid
    if (username === 'foo' && password === 'bar') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    padding: '8px 16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <App />
      ) : (
        <div style={containerStyles}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyles}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
          />
          <br />
          <button onClick={handleLogin} style={buttonStyles}>
            Login
          </button>
        </div>
      )}
    </React.StrictMode>
  );
};

export default AuthApp;

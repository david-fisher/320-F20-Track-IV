import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Editor! This is currently <i>very</i> unfinished.
        </p>
        <a
          className="App-link"
          href="https://github.com/david-fisher/320-F20-Track-IV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the Git page to see our progress!
        </a>
      </header>
    </div>
  );
}

export default App;

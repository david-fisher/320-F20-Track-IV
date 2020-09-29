import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';

// function Button(name){

// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* I'm leaving this commented out because I don't think we're gonna pull in some random image at the moment. */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

      <button onclick="window.location='youtube.com'">Youtube</button>
      <Button 
        variant="outline-secondary" 
        href = "https://duckduckgo.com/?q=How+to+make+a+scenario&t=h_&ia=web"
      >
        'Create a New Scenario'
      </Button>{' '}
      {/* <Button 
        variant="outline-secondary" href = 
        "https://duckduckgo.com/?q=How+to+make+a+scenario&t=h_&ia=web"
      >
          Edit an Existing Scenario
      </Button>{' '} */}
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';


/*
  TODO: Button Size & Color Scheme. This *works*, but the code's not great tbh.
  We will also have to import multiple pages with react-router
  React-router will force us to restructure some things, but we should go over that on Friday during team meeting.
  Link here: https://reactrouter.com/
*/


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <h1>          
            {/* Eventually will have to integrate with login to pull username 
                Top bar will eventually be used everywhere; app-header content replaced*/}
            Ethics-Simulator
          </h1>
        </header>
      </div>

      <div className="Welcome-text">
        <header>
          <h2>
            Welcome, User! 
          </h2>
          <h5>
            Select the action you would like to choose:
          </h5>
        </header>
      </div>

      <div class = "Left-Button"> 
        {/*Question about above ^: Should we just change it to be a button and nest it inside a header
          Will have to customize button Component. Size, Colors at the least. 
          Probably by making a sub-class?*/}
        <Button lg block
          variant="outline-secondary" 
          href = "https://duckduckgo.com/?q=How+to+make+a+scenario&t=h_&ia=web"
        >
          'Create a New Scenario'
        </Button>{' '}
      </div>

      <div class = "Right-Button">
        <Button lg block
          variant="outline-secondary" href = 
          "https://duckduckgo.com/?q=How+to+make+a+scenario&t=h_&ia=web"
        >
            Edit an Existing Scenario
        </Button>{' '}
      </div>

    </div>
  );
}

export default App;

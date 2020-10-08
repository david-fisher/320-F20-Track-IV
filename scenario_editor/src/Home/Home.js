import React, { Component } from 'react';
import './Home.css';
import Nav from '../Components/Nav'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div> 
      <Nav/>
      <h1>Welcome, User!</h1>
      <p>Select an action:</p>

      <div class="Left-Button">
        <Link to = "/new_scenario">
          <Button
          size = "lg"
          variant="outline-secondary"
          >
            Create a New Scenario
          </Button>{' '}
        </Link>
      </div>

      <div class="Right-Button">
        <Button
        size = "lg"
        variant="outline-secondary" 
        href=
        "https://duckduckgo.com/?q=How+to+make+a+scenario&t=h_&ia=web">
          Edit an Existing Scenario
        </Button>{' '}
      </div>
    </div>
  );
}

export default Home;

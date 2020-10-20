import React, { Component } from 'react';
import './Home.css';
import Nav from '../Components/Nav'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Home() {
  return (
    <div> 
      <Nav/>
      <div class="Jumbotron">
      <Jumbotron>
      <h1>Welcome, User!</h1>
      <p>
        Please select an action below:
      </p>      
    </Jumbotron>
</div>

      <div class="Left-Button">        
        <Link to = "/new_scenario">
          <Button
          size = "custom-button-size"
          variant="outline-secondary"
          >
            Create a New Scenario
          </Button>{' '}
        </Link>
      </div>

      <div class="Right-Button">
        <Button
        size = "custom-button-size"
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

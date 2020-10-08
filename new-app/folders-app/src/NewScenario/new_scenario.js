import React from 'react';
import './new_scenario.css';
import Nav from '../Components/Nav'



function New_Scenario() {
    return (
      <div>
        <Nav/> 
        <form>
            <h1>Scenario Title:</h1>
            <input type='text' id = 'title'/>
        </form>
        <form>
            <h1>Scenario Description:</h1>
            <input type='text'/>
        </form>
      </div>
    );
  }

  export default New_Scenario;
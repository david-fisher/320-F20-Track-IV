// ********************************************
// NOT UPDATED. 
// You can follow Dashboard.js if you want to make this page though :)
// Recommend looking into 
// ********************************************
import React, { Component } from 'react';
import './NewScenario.css';
import Nav from '../../Components/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



//Essentially the NewScenario page from the Wireframe.
//The textboxes need to be fixed, and might have to be recoded in order to hold state properly
class NewScenario extends Component {
  render() {
    return (

      <div>
        <Nav />
        <form>
          <h1>Scenario Title:</h1>
          <input type='text' id='title' size="element.value.length + 1" />
        </form>
        <div id='Description'>

          <form>
            <h1>Scenario Description:</h1>
            <textarea rows='15' cols='75' />
            <div class="Introduction-submit-button">
              {}
              <Link to="/introduction">
                <Button
                  size="custom-submit-button"
                  variant="outline-secondary"
                  value="Submit"
                >
                  Submit
                    </Button>{' '}
              </Link>
            </div>
          </form>

        </div>
      </div>

    )
  }



}



export default NewScenario;
import React, { Component } from 'react';
import './New_Scenario.css';
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import ScenarioContext from '../Context/scenario_context';


//Essentially the NewScenario page from the Wireframe.
//The textboxes need to be fixed, and might have to be recoded in order to hold state properly
class New_Scenario extends Component {



  render() {
    return (
      <ScenarioContext.Consumer>
        {context => (
          <div>
            <Nav />
            <form>
              <h1>Scenario Title:</h1>
              <input type='text' id='title' size="element.value.length + 1" />
            </form>
            <div id='Description'>

              <form>
                <h1>Scenario Description:</h1>
                <textarea rows='15' cols='75' value={this.context} />
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

        )}
      </ScenarioContext.Consumer>
    );

  }

}

export default New_Scenario;
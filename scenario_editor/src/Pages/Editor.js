// ********************************************
// NOT DONE.
// This is the same code as the NewScenario class, except it's a function instead of a component.
// This needs a LOT of work, still structuring.
// ********************************************

import React, { Component } from 'react';
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Editor() {

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

export default Editor;
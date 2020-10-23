// ********************************************
// UPDATED. Could be structured better but NOT NEEDED at the moment
// ********************************************
import React, { Component } from 'react';
import './Home.css';
import Nav from '../Components/NavHome'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }

}));

function Home() {

  const classes = useStyles();

  return (
    <div >
      <Nav />
      <div className={classes.header}>

        <div >
          <h1>Welcome, User!</h1>
          <h2>
            Please select an action below:
      </h2>
        </div>
      </div>
      <div className={classes.buttonContainer} >
        <div class="Left-Button">
          <Button
            size="custom-button-size"
            variant="outline-secondary"
          >
            <Link to="/new_scenario">
              Create a New Scenario
            </Link>
          </Button>{' '}
        </div>
        <div class="Right-Button">
          <Button
            size="custom-button-size"
            variant="outline-secondary"
          >
            <Link to="/dashboard">
              Go to Existing Scenarios
            </Link>
          </Button>
        </div>
      </div>
    </div>

  );
}

export default Home;

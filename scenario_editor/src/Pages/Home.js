// ********************************************
// UPDATED. Could be structured better but NOT NEEDED at the moment
// ********************************************
import React, { Component } from 'react';
import Nav from '../Components/NavHome'
import Button from '@material-ui/core/Button';
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
    justifyContent: 'center',
  },
  optionButton: {
    marginTop: '10px',
    color: '#881c1c',
    textAlign: 'center',
    padding: '3rem',
    margin: '1%',
    color: 'white',
    fontWeight: '500',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '3px',
    fontSize: '20px',
    backgroundColor: '#881c1c',
    maxWidth: '345px',
    maxHeight: '8em',
  },
  link: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
        <div>
          <Button
            className={classes.optionButton}
            component={Link} to={{ pathname: "/new_scenario" }}
          >
            Create a New Scenario
          </Button>{' '}
        </div>
        <div>
          <Button
            className={classes.optionButton}
            component={Link} to={{ pathname: "/dashboard" }}
          >
            View/Edit Existing Scenarios
          </Button>
        </div>
      </div>
    </div>

  );
}

export default Home;

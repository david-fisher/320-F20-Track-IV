// ********************************************
// UPDATED. Could be structured better but NOT NEEDED at the moment
// ********************************************
import React, { Component, useEffect } from 'react';
import Nav from '../Components/NavHome'
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '100ch',
},
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
    display: 'inline',
    marginTop: '10px',
    color: '#881c1c',
    textAlign: 'center',
    padding: '3rem',
    margin: '1%',
    color: 'white',
    fontWeight: '500',
    borderStyle: 'solid',
    borderWidth: '3px',
    fontSize: '20px',
    backgroundColor: '#881c1c',
    //maxWidth: '800px'
    width: '500px',
    height: '200px'
  },
}));

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();
  let token;

  useEffect(() => {
    token = location.state ? location.state.token : null;
    dispatch({
      type: 'SET_TOKEN',
      token
    });
    // this.props
    // alert(`token: ${location.state.token || "NO TOKEN"}`);
  }, [location]);

  const classes = useStyles();
  return (
    <div >
      <Nav />
      <div className={classes.header}>

        <div >
          <h1>Welcome, User!</h1>
          <b1>
            Please select an action below:
      </b1>
        </div>
      </div>
      <div className={classes.buttonContainer} >
        <div>
          <Button
            className={classes.optionButton}
          >
            <Link to="/new-scenario">
              Create a New Scenario
            </Link>
          </Button>{' '}
        </div>
        <div>
          <Button
            className={classes.optionButton}
          >
            <Link to="/dashboard">
              View/Edit Existing Scenarios
            </Link>
          </Button>
        </div>
      </div>
    </div>

  );
}

// const mapStateToProps = state => {
//   return { scenarios: state.scenarios }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch
//   }
// }

// The connect function takes another function as an argument: mapStateToProps.
// mapStateToProps determines what state from our store we want to pull into our component.
// In this case, we're specifying to only pull our state's posts property.

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;

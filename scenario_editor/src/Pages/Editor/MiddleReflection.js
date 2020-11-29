import React, { Component } from 'react';
import './PlayerResponses.css';
import Nav from '../../Components/Nav'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


// PlayerResponses.js will become Reflections.js


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '100ch',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  header: {
    margin: theme.spacing(4),
  },
  // header: {
  //   marginTop: theme.spacing(1),
  //   textAlign: 'center',
  // },
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
    maxWidth: '800px'
  },
}));

function MiddleReflection() {

  const classes = useStyles();
  return (
    <div >
      <Nav />
      <div className={classes.header}>

        <div >
          <h1>Reflections</h1>
          <b1>
            Please choose the reflection to create below:
      </b1>
        </div>
      </div>
      <div className={classes.buttonGroup} >
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button component={Link} to={'/reflections'}>Initial</Button>
          <Button component={Link} to='/middle-reflection'>Middle</Button>
          <Button component={Link} to='/final-reflection'>Final</Button>
        </ButtonGroup>
      </div>

      <div className={classes.buttonContainer} >
        <div>
          <Button
            className={classes.optionButton}
          >
            <Link to="/open-response">
              Create Open-Ended Response
            </Link>
          </Button>
        </div>
      </div>
    </div>

  );
}

export default MiddleReflection;



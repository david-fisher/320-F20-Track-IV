//import React from 'react';
import React from 'react';
import Nav from '../../Components/Nav'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '100ch',
},
  header: {
    margin: theme.spacing(4)
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
    Width: '300px',
    maxWidth: '800px',
    minWidth: '200px',
    Height: '150px'
    
  },
}));

function IntroductionHub(props) {

  const classes = useStyles();

  // const { data } = props;
  // const { scenarioID, name, due_date, description, additional_data, status } = data;

  console.log("Props in intro hub: "+ props.scenarioData)

  return (
  <div >
      <Nav />
      <div className={classes.header}>

        <div >
          <h1>Introduction Hub</h1>
          <b1>
            Access different parts of the scenario introduction from here:
           </b1>
        </div>
      </div>
      <div className={classes.buttonContainer} >
        <div>
            <Link to="/introduction-text">
            <Button
              className={classes.optionButton}
            >
              <Link to="/introduction-text" stlye ={{textDecoration: 'none', color: '#C0C0C0'}}>
              Introduction Text 
              </Link>
            </Button>{' '}
            </Link>
        </div>
        <div>
          <Link to="task-assignment">
            <Button
              className={classes.optionButton}
            >
           
              Project Task Assignment
            
            </Button>
            </Link>
        </div>
      </div>
      <div className={classes.buttonContainer} >
        <div>
          <Link to="/user-agreement">
            <Button
              className={classes.optionButton}
            >
              <Link to="/user-agreement">
              User Agreement
              </Link>
            </Button>{' '}
          </Link>
        </div>
        <div>
           <Link to="/continue-prompt" >
            <Button
              className={classes.optionButton}
            >
              <Link to="/continue-prompt" style = {{textDecoration: 'none' }}>
              Delay or Go Ahead prompt
              </Link>
            </Button>
            </Link>
        </div>
      </div>
    </div>

  );
}

export default IntroductionHub;
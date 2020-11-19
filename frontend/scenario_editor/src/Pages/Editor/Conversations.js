import React from 'react';
//import '../Components/Components.css'
import Nav from '../../Components/Nav'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Conversations = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(4),
        width: '100ch',
    },
  }));
  
    const classes = useStyles();
  
    return (
      
      <div> 
         <Nav/>
         <form className={classes.root} noValidate autoComplete="off">
         <h1>  Conversations </h1>
           </form>
           
  
            <div className={classes.root}>   
            <div>
            <Button  
            component={ Link } to="/matrix"
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'
            alignItems='right'
            style={{ 
              //marginTop: 10,
              //marginRight: 100,
              marginRight: 20
              //marginBottom: 100
            }}
            
            >
            Conversation Matrix
          </Button>
          </div>
            </div>
       
       </div>
      
    );
  };
  export default Conversations;

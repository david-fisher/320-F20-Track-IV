// ********************************************
// NOT UPDATED. 
// This was last updated by Tara.
// We will try to make this work with a ScenarioContext.js context file,
// after which we should have most of the files / file structures needed to work through everything :)
// ********************************************
import React from 'react';
import './Introduction.css';
import Nav from '../../Components/Nav'
// import React, { Component } from 'react';
//import './Home.css';
//import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// 10/13 TRY: commented out original Introduction page components. 
// feel free to revert back if it makes more sense

// function Introduction() {
//   return (
//     <div> 
//       <Nav/>
//       <h1>Introduction Page</h1>
//       <b1 className = "introduction-part">
//         Add/Edit Your Choice Below:
//       </b1>  
//     </div>
    
//   );
// }

// export default Introduction;

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const Introduction = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValue4InLocalStorage'
  );

  const onChange = event => setValue(event.target.value);

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
         <h1>  Introduction </h1>
         {/* <b1>  Scenario Title:</b1> */}
         
             <TextField 
              multiline
              fullWidth
              id="introduction" 
              label="Introduction" 
              variant="outlined" 
              placeholder='Enter introduction here'
              value={value}
              onChange={onChange}
              style={{ 
                marginTop: 50}}
              rows={20}
              margin="normal"
                  InputLabelProps={{
                    shrink: true }}
              />
           </form>
           
  
            <div className={classes.root}>   
            <Button  
            component={ Link } to="/player-responses"
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'
            style={{ 
              //display: 'right'
              //marginTop: 10,
              //marginRight: 100,
              marginLeft: 1100
              //marginBottom: 100
            }}
            
            >
            Submit
          </Button>
              {/* <Link to = "/user-agreement">
                <Button
                size = "custom-submit-button"
                variant="outline-secondary"
                value = "Submit"
                >
                  Submit
                </Button>{' '}
              </Link> */}
            </div>
  
  
         {/* <input 
         className="TRY-type"
         value={value} 
         type="text" 
         onChange={onChange}
         size = "element.value.length + 1"
        //  size="TRY-custom-size" */}
         {/* /> */}
         {/* <input value={value} type="text" onChange={onChange}/> */}
       
       </div>
      
    );
  };
  export default Introduction;

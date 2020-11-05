
import React from 'react';
import Nav from '../../Components/Nav'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const OpenResponse = () => {
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
         <h1>  Open Response Question </h1>
         {/* <b1>  Scenario Title:</b1> */}
         
             <TextField 
              multiline
              fullWidth
              id="openResponse" 
              label="Open Response" 
              variant="outlined" 
              placeholder='Enter open response question here.'
              value={value}
              onChange={onChange}
            //   style={{ 
            //     marginTop: 50}}
              rows={10}
              margin="normal"
                  InputLabelProps={{
                    shrink: true }}
              />
           
           
           <Button
            variant="outlined"
            style={{ 
            backgroundColor:'#881c1c',
            color: 'white'
            //margin: 100
            }}
            
            onClick={e => this.onSubmit(e)}>
            Add Question
          </Button>

            <div className={classes.root}>   
            <Button  
            component={ Link } to="/player-responses"
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'
            style={{
                marginLeft: 1000,
                marginTop: 100
            }}
            >
            Submit
          </Button>
          
            </div>
            </form>
       </div>
      
    );
  };
  export default OpenResponse;

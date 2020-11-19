import React from 'react';
//import './Introduction.css';
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

const UserAgreement = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'RS_SCENARIO__user_agreement'
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
         <h1>  User Agreement </h1>
         {/* <b1>  Scenario Title:</b1> */}

             <TextField
              multiline
              fullWidth
              id="userAgreement"
              label="User Agreement"
              variant="outlined"
              placeholder='Enter user agreement here'
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
            <div>
{/* // <<<<<<< rebel-scrum-introduction-expanded */}
            <Button  
            component={ Link } to="/introduction-hub"
            variant="contained" 
            color="primary" 
// =======
//             <Button
//             component={ Link } to="/introduction"
//             variant="contained"
//             color="primary"
// >>>>>>> rs-bb-int-scenarios
            href="#contained-buttons"
            size='medium'
            alignItems='right'
            style={{
              //marginTop: 10,
              //marginRight: 100,
              marginLeft: 1100,
              //marginBottom: 100
            }}

            >
            Submit
          </Button>

            </div>

       </div>
       </div>

    );
  };
  export default UserAgreement;

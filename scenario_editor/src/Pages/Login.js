import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { universalPost, universalFetch, universalDelete } from '../Components/Calls'
import { connect } from 'react-redux';

// POST /api/v1/auth/login/callback
// The HTTP header is Authorization: bearer [token]
// Any endpoint that needs authentication needs this header

function Login() {
  return (
    <div>
      {''}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  misc_text: {
    color: 'black'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// email: instructor1@umass.edu
// pass: GoUMass!

// function sendLogInToServer(username, password) {

//   const [fetchIntroductionResponse, setFetchScenarioResponse] = useState({
//     loading: false,
//     error: null,
//     data: null
//   })

//   useEffect(() => {
//     universalPost(
//       setFetchScenarioResponse,
//       `/api/v1/auth/login/callback`,
//       {
//         "username": "",
//         "password": "GoUMass!"
//       },
//       (resp) => { console.log(resp) },
//       (err) => { console.log(err) },
//       { headers: { "accept": "application/json" } }
//     )
//     return () => {

//     }
//   }, [])

// }

function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();

  const [email, setEmail] = useState()
  const [pass, setPassword] = useState()

  function handleEmailChange(emailText) {
    setEmail(emailText.target.value);
    console.log(email);
  }

  function handlePasswordChange(passText) {
    setPassword(passText.target.value);
    console.log(pass);
  }


  function sendLogInToServer(event, data, history) {
    event.preventDefault();
    // POST
    data.email = 'instructor1@umass.edu';
    data.password = 'GoUMass!';
    console.log(event)
    axios.post(`http://75877d2fa0a2.ngrok.io/api/v1/auth/login/callback`, data, {
      "headers": {
        Accept: 'application/json'
      }
    }).then(res => {
      let token = res.data.token;
      props.dispatch({
        type: 'ADD_TOKEN',
        payload: { "token": token }
      });
      history.push({
        pathname: "/home",
        state: {
          token
        }
      });
    });
    history.push({
      pathname: "/home"
    });
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
          </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => { sendLogInToServer(event, { "email": email, "password": pass }, history) }}>
          {/* <form className={classes.form} noValidate onClick={history.push({
          pathname: "/home"
        })}> */}
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // inputRef={node => this.state.emailField = node}
            onChange={handleEmailChange}
          />
          <TextField
            type='password'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // inputRef={node => this.state.passwordField = node}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
            </Button>
        </form>
      </div>
      <Box mt={8}>
        <Login />
      </Box>
    </Container >
  );
}

const mapStateToProps = state => {
  // console.log("STATE IN INTRO MAP TO PROPS: " + state.id)
  // return { scenarios: state.scenarios, token: state.token }
  const { items } = state
  // console.log("STATE IN mapStateToProps: " + JSON.stringify(state))
  return { items: state.scenarioData }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';


// POST /api/v1/auth/login/callback
// The HTTP header is Authentication: bearer [token]
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

function sendLogInToServer(event, history){
  event.preventDefault();
  axios.get(`/api/v1/auth/login`).then(res => {
    let token = res.data.token;
    history.push({
      pathname: "/home",
      state: {
        token
      }
    });
  });
  // history.push({
  //   pathname: "/home"
  // });
}

export default function SignIn() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
          </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => {sendLogInToServer(event, history)}}>
          <TextField
            //type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
    </Container>
  );
}

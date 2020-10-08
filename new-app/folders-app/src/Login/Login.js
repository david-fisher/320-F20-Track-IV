import React from 'react';
import './Login.css';
import Nav from '../Components/Nav'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
    <div className="Login-header">
        <header>
            <h1>
                Ethics-Simulator
            </h1>
        </header>
    </div>
    <div className="Login-text">
        <header>
            <h2>
                Login
            </h2>
            <h5>
                Please input your username and password:
            </h5>
        </header>
    </div>
    <div class="Login-Form">
        <form>
            <label>
                Username: 
                <input type="text" name="name" />
                Password: 
                <input type="text" name="username" />
            </label>
            {/* <input class="Submit-Button" type="submit" value="Submit" /> */}
        </form>
    </div>
    <div class="Login-Button">
      <Link to = "/">
        <Button lg block
            variant="outline-secondary"
            // This isn't working right now. Need to figure out how to route from one page to another, 
            // possibly using the routing option or href like below.
        >
            Login
        </Button>{' '}
      </Link>
    </div>

    </div>
  );
}

export default Login;
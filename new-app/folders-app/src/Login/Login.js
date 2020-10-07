import React from 'react';
import './Login.css';
import Nav from '../Components/Nav'

function Login() {
  return (
    <div> 
      <Nav/>
        <div> <h1>Login Page</h1> </div>
        <div> <label>Enter some text into this box... </label>  </div>
        <div> 
            <textarea>
             there's some text here...
            </textarea>
        </div>
    </div>
  );
}

export default Login;
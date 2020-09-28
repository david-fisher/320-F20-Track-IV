import React from 'react';
import axios from 'axios';

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: undefined, password: undefined }
    this.submitForm = this.submitForm.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changeEmail(e){
    this.setState({email: e.target.value})
  }
  changePassword(e){
    this.setState({password: e.target.value})
  }
  submitForm(e){
    e.preventDefault();
    // alert("foo");
    // alert(this.state.password)
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res=>console.log(res.data));
  }
  render() {
    return <div className="login-container">
              <div className="logo-wrapper">
                <div className="logo-text">B</div>
              </div>
              <div className="login-header">Please sign in</div>
              <form className="login-form" onSubmit={this.submitForm}>
                <div class="login-form-group">
                  <input type="email" id="login-email" placeholder="Email address" onChange={this.changeEmail}/>
                </div>
                <div class="login-form-group">
                  <input type="password" id="login-password" placeholder="Password" onChange={this.changePassword}/>
                </div>
                <div class="login-form-group rememberMe">
                  <input type="checkbox" id="rememberMe" placeholder="Remember Me" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
              </form>
              <p className="copyright-footer">© 2020-2021</p>
           </div>
  }
}

export default LogIn;

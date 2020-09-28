import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(){
    alert(JSON.stringify(this.state));
    this.props.signUp();
  }
  handleChange(type, event){
    this.setState({[type]: event.target.value});
  }
  render() {
    return <div className="signup-container">
              <div className="logo-wrapper">
                <div className="logo-text">B</div>
              </div>
              <div className="signup-header">Create Account</div>
              <small>Get started with your account</small>
              <form className="signup-form" onSubmit={this.submitForm}>
                <div className="signup-form-group">
                  <label htmlFor="signup-name-first">First Name *</label>
                  <input type="name" id="signup-name-first" placeholder="John" onChange={(e) => this.handleChange("fname", e)}/>
                </div>
                <div className="signup-form-group">
                  <label htmlFor="signup-name-last">Last Name *</label>
                  <input type="name" id="signup-name-last" placeholder="Doe" onChange={(e) => this.handleChange("lname", e)}/>
                </div>
                <div className="signup-form-group">
                  <label htmlFor="signup-email">Email Address *</label>
                  <input type="email" id="signup-email" placeholder="jdoe@helloworld.com" onChange={(e) => this.handleChange("email", e)}/>
                </div>
                <div className="signup-form-group">
                  <label htmlFor="signup-pass">Password *</label>
                  <input type="password" id="signup-pass" onChange={(e) => this.handleChange("password", e)}/>
                </div>
                <div className="signup-form-group">
                  <label htmlFor="signup-confirm-pass">Confirm Password *</label>
                  <input type="password" id="signup-confirm-pass" onChange={(e) => this.handleChange("confirmPassword", e)}/>
                </div>
                <div className="signup-form-group">
                  <label htmlFor="signup-course-code">Course Code</label>
                  <span>Optional</span>
                  <input type="text" id="signup-course-code" placeholder="6A42BZ" onChange={(e) => this.handleChange("courseCode", e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
              <p className="copyright-footer">© 2020-2021</p>
           </div>
  }
}

export default SignUp;

import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { signedUp: false };
    this.signUp = this.signUp.bind(this);
  }
  signUp(){
    this.setState({ signedUp: true })
  }
  render(){
    return this.state.signedUp
            ? <LogIn />
            : <SignUp signUp={this.signUp}/>
  }
}

export default Main;

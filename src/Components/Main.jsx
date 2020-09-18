import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { signedUp: true }
  }
  render(){
    return this.state.signedUp
            ? <LogIn />
            : <SignUp />
  }
}

export default Main;

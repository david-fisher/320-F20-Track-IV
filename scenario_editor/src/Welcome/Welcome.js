import React from 'react';
import './Welcome.css';
import Nav from '../Components/Nav'

//Maybe we could use this page in order to test out new components?
function Welcome() {
  return (
    <div>
      <Nav/> 
      <h1>Welcome</h1>
      <p>
        Currently these pages are a work in progress. Use the Navigation bar in order to 
        switch pages!
      </p>
    </div>
  );
}

export default Welcome;

import React from 'react';
import './Introduction.css';
import Nav from '../Components/Nav'

function Introduction() {
  return (
    <div> 
      <Nav/>
      <h1>Introduction Page</h1>
      <b1 className = "introduction-part">
        This is a big ol textbox that is adjusted using app.css. It is quite helpful and you can write a lot of text and adjust all of the stuff you need.
      </b1>  
    </div>
    
  );
}

export default Introduction;

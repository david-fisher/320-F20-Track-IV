import React from 'react';
import './Introduction.css';
import Nav from '../Components/Nav'

function Introduction() {
  return (
    <div> 
      <Nav/>
      <h1>Introduction Page</h1>
      <b1 className = "introduction-part">
        Add/Edit Your Choice Below:
      </b1>  
    </div>
    
  );
}

export default Introduction;

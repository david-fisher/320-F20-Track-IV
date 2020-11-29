// ********************************************
// THIS WILL NO LONGER BE USED. SIMPLY HERE FOR REFERENCE 
// ********************************************
import React from 'react';
// import './Nav.css';
import {Link} from 'react-router-dom';
import HomeIcon from "../Images/home-icon.png"

//The navigation bar component seen in every page. Could shift the list to the left, maybe?

// 10/13 TRY: 
// linked HomeIcon to Home page
// adjusted navbar distribution -- did it in the lazy way


function Nav() {
  return (
    <nav>
        <h3> 
          <Link to= "/home">
            <img src={HomeIcon} alt="Return to home page"/>
          </Link>  
        </h3>

        <u1 className = "nav-links">
            <Link to= "/home">
              <li>Home</li>
            </Link>
            <Link to= "/introduction-hub">
              <li>Introduction</li>
            </Link>
            <Link to= "/reflections" >
              <li>Reflections</li>
            </Link>
            <Link to= "/conversations">
              <li>Conversations </li>
            </Link>
            <Link to= "/consequences">
              <li>Consequences </li>
            </Link>
            <Link to= "/dashboard">
              <li>Dashboard</li>
            </Link>
            
        </u1>
    </nav>
  );
}

export default Nav;

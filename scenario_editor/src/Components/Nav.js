
import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import HomeIcon from "../Images/home-icon.png"



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
              <li>Introduction Hub</li>
            </Link>
            <Link to= "/reflections" >
              <li>Reflections</li>
            </Link>
            <Link to= "/stakeholders">
              <li>Stakeholders </li>
            </Link>
            <Link to= "/conclusion">
              <li>Conclusion </li>
            </Link>
            <Link to= "/dashboard">
              <li>Dashboard</li>
            </Link>
            
        </u1>
    </nav>
  );
}

export default Nav;

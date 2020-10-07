import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import HomeIcon from "./Images/home-icon.png"

function Nav() {
  return (
    <nav>
        <h3> 
          <Link to= "/welcome">
            <img src={HomeIcon} alt="Return to home page"/>
          </Link>  
        </h3>

        <u1 className = "nav-links">
            <Link to= "/home">
              <li>Home</li>
            </Link>
            <Link to= "/introduction">
              <li>Introduction</li>
            </Link>
            <Link to= "/player-responses" >
              <li>Player Responses</li>
            </Link>
            <Link to= "/conversations">
              <li>Conversations </li>
            </Link>
            <Link to= "/conclusions">
              <li>Conclusions </li>
            </Link>
            <Link to= "/build">
              <li>Build</li>
            </Link>
            
        </u1>
    </nav>
  );
}

export default Nav;

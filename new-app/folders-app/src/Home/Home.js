import React from 'react';
import './Home.css';
import Nav from '../Components/Nav'


function Home() {
  return (
    <div> 
      <Nav/>
      <h1>Home Page</h1>
      <textarea>
        row = 5
        col = 5
      </textarea>
    </div>
  );
}

export default Home;

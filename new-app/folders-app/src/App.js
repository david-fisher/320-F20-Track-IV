import React from 'react';
import './App.css';
import Login from "./Login/Login"
import Welcome from './Welcome/Welcome';
//import Nav from './Components/Nav';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Conversations from './Components/Conversations';
import PlayerResponses from './PlayerResponses/PlayerResponses';
import Build from './Build/Build';
import Conclusions from './Components/Conclusions';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login" component = {Login} />
          <Route path = "/" exact component = {Welcome} />
          <Route path = "/home" component = {Home} />
          <Route path = "/introduction" component = {Introduction} />
          <Route path = "/player-responses" component = {PlayerResponses} />
          <Route path = "/conversations" component = {Conversations} />
          <Route path = "/conclusions" component = {Conclusions} />
          <Route path = "/build" component = {Build} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Login from "./Pages/Login"
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Conversations from './Pages/Conversations';
import PlayerResponses from './Pages/PlayerResponses';
import Build from './Pages/Build';
import Conclusions from './Pages/Conclusions';
import New_Scenario from './Pages/New_Scenario';
import Dashboard from './Pages/Dashboard'
import Nav from '../Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav data={navbarDashboard}>


        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/player-responses" component={PlayerResponses} />
          <Route path="/conversations" component={Conversations} />
          <Route path="/conclusions" component={Conclusions} />
          <Route path="/build" component={Build} />
          <Route path="/new_scenario" component={New_Scenario} />
        </Switch>
      </Nav >
    </Router>

  );
}


export default App;

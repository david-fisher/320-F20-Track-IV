import React from 'react';
import './App.css';
import Login from "./Pages/Login"
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Conversations from './Pages/Conversations';
import PlayerResponses from './Pages/PlayerResponses';
import Build from './Pages/Build';
import Conclusions from './Pages/Conclusions';
import New_Scenario from './Pages/New_Scenario';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Currently contains links for everything. The welcome page will have to link to the UMass SSO
//As it stands the login page is a placeholder, which is fine.
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login" component = {Login} />
          <Route path = "/" exact component = {Login} />
          <Route path = "/home" component = {Home} />
          <Route path = "/introduction" component = {Introduction} />
          <Route path = "/player-responses" component = {PlayerResponses} />
          <Route path = "/conversations" component = {Conversations} />
          <Route path = "/conclusions" component = {Conclusions} />
          <Route path = "/build" component = {Build} />
          <Route path = "/new_scenario" component = {New_Scenario}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

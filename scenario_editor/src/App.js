import React from 'react';
import './App.css';
import Login from "./Login/Login"
import Nav from './Components/Nav';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Conversations from './Components/Conversations';
import PlayerResponses from './PlayerResponses/PlayerResponses';
import Build from './Build/Build';
import Conclusions from './Components/Conclusions';
import New_Scenario from './NewScenario/new_scenario';
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

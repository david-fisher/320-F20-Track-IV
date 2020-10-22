import React, { Component } from 'react';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//Currently contains links for everything. The welcome page will have to link to the UMass SSO
//As it stands the login page is a placeholder, which is fine.

//In sort-of reply to above comment: the login page can now be used as the page to link to UMass SSO.
//Welcome seemed redundant. If it makes sense with the SSO, we can remove login and redirect from a '/' page

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/player-responses" component={PlayerResponses} />
            <Route path="/conversations" component={Conversations} />
            <Route path="/conclusions" component={Conclusions} />
            <Route path="/build" component={Build} />
            <Route path="/new_scenario" component={New_Scenario} />
          </Switch>
        </div>
      </Router>
    );
  }

}

//WORKING CODE BELOW (BEFORE ADDING CONTEXT CODE):

// function App() {
//   return (
//       <Router>
//         <div className="App">
//           <Switch>
//             <Route path="/login" component={Login} />
//             <Route path="/" exact component={Login} />
//             <Route path="/home" component={Home} />
//             <Route path="/introduction" component={Introduction} />
//             <Route path="/player-responses" component={PlayerResponses} />
//             <Route path="/conversations" component={Conversations} />
//             <Route path="/conclusions" component={Conclusions} />
//             <Route path="/build" component={Build} />
//             <Route path="/new_scenario" component={New_Scenario} />
//           </Switch>
//         </div>
//       </Router>
//   );
// }

export default App;

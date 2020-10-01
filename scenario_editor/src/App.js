import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

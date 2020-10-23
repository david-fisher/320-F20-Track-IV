import React, { Component } from 'react';
import './App.css';
import Login from "./Pages/Login"
import Home from './Pages/Home';
import Editor from './Pages/Editor';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Switch>
        {/* This is a default load-in into the application. */}
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Login} />

        {/* The DASHBOARD with be the location of the Drafts, Open, and Closed scenarios for this user */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/home" component={Home} />

        {/* This routes to the EDITOR portion of our application. */}
        <Route path="/editor/:id" render={(props) => (
          <Editor {...props} />
        )} />

      </Switch>

    </Router>

  );
}


export default App;

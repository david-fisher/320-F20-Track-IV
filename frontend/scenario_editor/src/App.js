import React, { Component } from 'react';
import './App.css';
import Login from "./Pages/Login"
import Home from './Pages/Home';
import Editor from './Pages/Editor';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import NewScenario from './Pages/Editor/NewScenario';
import Introduction from './Pages/Editor/Introduction';
import PlayerResponses from './Pages/Editor/PlayerResponses';
import UserAgreement from './Pages/Editor/UserAgreement';
import Conversations from './Pages/Editor/Conversations';
import Matrix from './Pages/Editor/Matrix';
import MultipleChoice from './Pages/Editor/MultipleChoice';
import OpenResponse from './Pages/Editor/OpenResponse';

import { Provider } from 'react-redux'
import store from './Store'

// TODO: 
// - Create a Scenario context that can be used to store all of a scenarios data. Will discuss on Sunday best
//   way to approach this. This will use "useState", "setState", "useContext", and other functions.
// - Phase out .css files. Might cause some aesthetic issues at first. Needs to be converted to MaterialUI
// - Style the Dashboard.js page a lot better, kind of ugly right now
// - Route to the other pages, but this will be easy and just requires the pages to be structured properly 
//   so data can be transferred.
// - Stop using bootstrap, if you have questions on it just ask or look up how to use MaterialUI <3
// - Figure out how to do a conversation matrix or find a workaround (finger's crossed)

// TIPS:
// - At the top of some of the pages I made a note if it will be used in the future AS IS or needs to be changed
// - The best structures to follow (I think) are currently that of Dashboard.js and ScenarioCard.js, as it uses 
//   most of what is needed, except for saving state.
// - If you want to work on other pages but they are not being routed to, just change the routes below to route 
//   to the page you want to work on :)  I think that would work

// This is how you customize the MaterialUI standard 
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#881c1c" //The red color that UMass uses
    },
    secondary: {
      main: "#881c1c"
    }
  },
});

window.store = store;

export default function App() {
  return (
  // The ThemeProvider is wrapped around our Router below, and thus will be able to affect everything between
  // the ThemeProvider's tags
  <ThemeProvider theme={theme}>
    <Provider store={store}>
    <Router>
      <Route path="/" to exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/new-scenario" component={NewScenario} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/player-responses" component={PlayerResponses} />
      <Route path="/user-agreement" component={UserAgreement} />
      <Route path="/conversations" component={Conversations} />
      <Route path="/matrix" component={Matrix} />
      <Route path="/multiple-choice" component={MultipleChoice} />
      <Route path="/open-response" component={OpenResponse} />
      {/* Dashboard is where the Editor can see Draft, Open, and Closed Scenarios */}
      <Route path="/dashboard" component={Dashboard} />
          {/* This Route will be how we are able to edit individual scenarios in the future
      Have not gotten to implementing the functionality fully yet, but, in essence,
      when the user clicks on a scenario to "Edit", the user will be routed to "/editor/:id", where :id will
      be the ID of the scenario that was clicked. 
      */}
          <Route path="/editor/:id" render={(props) => (
            <Editor {...props} />
          )} />

        </Router>
      </Provider>
    </ThemeProvider>
  );
}


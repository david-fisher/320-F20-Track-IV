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
import IntroductionHub from './Pages/Editor/IntroductionHub';
import PlayerResponses from './Pages/Editor/PlayerResponses';
import Reflections from './Pages/Editor/Reflections';
import MiddleReflection from './Pages/Editor/MiddleReflection';
import FinalReflection from './Pages/Editor/FinalReflection';
import UserAgreement from './Pages/Editor/UserAgreement';
import Conversations from './Pages/Editor/Conversations';
import Matrix from './Pages/Editor/Matrix';
import MultipleChoice from './Pages/Editor/MultipleChoice';
import OpenResponse from './Pages/Editor/OpenResponse';
import Consequences from './Pages/Editor/Consequences';

import { Provider } from 'react-redux'
import store from './Store'

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
          <Route path="/introduction-hub" component={IntroductionHub} />
          <Route path="/introduction-text" component={Introduction} />
          <Route path="/player-responses" component={PlayerResponses} />
          <Route path="/reflections" component={Reflections} />
          <Route path="/middle-reflection" component={MiddleReflection} />
          <Route path="/final-reflection" component={FinalReflection} />
          <Route path="/user-agreement" component={UserAgreement} />
          <Route path="/conversations" component={Conversations} />
          <Route path="/matrix" component={Matrix} />
          <Route path="/multiple-choice" component={MultipleChoice} />
          <Route path="/open-response" component={OpenResponse} />
          <Route path="/consequences" component={Consequences} />

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


import React, { useState, createContext } from 'react';

// If we want to access our data (in the Scenario Provider), we can import ScenarioContext in our 
// other components to have access to the data in the Provider.
export default React.createContext({
    scenario: 
      { id: 0, title: 'title', description: 'desc' }

    
    // addScenario: scenario => {},
    // removeScenario: scenarioID => {}
  });



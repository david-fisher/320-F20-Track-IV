import React from 'react';

export default React.createContext({
    // scenario: [
    //     {scenario_id: 0},
    //     {scenario_title: ""},
    //     {scenario_desc: ""},
    //     {introduction: ""}    
    // ],

    scenario: {
        scenario_id: 0,
        scenario_title: "",
        scenario_desc: "",
        introduction: ""    
    },

    updateTextInScenario: (textSubmit) => {}
});
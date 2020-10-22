exports.users = require('./users');


//hardcoded json data
let simulations = [{
    simulation_id: "21378yoe",
    course_id: "6ACB432",
    scenarios: [],
    status: 0,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper."
  },
  {
    simulation_id: "jliasdhh",
    course_id: "6ACB432",
    scenarios: [],
    status: 1,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper."
  },
  {
    simulation_id: "9821yehu",
    course_id: "8NMG667",
    scenarios: [],
    status: 1,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper."
  },
  {
    simulation_id: "sahdluw1",
    course_id: "6ACB432",
    scenarios: [],
    status: 2,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper."
  },
]

//In the database, we need an access point for retrieving open simulations
exports.getOpenSimulations = function (instructor_token) {
  return simulations.filter(item => item.status == 2);
}

exports.getClosedSimulations = function (instructor_token) {
  return simulations.filter(item => item.status == 0);
}

exports.getDraftedSimulations = function (instructor_token) {
  return simulations.filter(item => item.status == 1);
}

exports.getSimulationIntroductionByID = function (token, simulation_id) {
  if (simulation = simulations.find(ele => ele.simulation_id === simulation_id)){
    console.log(JSON.stringify(simulation));
    return simulation.introduction;
  }else{
    return 404;
  }
}

exports.setSimulationIntroductionByID = function(token, simulation_id, summary) {
  if (simulation = simulations.find(ele => ele.simulation_id === simulation_id)){
    simulation.introduction = summary;
    return 202
  }else{
    return 404;
  }
}

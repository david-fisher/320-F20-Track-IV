exports.users = require('./users');


//hardcoded json data
let simulations = [{
    simulation_id: "21378yoe7yduihsal9218",
    course_id: "6ACB432",
    scenarios: [],
    status: 0
  },
  {
    simulation_id: "jliasdhhsiadyo87wuihldkaj",
    course_id: "6ACB432",
    scenarios: [],
    status: 1
  },
  {
    simulation_id: "9821yehudkwjhadskljd",
    course_id: "8NMG667",
    scenarios: [],
    status: 1
  },
  {
    simulation_id: "sahdluw1o827ydhuwdjasd",
    course_id: "6ACB432",
    scenarios: [],
    status: 2
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


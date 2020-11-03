exports.users = require("./users");

//hardcoded json data
let simulations = [
  {
    simulation_id: "21378yoe",
    course_id: "6ACB432",
    scenarios: [],
    status: 0,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
  {
    simulation_id: "jliasdhh",
    course_id: "6ACB432",
    scenarios: [],
    status: 1,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
  {
    simulation_id: "9821yehu",
    course_id: "8NMG667",
    scenarios: [],
    status: 1,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
  {
    simulation_id: "sahdluw1",
    course_id: "6ACB432",
    scenarios: [],
    status: 2,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
];

//In the database, we need an access point for retrieving open simulations
exports.getOpenSimulations = function (instructor_token) {
  return simulations.filter((item) => item.status == 2);
};

exports.getClosedSimulations = function (instructor_token) {
  return simulations.filter((item) => item.status == 0);
};

exports.getDraftedSimulations = function (instructor_token) {
  return simulations.filter((item) => item.status == 1);
};

exports.getSimulationIntroductionByID = function (token, simulation_id) {
  const simulation = simulations.find((ele) => ele.simulation_id === simulation_id);
  if (simulation) {
    return simulation.introduction;
  } else {
    return 404;
  }
};

exports.setSimulationIntroductionByID = function (token, simulation_id, summary) {
  const simulation = simulations.find((ele) => ele.simulation_id === simulation_id);
  if (simulation) {
    simulation.introduction = summary;
    return 202;
  } else {
    return 404;
  }
};

exports.getClosedSimulations = function (instructor_token) {
  /**
   * http://localhost:3000/api/v1/dashboard
   */
  return [];
};

exports.getDraftedSimulations = function (instructor_token) {
  /**
   * http://localhost:3000/api/v1/dashboard
   */
  return [];
};

exports.getSimulationSummary = function (instructor_token) {
  /**
   * /simulation/:simulation_id/introduction
   * /simulation/:simulation_id/initial-reflection
   * /simulation/:simulation_id/initial-action
   */
  return "";
};

exports.getIntialReflectionQuestions = function (token) {
  // returns an array of questions
  /**
   * /simulation/:simulation_id/initial-reflection
   */
  return [];
};

// have to work on this
exports.getStudentName = function (token) {
  /**
   * /simulation/:simulation_id/initial-reflection/answers
   * /simulation/:simulation_id/initial-action/answers
   * /simulation/:simulation_id/stakeholders/answers
   */
  return "";
};

// have to work on this
exports.getStudentUID = function (token) {
  /**
   * /simulation/:simulation_id/initial-reflection/answers
   * /simulation/:simulation_id/initial-action/answers
   * /simulation/:simulation_id/stakeholders/answers
   */
  return 0;
};

exports.getStudentResponses = function (token) {
  // an array of json with keys 'question', 'answer'.
  /**
   * /simulation/:simulation_id/initial-reflection/answers
   * /simulation/:simulation_id/initial-action/answers
   */
  return [];
};

exports.getQuestion = function (token) {
  return "";
};

exports.getAnswer = function (token) {
  return "";
};

exports.getIntialActionQuestions = function (instructor_token) {
  // an array of json with keys 'question', 'choices'.
  /**
   * /simulation/:simulation_id/initial-action
   */
  return [];
};

exports.getChoices = function (token) {
  // return : array of string.
  /**
   * /simulation/:simulation_id/initial-action
   */
  return [];
};

exports.getSimulationExplanation = function (token) {
  /**
    /simulation/:simulation_id/additional-reflection
    /simulation/:simulation_id/final-decision
  */
  return "";
};

exports.getStudentExplanation = function (token) {
  /**
   /simulation/:simulation_id/additional-reflection
   /simulation/:simulation_id/final-decision
  */
  return "";
};

exports.getStakeHolderSummary = function (token) {
  /**
   * /simulation/:simulation_id/stakeholders/description
   */
  return "";
};

exports.getStakeHolder_ids = function (token) {
  // an list of ids
  /**
  
  /simulation/:simulation_id/stakeholders/answers
  */
  return [];
};

// http://localhost:3000/api/v1/simulation/:simulation_id/stakeholders/:stakeholder_id

exports.getStakeHolderName = function (token) {
  /**
   * /simulation/:simulation_id/stakeholders/:stakeholder_id
   */
  return "";
};

// http://localhost:3000/api/v1/simulation/:simulation_id/stakeholders/:stakeholder_id

exports.getStakeHolderDescription = function (token) {
  /**
   * /simulation/:simulation_id/stakeholders/:stakeholder_id
   */
  return "";
};

// http://localhost:3000/api/v1/simulation/:simulation_id/stakeholders/:stakeholder_id

exports.getStakeHolderConversation_text = function (token) {
  /**
   * /simulation/:simulation_id/stakeholders/:stakeholder_id
   */
  return "";
};

exports.getSimulationsConversants = function (token) {
  // return : array of string
  /**
   * /simulation/:simulation_id/issue-coverage-matrix
   */
  return [];
};

exports.getSimulationIssues = function (token) {
  // return : array of string (issues)
  /**
   * /simulation/:simulation_id/issue-coverage-matrix
   */
  return [];
};

exports.getSimulationValues = function (token) {
  // return : 2-d array, with each inner array corresponding to each issues and conversants
  /**
   * /simulation/:simulation_id/issue-coverage-matrix
   */
  return [];
};

// http://localhost:3000/api/v1/simulation/:simulation_id/students

exports.getStudents_SimulationInfo = function (token) {
  /**
   * /simulation/:simulation_id/students
   */
  return [];
};

// scenarios

exports.getScenarioSummary = function (token) {
  /**
   * /simulation/:simulation_id/scenarios/:scenario_id/summary
   */
  return "";
};

exports.getScenarioID = function (token) {
  // return a list of scenario id's
  /**
   * /simulation/:simulation_id/scenarios
   */
  return [];
};

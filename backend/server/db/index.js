const db = require("../models");
const scenario = require("./scenario");
const pages = require("./pages");
const partof = require("./partof");
const prompt = require("./prompt");
const conversationTask = require("./conversation_task");
const stakeholders = require("./stakeholders");
const issues = require("./issues");
const score = require("./score");
const mcq = require("./mcq");
const question = require("./question");
const mcqOption = require("./mcq_option");
const users = require("./users");
const courses = require("./courses");
const instructs = require("./instructs");
const enrolled = require("./enrolled");
const submissions = require("./submissions");
const response = require("./response");

exports = {
  ...scenario,
  ...pages,
  ...partof,
  ...prompt,
  ...conversationTask,
  ...stakeholders,
  ...issues,
  ...score,
  ...mcq,
  ...question,
  ...mcqOption,
  ...users,
  ...courses,
  ...instructs,
  ...enrolled,
  ...submissions,
  ...response,
};

exports.getScenarioIntroduction = (scenario_id) => {
  let introduction = "";
  // db
  //   .query('SELECT * FROM scenario WHERE id=$1', [scenario_id])
  //   .then(res => {introduction = res.rows[0].introduction;})
  //   .catch(err => console.error('Error executing query', err.stack));
  if (!introduction) {
    return 404;
  } else {
    return introduction;
  }
};

// exports.getScenarioIntroductionByID = function (token, scenario_id) {
//   const scenario = scenarios.find((ele) => ele.scenario_id === scenario_id);
//   if (scenario) {
//     return scenario.introduction;
//   } else {
//     return 404;
//   }
// };

// exports.setScenarioIntroductionByID = function (token, scenario_id, summary) {
//   const scenario = scenarios.find((ele) => ele.scenario_id === scenario_id);
//   if (scenario) {
//     scenario.introduction = summary;
//     return 202;
//   } else {
//     return 404;
//   }
// };

exports.getScenarioSummary = function (scenario_id) {
  /**
   * /scenario/:scenario_id/introduction
   * /scenario/:scenario_id/initial-reflection
   * /scenario/:scenario_id/initial-action
   */
  return "";
};

exports.getIntialReflectionQuestions = function (token) {
  // returns an array of questions
  /**
   * /scenario/:scenario_id/initial-reflection
   */
  return [];
};

// have to work on this
exports.getStudentName = function (token) {
  /**
   * /scenario/:scenario_id/initial-reflection/answers
   * /scenario/:scenario_id/initial-action/answers
   * /scenario/:scenario_id/stakeholders/answers
   */
  return "";
};

// have to work on this
exports.getStudentUID = function (token) {
  /**
   * /scenario/:scenario_id/initial-reflection/answers
   * /scenario/:scenario_id/initial-action/answers
   * /scenario/:scenario_id/stakeholders/answers
   */
  return 0;
};

exports.getStudentResponses = function (token) {
  // an array of json with keys 'question', 'answer'.
  /**
   * /scenario/:scenario_id/initial-reflection/answers
   * /scenario/:scenario_id/initial-action/answers
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
   * /scenario/:scenario_id/initial-action
   */
  return [];
};

exports.getChoices = function (token) {
  // return : array of string.
  /**
   * /scenario/:scenario_id/initial-action
   */
  return [];
};

exports.getscenarioExplanation = function (token) {
  /**
    /scenario/:scenario_id/additional-reflection
    /scenario/:scenario_id/final-decision
  */
  return "";
};

exports.getStudentExplanation = function (token) {
  /**
   /scenario/:scenario_id/additional-reflection
   /scenario/:scenario_id/final-decision
  */
  return "";
};

exports.getStakeHolderSummary = function (token) {
  /**
   * /scenario/:scenario_id/stakeholders/description
   */
  return "";
};

exports.getStakeHolder_ids = function (token) {
  // an list of ids
  /**

  /scenario/:scenario_id/stakeholders/answers
  */
  return [];
};

// http://localhost:3000/api/v1/scenario/:scenario_id/stakeholders/:stakeholder_id

exports.getStakeHolderName = function (token) {
  /**
   * /scenario/:scenario_id/stakeholders/:stakeholder_id
   */
  return "";
};

// http://localhost:3000/api/v1/scenario/:scenario_id/stakeholders/:stakeholder_id

exports.getStakeHolderDescription = function (token) {
  /**
   * /scenario/:scenario_id/stakeholders/:stakeholder_id
   */
  return "";
};

// http://localhost:3000/api/v1/scenario/:scenario_id/stakeholders/:stakeholder_id

exports.getStakeHolderConversation_text = function (token) {
  /**
   * /scenario/:scenario_id/stakeholders/:stakeholder_id
   */
  return "";
};

exports.getScenariosConversants = function (token) {
  // return : array of string
  /**
   * /scenario/:scenario_id/issue-coverage-matrix
   */
  return [];
};

exports.getScenarioIssues = function (token) {
  // return : array of string (issues)
  /**
   * /scenario/:scenario_id/issue-coverage-matrix
   */
  return [];
};

exports.getScenarioValues = function (token) {
  // return : 2-d array, with each inner array corresponding to each issues and conversants
  /**
   * /scenario/:scenario_id/issue-coverage-matrix
   */
  return [];
};

// http://localhost:3000/api/v1/scenario/:scenario_id/students

exports.getStudents_scenarioInfo = function (token) {
  /**
   * /scenario/:scenario_id/students
   */
  return [];
};

// scenarios

exports.getScenarioSummary = function (token) {
  /**
   * /scenario/:scenario_id/scenarios/:scenario_id/summary
   */
  return "";
};

exports.getScenarioID = function (token) {
  // return a list of scenario id's
  /**
   * /scenario/:scenario_id/scenarios
   */
  return [];
};

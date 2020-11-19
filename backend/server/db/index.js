const db = require("../models");

const INTROPAGE = 1
const TASKPAGE = 2
const INITIAL_REFLECTION = 3
const INIT_ACTION = 4
const INIT_ACTION_SUBSEQUENT = 5
const CONVERSATION = 6
const MIDDLE_REFLECTION = 7
const FINAL_ACTION = 8
const SUMMARY_PAGE = 9
const FEEDBACK_PAGE = 10
const FINAL_REFLECTION = 11
const CONCLUSIONPAGE = 12

// constants for page types
const TYPE_PLAIN = 'PLAIN'
const TYPE_PROMPT = 'PRMPT'
const TYPE_MCQ = 'MCQ'
const TYPE_CONV = 'CONV'

exports.users = require("./users");

//hardcoded json data
let scenarios = [
  {
    scenario_id: "21378yoe",
    designation: "6ACB432",
    name: [],
    simulation_status: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
    due_date: "2020-12-18 23:59:59",
    additional_data: ""
  },
  {
    scenario_id: "jliasdhh",
    course_id: "6ACB432",
    scenarios: [],
    status: 1,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
  {
    scenario_id: "9821yehu",
    course_id: "8NMG667",
    scenarios: [],
    status: 1,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
  {
    scenario_id: "sahdluw1",
    course_id: "6ACB432",
    scenarios: [],
    status: 2,
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum eros magna, id cursus odio finibus quis. Curabitur eu ullamcorper.",
  },
];

exports.scenarioExists = async function (scenarioID){
    //returns True if scenarioID exists
    try {
      let thisQuery = 'select scenario.id from scenario where scenario.id = $1'
      const { rows } = await db.query(thisQuery, [scenarioID]);
      return rows;
    }
    catch (error) {
      throw new Error(error);
    }

}

exports.scenarioPageExists = async function (order, type, scenarioID) {
  if(await exports.scenarioExists(scenarioID)){
    let thisQuery = 'select pages.id from pages, scenario where pages.scenario_id = $1 and pages.order = $2 and pages.type = $3'
    try {
      const { rows } = await db.query(thisQuery, [scenarioID, order, type]);
      return rows[0] ? rows[0].id : null;
    } catch (error) {
      throw new Error(error);
    }
  }else{
    return 404;
  }
}

exports.deleteScenario = async function (id) {

}

exports.createPage = async function (order, type, body_text, scenarioID){
    // returns pageID if exists, else creates new
    pageID = await exports.scenarioPageExists(order, type, scenarioID)
    // TODO: handle page already existing in a better way?
    console.log(pageID);
    if(pageID === null){

        let thisQuery = 'insert into pages values(DEFAULT, $1, $2, $3, $4)';
        try {
          const { rows } = await db.query(thisQuery, [order, type, body_text, scenarioID]);
        } catch (error) {
          throw new Error(error);
        }
        console.log("INSERTED");
        return exports.scenarioPageExists(order, type, scenarioID);
    }
    return pageID
}



exports.createIntroPage = async function (scenarioID, text) {
    if (await exports.scenarioExists(scenarioID)){
        // create page object - plain-page when no prompt linked
        pageID = await exports.createPage(INTROPAGE, TYPE_PLAIN, text, scenarioID)
        return 202;
    }
    else{
        // TODO return InvalidScenarioError
        return 404;
    }
}

exports.addScenarioToCourse = async function (scenarioID, courseID){
    // check course exists
    // check scenario exists

    let thisQuery = 'insert into partof values($1, $2)'
    try {
      const { rows } = await db.query(thisQuery, [courseID, scenarioID]);
    } catch (error) {
      throw new Error(error);
    }
}

exports.createScenario = async function (name, description) {
  let curDate = new Date()
  let due_date = `${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()} ${curDate.toLocaleTimeString('en-GB')}`;
  let status = 'DRAFT';
  let additional_data = '<additional_data>';
  const { rows2 } = await db.query("INSERT INTO SCENARIO VALUES (nextval('scenario_id_seq'::regclass), $1, $2, $3, $4, $5)", [name, due_date, description, status, additional_data]);
  const { rows } = await db.query("SELECT currval('scenario_id_seq')");
  // console.log(parseInt(rows[0].currval));
  return parseInt(rows[0].currval);
}
//In the database, we need an access point for retrieving open scenarios
exports.getOpenScenarios = async function (instructor_token) {
  // return scenarios.filter((item) => item.status == 2);
  const { rows } = await db.query("SELECT * FROM scenario WHERE status='PUBLISHED'");
  return rows;
};

exports.getClosedScenarios = async function (instructor_token) {
  const { rows } = await db.query("SELECT * FROM scenario WHERE status='CLOSED'");
  return rows;
};

exports.getDraftedScenarios = async function (instructor_token) {
  const { rows } = await db.query("SELECT * FROM scenario WHERE status='DRAFT'");
  // console.log(rows);
  return rows;
};

exports.getScenarioIntroduction = (scenario_id) => {
  let introduction = "";
  // db
  //   .query('SELECT * FROM scenario WHERE id=$1', [scenario_id])
  //   .then(res => {introduction = res.rows[0].introduction;})
  //   .catch(err => console.error('Error executing query', err.stack));
  if(!introduction){
    return 404;
  }else{
    return introduction;
  }
}

exports.getScenarioDescription = async (scenario_id) => {
  const { rows } = await db.query('SELECT * FROM scenario WHERE id=$1', [scenario_id])
  return rows[0].description;
}

exports.setScenarioDescription = async (scenario_id, description) => {
  const { rows } = await db.query('UPDATE scenario SET description=$1 WHERE id=$2', [description, scenario_id])
  return rows[0];
}

exports.getScenarioIntroductionByID = function (token, scenario_id) {
  const scenario = scenarios.find((ele) => ele.scenario_id === scenario_id);
  if (scenario) {
    return scenario.introduction;
  } else {
    return 404;
  }
};

exports.setScenarioIntroductionByID = function (token, scenario_id, summary) {
  const scenario = scenarios.find((ele) => ele.scenario_id === scenario_id);
  if (scenario) {
    scenario.introduction = summary;
    return 202;
  } else {
    return 404;
  }
};

exports.getscenarioSummary = function (instructor_token) {
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

exports.getscenariosConversants = function (token) {
  // return : array of string
  /**
   * /scenario/:scenario_id/issue-coverage-matrix
   */
  return [];
};

exports.getscenarioIssues = function (token) {
  // return : array of string (issues)
  /**
   * /scenario/:scenario_id/issue-coverage-matrix
   */
  return [];
};

exports.getscenarioValues = function (token) {
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

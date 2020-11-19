const db = require("../models");
const scenario = require("./scenario");

const INTROPAGE = 1;
const TASKPAGE = 2;
const INITIAL_REFLECTION = 3;
const INIT_ACTION = 4;
const INIT_ACTION_SUBSEQUENT = 5;
const CONVERSATION = 6;
const MIDDLE_REFLECTION = 7;
const FINAL_ACTION = 8;
const SUMMARY_PAGE = 9;
const FEEDBACK_PAGE = 10;
const FINAL_REFLECTION = 11;
const CONCLUSIONPAGE = 12;

// constants for page types
const TYPE_PLAIN = "PLAIN";
const TYPE_PROMPT = "PRMPT";
const TYPE_MCQ = "MCQ";
const TYPE_CONV = "CONV";

exports.getPage = async function (pageID) {
  const query = "SELECT * FROM pages WHERE id = $1";
  const { rows } = await db.query(query, [pageID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.getPageBy = async function ({ order = null, type = null, scenarioID = null }) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "order",
    value: order,
    pos: order ? argsPos++ : 0,
  });
  queryValues.push({
    name: "type",
    value: type,
    pos: type ? argsPos++ : 0,
  });
  queryValues.push({
    name: "scenario_id",
    value: scenarioID,
    pos: scenarioID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from pages WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await db.query(query, values);
  return rows;
};

exports.scenarioPageExists = async function (order, type, scenarioID) {
  if (await scenario.getScenario(scenarioID)) {
    let thisQuery =
      "select pages.id from pages, scenario where pages.scenario_id = $1 and pages.order = $2 and pages.type = $3";
    try {
      const { rows } = await db.query(thisQuery, [scenarioID, order, type]);
      return rows[0] ? rows[0].id : null;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return 404;
  }
};

exports.createPage = async function (order, type, body_text, scenarioID) {
  // returns ID of newly created page. If already exists, throw error.
  const pages = await exports.getPageBy({ order, type, scenarioID });

  if (pages.length > 1) {
    throw new Error("Page already exists.");
  }

  try {
    const query = "insert into pages values(DEFAULT, $1, $2, $3, $4)";
    const { rows } = await db.query(query, [order, type, body_text, scenarioID]);
    return rows[0].id;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePage = async function (pageID, body_text) {
  const query = "UPDATE pages SET body_text = $2 WHERE id = $1";
  const { rows } = await db.query(query, [pageID, body_text]);
  return rows[0];
};

exports.deletePage = async function (pageID) {
  const query = "DELETE FROM pages WHERE id = $1";
  const { rows } = await db.query(query, [pageID]);
  return rows[0];
};

exports.createIntroPage = async function (scenarioID, text) {
  if (await scenario.getScenario(scenarioID)) {
    // create page object - plain-page when no prompt linked
    const pageID = await exports.createPage(INTROPAGE, TYPE_PLAIN, text, scenarioID);
    return 202;
  } else {
    // TODO return InvalidScenarioError
    return 404;
  }
};

exports.getIntroPage = async function (scenarioID) {
  const pages = await exports.getPageBy({ order: INTROPAGE, type: TYPE_PLAIN, scenarioID });
  return pages.length !== 0 ? pages[0] : null;
};

exports.createTaskPage = async function (type, scenarioID, text) {
  if (await scenario.getScenario(scenarioID)) {
    return await exports.createPage(TASKPAGE, type, text, scenarioID);
  } else {
    throw new Error("Invalid Scenario ID");
  }
};

exports.getTaskPage = async function (scenarioID) {
  const pages = await exports.getPageBy({ order: INTROPAGE, scenarioID });
  return {
    plain: pages.filter((el) => el.type === TYPE_PLAIN),
    prompt: pages.filter((el) => el.type === TYPE_PROMPT),
    mcq: pages.filter((el) => el.type === TYPE_MCQ),
    conv: pages.filter((el) => el.type === TYPE_CONV),
  };
};

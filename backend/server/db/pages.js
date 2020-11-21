const pool = require("./pool");
const scenario = require("./scenario");

exports.pageOrder = {
  INTRO: 1,
  TASK: 2,
  INITIAL_REFLECTION: 3,
  INIT_ACTION: 4,
  INIT_ACTION_SUBSEQUENT: 5,
  CONVERSATION: 6,
  MIDDLE_REFLECTION: 7,
  FINAL_ACTION: 8,
  SUMMARY: 9,
  FEEDBACK: 10,
  FINAL_REFLECTION: 11,
  CONCLUSION: 12,
};

// constants for page types
exports.pageType = {
  PLAIN: "PLAIN",
  PROMPT: "PRMPT",
  MCQ: "MCQ",
  CONV: "CONV",
};

exports.getPage = async function (pageID) {
  const query = "SELECT * FROM pages WHERE id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getPageBy = async function ({
  order = null,
  type = null,
  scenarioID = null,
}) {
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
    .map((el) => `pages.${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from pages WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.scenarioPageExists = async function (order, type, scenarioID) {
  if (await scenario.getScenario(scenarioID)) {
    let thisQuery =
      "select pages.id from pages, scenario where pages.scenario_id = $1 and pages.order = $2 and pages.type = $3";
    try {
      const { rows } = await pool.query(thisQuery, [scenarioID, order, type]);
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
    throw new Error(
      "Page specified with order, type, and scenario already exists."
    );
  }
  const query = "insert into pages values(DEFAULT, $1, $2, $3, $4)";
  const { rows } = await pool.query(query, [
    order,
    type,
    body_text,
    scenarioID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.createIntroPage = async function (scenarioID, text) {
    if (await scenario.getScenario(scenarioID)){
        // create page object - plain-page when no prompt linked
        page = await exports.createPage(exports.pageOrder.INTRO, exports.pageType.PLAIN, text, scenarioID)
        return page;
    }
    else{
        // TODO return InvalidScenarioError
        return 404;
    }
}

exports.updatePage = async function (pageID, body_text) {
  const query = "UPDATE pages SET body_text = $2 WHERE id = $1";
  const { rows } = await pool.query(query, [pageID, body_text]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deletePage = async function (pageID) {
  const query = "DELETE FROM pages WHERE id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

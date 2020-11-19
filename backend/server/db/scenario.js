const db = require("../models");

exports.getScenario = async function (scenarioID) {
  const query = "SELECT * FROM scenario WHERE id = $1";
  const { rows } = await db.query(query, [scenarioID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.createScenario = async function (name, description) {
  let curDate = new Date();
  let due_date = `${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()} ${curDate.toLocaleTimeString(
    "en-GB"
  )}`;
  let status = "DRAFT";
  let additional_data = "<additional_data>";
  const {
    rows2,
  } = await db.query("INSERT INTO SCENARIO VALUES (nextval('scenario_id_seq'::regclass), $1, $2, $3, $4, $5)", [
    name,
    due_date,
    description,
    status,
    additional_data,
  ]);
  const { rows } = await db.query("SELECT currval('scenario_id_seq')");
  // console.log(parseInt(rows[0].currval));
  return parseInt(rows[0].currval);
};

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

exports.deleteScenario = async function (id) {};

exports.scenarioPageExists = async function (order, type, scenarioID) {
  if (await exports.getScenario(scenarioID)) {
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

exports.getScenarioDescription = async (scenario_id) => {
  const { rows } = await db.query("SELECT * FROM scenario WHERE id=$1", [scenario_id]);
  return rows[0].description;
};

exports.setScenarioDescription = async (scenario_id, description) => {
  const { rows } = await db.query("UPDATE scenario SET description=$1 WHERE id=$2", [description, scenario_id]);
  return rows[0];
};

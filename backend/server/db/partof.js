const pool = require("./pool");

const getConnectionOfScenarioAndCourse = async function (scenarioID, courseID) {
  const query =
    "SELECT * FROM partof WHERE scenario_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

const getConnectionsOfScenarioAndCourse = async function ({
  scenarioID = null,
  courseID = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "scenario_id",
    value: scenarioID,
    pos: scenarioID ? argsPos++ : 0,
  });

  queryValues.push({
    name: "course_id",
    value: courseID,
    pos: courseID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from partof WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createConnectionOfScenarioAndCourse = async function (
  scenarioID,
  courseID
) {
  const query = "INSERT INTO partof VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [courseID, scenarioID]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteConnectionOfScenarioAndCourse = async function (
  scenarioID,
  courseID
) {
  const query =
    "DELETE FROM partof WHERE scenario_id = $1 and course_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteConnectionsOfScenarioAndCourse = async function ({
  scenarioID = null,
  courseID = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "scenario_id",
    value: scenarioID,
    pos: scenarioID ? argsPos++ : 0,
  });

  queryValues.push({
    name: "course_id",
    value: courseID,
    pos: courseID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `DELETE FROM partof WHERE ${where} RETURNING *`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

module.exports = {
  getConnectionOfScenarioAndCourse,
  getConnectionsOfScenarioAndCourse,
  createConnectionOfScenarioAndCourse,
  deleteConnectionOfScenarioAndCourse,
  deleteConnectionsOfScenarioAndCourse,
};

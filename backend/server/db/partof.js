const pool = require("./pool");
const scenario = require("./scenario");
const courses = require("./courses");

exports.getConnectionOfScenarioAndCourse = async function (
  scenarioID,
  courseID
) {
  const query =
    "SELECT * FROM partof WHERE scenario_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getConnectionsOfScenarioAndCourse = async function ({
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

exports.createConnectionOfScenarioAndCourse = async function (
  scenarioID,
  courseID
) {
  // A scenario can be added to only one course.
  // if (!(await exports.getCourseOfScenario(scenarioID))) {
  //   throw new Error(
  //     "Cannot add scenario which is already added to another course"
  //   );
  // }

  const query = "INSERT INTO partof VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [courseID, scenarioID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteConnectionOfScenarioAndCourse = async function (
  scenarioID,
  courseID
) {
  const query =
    "DELETE FROM partof WHERE scenario_id = $1 and course_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteConnectionsOfScenarioAndCourse = async function ({
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

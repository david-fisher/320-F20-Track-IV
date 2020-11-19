const db = require("../models");

exports.addScenarioToCourse = async function (scenarioID, courseID) {
  // check course exists
  // check scenario exists

  let thisQuery = "insert into partof values($1, $2)";
  try {
    const { rows } = await db.query(thisQuery, [courseID, scenarioID]);
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCourseOfScenario = async function (scenarioID) {
  const query = "SELECT * FROM partof WHERE scenario_id = $1";
  const { rows } = await db.query(query, [scenarioID]);
  return rows[0];
};

exports.getScenariosInCourse = async function (courseID) {
  const query = "SELECT * FROM partof WHERE course_id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows.map((el) => el.scenario_id);
};

exports.removeScenarioFromCourse = async function (scenarioID) {
  const query = "DELETE FROM partof WHERE scenario_id = $1";
  const { rows } = await db.query(query, [scenarioID]);
  return rows[0];
};

exports.removeScenariosFromCourse = async function (courseID) {
  const query = "DELETE FROM partof WHERE course_id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows;
};

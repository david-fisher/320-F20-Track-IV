const db = require("../models");
const scenario = require("./scenario");
const courses = require("./courses");

exports.connectScenarioAndCourse = async function (scenarioID, courseID) {
  if (!(await scenario.getScenario(scenarioID))) {
    throw new Error("Cannot find scenario to be added to course");
  }

  if (!(await courses.getCourse(courseID))) {
    throw new Error("Cannot find course where scenario will be added");
  }

  // A scenario can be added to only one course.
  if (!(await courses.getCourse(courseID))) {
    throw new Error(
      "Cannot add scenario which is already added to another course"
    );
  }

  let thisQuery = "insert into partof values($1, $2)";
  try {
    const { rows } = await db.query(thisQuery, [courseID, scenarioID]);
  } catch (error) {
    throw new Error(error);
  }
};

exports.getConnectedScenarioAndCourse = async function (scenarioID, courseID) {
  const query =
    "SELECT * FROM partof WHERE scenario_id = $1 and course_id = $2";
  const { rows } = await db.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getCourseOfScenario = async function (scenarioID) {
  const query = "SELECT * FROM partof WHERE scenario_id = $1";
  const { rows } = await db.query(query, [scenarioID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getScenariosInCourse = async function (courseID) {
  const query = "SELECT * FROM partof WHERE course_id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows.map((el) => el.scenario_id);
};

exports.disconnectScenarioAndCourse = async function (scenarioID, courseID) {
  const query = "DELETE FROM partof WHERE scenario_id = $1 and course_id = $2";
  const { rows } = await db.query(query, [scenarioID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.disconnectScenarioFromCourse = async function (scenarioID) {
  const query = "DELETE FROM partof WHERE scenario_id = $1";
  const { rows } = await db.query(query, [scenarioID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.disconnectCourseFromScenarios = async function (courseID) {
  const query = "DELETE FROM partof WHERE course_id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows;
};

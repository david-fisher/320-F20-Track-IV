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

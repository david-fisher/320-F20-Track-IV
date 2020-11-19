const pool = require("./pool");
const scenario = require("./scenario");
const users = require("./users");

const operatorList = {
  eq: "=",
  ne: "<>",
  gt: ">",
  ge: ">=",
  lt: "<",
  le: "<=",
};
exports.getSubmission = async function (submissionID) {
  const query = "SELECT * FROM submissions WHERE id = $1";
  const { rows } = await pool.query(query, [submissionID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.getSubmissionsBy = async function ({
  userID = null,
  scenarioID = null,
  submissionTime = [...{ time: null, operator: "eq" }],
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "user_id",
    value: userID,
    pos: userID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "scenario_id",
    value: scenarioID,
    pos: scenarioID ? argsPos++ : 0,
  });
  let where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");
  let values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);

  if (submissionTime.length !== 0) {
    const timeQueryValues = [];

    for (let st of submissionTime) {
      timeQueryValues.push({
        name: "submission_time",
        operator: operatorList[st.operator],
        value: st.time,
        pos: argsPos++,
      });
    }

    const whereTime = timeQueryValues
      .map((el) => `${el.name}${el.operator}$${el.pos}`)
      .join(" and ");
    const valuesTime = timeQueryValues.map((el) => el.value);
    where = where + " and " + whereTime;
    values = values.concat(valuesTime);
  }

  const query = `SELECT * from submissions WHERE ${where}`;
  const { rows } = await pool.query(query, values);
  return rows;
};
exports.makeSubmissionOfScenarioByUser = async function (userID, scenarioID) {
  if (!(await users.getUser(userID))) {
    throw new Error("Cannot find user who makes submission of scenario");
  }

  if (!(await scenario.getScenario(scenarioID))) {
    throw new Error("Cannot find scenario which user makes submission of");
  }

  if (await exports.getConnectedStudentAndCourse(userID, scenarioID)) {
    throw new Error(
      "Cannot make submission of scenario since user already did"
    );
  }

  const query = "INSERT INTO submissions VALUES(DEFAULT, $1, $2, DEFAULT)";
  const { rows } = await pool.query(query, [userID, scenarioID]);
  return rows[0];
};

exports.deleteSubmission = async function (submissionID) {
  const query = "DELETE FROM submissions WHERE id = $1";
  const { rows } = await pool.query(query, [submissionID]);
  return rows[0];
};

exports.deleteSubmissionsByUser = async function (userID) {
  const query = "DELETE FROM submissions WHERE user_id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows;
};

exports.deleteSubmissionsOfScenario = async function (scenarioID) {
  const query = "DELETE FROM submissions WHERE scenario_id = $1";
  const { rows } = await pool.query(query, [scenarioID]);
  return rows;
};

const pool = require("./pool");
const partof = require("./partof");
const instructs = require("./instructs");

const operatorList = {
  eq: "=",
  ne: "<>",
  gt: ">",
  ge: ">=",
  lt: "<",
  le: "<=",
};

const isScenarioEditableByUser = async function (scenarioID, userID) {
  const query = `SELECT * FROM scenario WHERE id = $1 and id IN (
    SELECT scenario_id FROM partof WHERE scenario_id = $1 and course_id IN (
      SELECT course_id FROM instructs WHERE instructor_id = $2
    )
  )`;
  const { rows } = await pool.query(query, [scenarioID, userID]);
  return rows.length > 0;
};

const getScenario = async function (scenarioID) {
  const query = "SELECT * FROM scenario WHERE id = $1";
  const { rows } = await pool.query(query, [scenarioID]);
  return rows.length !== 0 ? rows[0] : null;
};

const getScenariosByUserID = async function (userID) {
  const query = `SELECT * FROM scenario WHERE id IN (
    SELECT scenario_id FROM partof WHERE course_id IN (
      SELECT course_id FROM instructs WHERE instructor_id = $1
    )
  )`;
  const { rows } = await pool.query(query, [userID]);
  return rows;
};

const getScenariosBy = async function ({
  name = null,
  status = null,
  dueDate = [],
}) {
  // console.log(name, status);
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "name",
    value: name,
    pos: name ? argsPos++ : 0,
  });
  queryValues.push({
    name: "status",
    value: status,
    pos: status ? argsPos++ : 0,
  });
  let where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");
  let values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);

  if (dueDate.length !== 0) {
    const timeQueryValues = [];

    for (let dd of dueDate) {
      timeQueryValues.push({
        name: "time",
        operator: operatorList[dd.operator],
        value: dd.time,
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

  const query = `SELECT * from scenario WHERE ${where}`;
  console.log(query);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createScenario = async function (
  name,
  dueDate,
  description,
  status,
  additionalData
) {
  if (dueDate < new Date()) {
    throw new Error("Due date cannot be earlier than current time");
  }

  const query =
    "INSERT INTO scenario VALUES(DEFAULT, $1, $2, $3, $4, $5) RETURNING *";
  const { rows } = await pool.query(query, [
    name,
    dueDate,
    description,
    status,
    additionalData,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

const updateScenario = async function (
  scenarioID,
  name,
  dueDate,
  description,
  status,
  additionalData
) {
  if (dueDate < new Date()) {
    throw new Error("Due date cannot be earlier than current time");
  }

  const query =
    "UPDATE scenario " +
    "SET name = $2 and due_date = $3 and description = $4 and status = $5 and additional_data = $6 " +
    "WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [
    scenarioID,
    name,
    dueDate,
    description,
    status,
    additionalData,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteScenario = async function (scenarioID) {
  const query = "DELETE FROM scenario WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [scenarioID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  isScenarioEditableByUser,
  getScenariosByUserID,
  getScenario,
  getScenariosBy,
  createScenario,
  updateScenario,
  deleteScenario,
};

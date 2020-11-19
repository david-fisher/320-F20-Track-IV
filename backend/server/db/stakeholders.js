const pool = require("./pool");
const scenario = require("./scenario");
const convTask = require("./conversation_task");

exports.getStakeholder = async function (stakeholderID) {
  const query = "SELECT * FROM stakeholders WHERE id = $1";
  const { rows } = await pool.query(query, [stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getStakeholderBy = async function ({
  scenarioID = null,
  convTaskID = null,
  name = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "scenario_id",
    value: scenarioID,
    pos: scenarioID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "conversation_task_id",
    value: convTaskID,
    pos: convTaskID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "name",
    value: name,
    pos: name ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from stakeholders WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.createStakeholder = async function (
  scenarioID,
  convTaskID,
  name,
  description,
  conversation
) {
  if (!(await scenario.getScenario(scenarioID))) {
    throw new Error("Cannot find a scenario where stakeholder must belong");
  }

  if (!(await convTask.getConversationTask(convTaskID))) {
    throw new Error(
      "Cannot find a conversation task page where stakeholder must belong"
    );
  }

  // Name must be unique in a conversation task page
  const existing = await exports.getStakeholderBy({
    scenarioID,
    convTaskID,
    name,
  });
  if (existing.length !== 0) {
    throw new Error(`Name "${name}" already exists in the conversation page`);
  }

  const query =
    "insert into stakeholders values(DEFAULT, $1, NULL, $2, $3, $4, $5)";
  const { rows } = await pool.query(query, [
    name,
    description,
    conversation,
    scenarioID,
    convTaskID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updateStakeholder = async function (
  stakeholderID,
  name,
  description,
  conversation
) {
  const query =
    "UPDATE stakeholders " +
    "SET name = $2 and description = $3 and conversation = $4" +
    "WHERE id = $1";
  const { rows } = await pool.query(query, [
    stakeholderID,
    name,
    description,
    conversation,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteConversationTask = async function (stakeholderID) {
  const query = "DELETE FROM stakeholders WHERE id = $1";
  const { rows } = await pool.query(query, [stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

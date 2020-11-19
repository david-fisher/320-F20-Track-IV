const db = require("../models");
const response = require("./response");
const stakeholders = require("./stakeholders");

exports.getStakeholderChoice = async function (response_id, stakeholder_id) {
  const query =
    "SELECT * FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await db.query(query, [response_id, stakeholder_id]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.getStakeholderChoicesBy = async function ({
  responseID = null,
  stakeholderID = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "response_id",
    value: responseID,
    pos: responseID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "stakeholder_id",
    value: stakeholderID,
    pos: stakeholderID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from stakeholder_chocies WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await db.query(query, values);
  return rows;
};

exports.createStakeholderChoice = async function (response_id, stakeholder_id) {
  if (!(await response.getResponse(response_id))) {
    throw new Error(
      "Cannot find a response where choice of stakeholder must belong"
    );
  }

  if (!(await stakeholders.getStakeholder(stakeholder_id))) {
    throw new Error(
      "Cannot find a stakeholder where choice of stakeholder must belong"
    );
  }

  const query = "insert into stakeholder_choices values($1, $2)";
  const { rows } = await db.query(query, [response_id, stakeholder_id]);
  return rows[0];
};

exports.deleteStakeholderChoice = async function (response_id, stakeholder_id) {
  const query =
    "DELETE FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await db.query(query, [response_id, stakeholder_id]);
  return rows[0];
};

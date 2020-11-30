const pool = require("./pool");

const getStakeholderChoice = async function (responseID, stakeholderID) {
  const query =
    "SELECT * FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

const getStakeholderChoicesBy = async function ({
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

  const query = `SELECT * FROM stakeholder_chocies WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createStakeholderChoice = async function (responseID, stakeholderID) {
  const query = "INSERT INTO stakeholder_choices VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteStakeholderChoice = async function (responseID, stakeholderID) {
  const query =
    "DELETE FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getStakeholderChoice,
  getStakeholderChoicesBy,
  createStakeholderChoice,
  deleteStakeholderChoice,
};

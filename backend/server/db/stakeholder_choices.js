const pool = require("./pool");

exports.getStakeholderChoice = async function (responseID, stakeholderID) {
  const query =
    "SELECT * FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
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
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.createStakeholderChoice = async function (responseID, stakeholderID) {
  const query = "insert into stakeholder_choices values($1, $2)";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteStakeholderChoice = async function (responseID, stakeholderID) {
  const query =
    "DELETE FROM stakeholder_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

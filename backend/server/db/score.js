const pool = require("./pool");

const getScore = async function (stakeholderID, issueID) {
  const query =
    "SELECT * FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await pool.query(query, [stakeholderID, issueID]);
  return rows.length > 0 ? rows[0] : null;
};

const getScoresBy = async function ({ stakeholderID = null, issueID = null }) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "stakeholder_id",
    value: stakeholderID,
    pos: stakeholderID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "issue_id",
    value: issueID,
    pos: issueID ? argsPos++ : 0,
  });

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from score WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createScore = async function (stakeholderID, issueID, value) {
  const query = "INSERT INTO score VALUES($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [stakeholderID, issueID, value]);
  return rows.length > 0 ? rows[0] : null;
};

const updateScore = async function (stakeholderID, issueID, value) {
  const query =
    "UPDATE score SET value = $3 WHERE stakeholder_id = $1 and issue_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [stakeholderID, issueID, value]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteScore = async function (issueID) {
  const query =
    "DELETE FROM score WHERE stakeholder_id = $1 and issue_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [issueID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getScore,
  getScoresBy,
  createScore,
  updateScore,
  deleteScore,
};

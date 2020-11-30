const pool = require("./pool");

const getScore = async function (stakeholderID, issueID) {
  const query =
    "SELECT * FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await pool.query(query, [stakeholderID, issueID]);
  return rows.length > 0 ? rows[0] : null;
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
  createScore,
  updateScore,
  deleteScore,
};

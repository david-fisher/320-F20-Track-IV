const pool = require("./pool");

const getIssue = async function (issueID) {
  const query = "SELECT * FROM issues WHERE id = $1";
  const { rows } = await pool.query(query, [issueID]);
  return rows.length > 0 ? rows[0] : null;
};

const createIssue = async function (name, description) {
  const query = "INSERT INTO issues VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [name, description]);
  return rows.length > 0 ? rows[0] : null;
};

const updateIssue = async function (issueID, name, description) {
  const query =
    "UPDATE issues SET name = $2 and description = $3 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [issueID, name, description]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteIssue = async function (issueID) {
  const query = "DELETE FROM issues WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [issueID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
};

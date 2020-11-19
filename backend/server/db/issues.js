const pool = require("./pool");

exports.getIssue = async function (issueID) {
  const query = "SELECT * FROM issues WHERE id = $1";
  const { rows } = await pool.query(query, [issueID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.createIssue = async function (name, description) {
  const query = "insert into issues values($1, $2)";
  const { rows } = await pool.query(query, [name, description]);
  return rows[0];
};

exports.updateIssue = async function (issueID, name, description) {
  const query =
    "UPDATE issues SET name = $2 and description = $3 WHERE id = $1";
  const { rows } = await pool.query(query, [issueID, name, description]);
  return rows[0];
};

exports.deleteIssue = async function (issueID) {
  const query = "DELETE FROM issues WHERE id = $1";
  const { rows } = await pool.query(query, [issueID]);
  return rows[0];
};

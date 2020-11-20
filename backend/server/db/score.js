const pool = require("./pool");

exports.getScore = async function (stakeholderID, issueID) {
  const query =
    "SELECT * FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await pool.query(query, [stakeholderID, issueID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.createScore = async function (stakeholderID, issueID, value) {
  const query = "insert into score values($1, $2, $3)";
  const { rows } = await pool.query(query, [stakeholderID, issueID, value]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updateScore = async function (stakeholderID, issueID, value) {
  const query =
    "UPDATE score SET value = $3 WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await pool.query(query, [stakeholderID, issueID, value]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteScore = async function (issueID) {
  const query = "DELETE FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await pool.query(query, [issueID]);
  return rows.length > 0 ? rows[0] : null;
};

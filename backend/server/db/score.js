const db = require("../models");
const stakeholders = require("./stakeholders");
const issues = require("./issues");

exports.getScore = async function (stakeholderID, issueID) {
  const query =
    "SELECT * FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await db.query(query, [stakeholderID, issueID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.createScore = async function (stakeholderID, issueID, value) {
  if (!(await stakeholders.getStakeholder(stakeholderID))) {
    throw new Error("Cannot find a scenario where stakeholder must belong");
  }

  if (!(await issues.getIssue(issueID))) {
    throw new Error(
      "Cannot find a conversation task page where stakeholder must belong"
    );
  }

  const query = "insert into score values($1, $2, $3)";
  const { rows } = await db.query(query, [stakeholderID, issueID, value]);
  return rows[0];
};

exports.updateScore = async function (stakeholderID, issueID, value) {
  const query =
    "UPDATE score SET value = $3 WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await db.query(query, [stakeholderID, issueID, value]);
  return rows[0];
};

exports.deleteScore = async function (issueID) {
  const query = "DELETE FROM score WHERE stakeholder_id = $1 and issue_id = $2";
  const { rows } = await db.query(query, [issueID]);
  return rows[0];
};

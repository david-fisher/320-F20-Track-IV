const pool = require("./pool");
const response = require("./response");
const question = require("./question");
const mcqOption = require("./mcq_option");

exports.getMcqResponse = async function (response_id, question_id) {
  const query =
    "SELECT * FROM mcq_response WHERE response_id = $1 and question_id = $2";
  const { rows } = await pool.query(query, [response_id, question_id]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getMcqResponsesBy = async function ({
  responseID = null,
  questionID = null,
  mcqOptionID = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "response_id",
    value: responseID,
    pos: responseID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "question_id",
    value: questionID,
    pos: questionID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "choice_id",
    value: mcqOptionID,
    pos: mcqOptionID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from mcq_response WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.createMcqResponse = async function (
  responseID,
  questionID,
  mcqOptionID
) {
  if (!(await response.getResponse(responseID))) {
    throw new Error("Cannot find a response where response of mcq must belong");
  }

  if (!(await question.getQuestion(questionID))) {
    throw new Error("Cannot find a question where response of mcq must belong");
  }

  if (!(await mcqOption.getMcqOption(mcqOptionID))) {
    throw new Error("Cannot find a mcq option where response of mcq choosed");
  }

  const query = "insert into mcq_response values($1, $2, $3)";
  const { rows } = await pool.query(query, [
    responseID,
    questionID,
    mcqOptionID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updateMcqResponse = async function (
  responseID,
  questionID,
  mcqOptionID
) {
  if (!(await response.getResponse(responseID))) {
    throw new Error("Cannot find a response where response of mcq must belong");
  }

  if (!(await question.getQuestion(questionID))) {
    throw new Error("Cannot find a question where response of mcq must belong");
  }

  if (!(await mcqOption.getMcqOption(mcqOptionID))) {
    throw new Error("Cannot find a mcq option where response of mcq choosed");
  }

  const query =
    "UPDATE mcq_response SET choice_id = $3 WHERE response_id = $1 and question_id = $2";
  const { rows } = await pool.query(query, [
    responseID,
    questionID,
    mcqOptionID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteMcqResponse = async function (response_id, stakeholder_id) {
  const query =
    "DELETE FROM mcq_response WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await pool.query(query, [response_id, stakeholder_id]);
  return rows.length > 0 ? rows[0] : null;
};

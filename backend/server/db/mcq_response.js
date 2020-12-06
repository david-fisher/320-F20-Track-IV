const pool = require("./pool");

const getMcqResponse = async function (response_id, question_id) {
  const query =
    "SELECT * FROM mcq_response WHERE response_id = $1 and question_id = $2";
  const { rows } = await pool.query(query, [response_id, question_id]);
  return rows.length > 0 ? rows[0] : null;
};

const getMcqResponsesBy = async function ({
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

const createMcqResponse = async function (responseID, questionID, mcqOptionID) {
  const query = "INSERT INTO mcq_response VALUES($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [
    responseID,
    questionID,
    mcqOptionID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

const updateMcqResponse = async function (responseID, questionID, mcqOptionID) {
  const query =
    "UPDATE mcq_response SET choice_id = $3 WHERE response_id = $1 and question_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [
    responseID,
    questionID,
    mcqOptionID,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteMcqResponse = async function (responseID, questionID) {
  const query =
    "DELETE FROM mcq_response WHERE response_id = $1 and question_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [responseID, questionID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getMcqResponse,
  getMcqResponsesBy,
  createMcqResponse,
  updateMcqResponse,
  deleteMcqResponse,
};

const pool = require("./pool");

const getMcqOption = async function (mcqOptionID) {
  const query = "SELECT * FROM mcq_option WHERE id = $1";
  const { rows } = await pool.query(query, [mcqOptionID]);
  return rows.length > 0 ? rows[0] : null;
};

const getMcqOptionsBy = async function ({ questionID = null }) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "question_id",
    value: questionID,
    pos: questionID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from mcq_option WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createMcqOption = async function (questionID, option) {
  const query = "INSERT INTO mcq_option VALUES(DEFAULT, $1, $2) RETURNING *";
  const { rows } = await pool.query(query, [option, questionID]); // watch out for order of values!
  return rows.length > 0 ? rows[0] : null;
};

const updateMcqOption = async function (mcqOptionID, option) {
  const query = "UPDATE mcq_option SET option = $2 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [mcqOptionID, option]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteMcqOption = async function (mcqOptionID) {
  const query = "DELETE FROM mcq_option WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [mcqOptionID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getMcqOption,
  getMcqOptionsBy,
  createMcqOption,
  updateMcqOption,
  deleteMcqOption,
};

const pool = require("./pool");

exports.getQuestion = async function (questionID) {
  const query = "SELECT * FROM question WHERE id = $1";
  const { rows } = await pool.query(query, [questionID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getQuestionsBy = async function ({ mcqID = null }) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "mcq_id",
    value: mcqID,
    pos: mcqID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from question WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.createQuestion = async function (mcqID, question) {
  const query = "INSERT INTO question VALUES(DEFAULT, $1, $2)";
  const { rows } = await pool.query(query, [question, mcqID]); // watch out for order of values!
  return rows.length > 0 ? rows[0] : null;
};

exports.updateQuestion = async function (questionID, question) {
  const query = "UPDATE question SET question = $2 WHERE id = $1";
  const { rows } = await pool.query(query, [questionID, question]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteQuestion = async function (questionID) {
  const query = "DELETE FROM question WHERE id = $1";
  const { rows } = await pool.query(query, [questionID]);
  return rows.length > 0 ? rows[0] : null;
};

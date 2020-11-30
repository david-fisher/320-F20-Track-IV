const pool = require("./pool");

const getInstruction = async function (userID, courseID) {
  const query =
    "SELECT * FROM instructs WHERE instructor_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

const getInstructionsBy = async function ({
  userID = null,
  courseID = null,
  webpage = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "user_id",
    value: userID,
    pos: userID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "course_id",
    value: courseID,
    pos: courseID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "webpage",
    value: webpage,
    pos: webpage ? argsPos++ : 0,
  });

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from instructs WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createInstruction = async function (userID, courseID, webpage) {
  const query = "INSERT INTO instructs VALUES($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [userID, webpage, courseID]); // watch out for order of values!
  return rows.length > 0 ? rows[0] : null;
};

const updateInstuction = async function (userID, courseID, webpage) {
  const query =
    "UPDATE conversation_task SET webpage = $3 WHERE user_id = $1 and course_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [userID, courseID, webpage]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteInstruction = async function (userID, courseID) {
  const query =
    "DELETE FROM instructs WHERE instructor_id = $1 and course_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteInstructionsBy = async function ({
  userID = null,
  courseID = null,
  webpage = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "user_id",
    value: userID,
    pos: userID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "course_id",
    value: courseID,
    pos: courseID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "webpage",
    value: webpage,
    pos: webpage ? argsPos++ : 0,
  });

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `DELETE FROM instructs WHERE ${where} RETURNING *`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

module.exports = {
  getInstruction,
  getInstructionsBy,
  createInstruction,
  updateInstuction,
  deleteInstruction,
  deleteInstructionsBy,
};

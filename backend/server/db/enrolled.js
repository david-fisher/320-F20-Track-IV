const pool = require("./pool");

exports.getEnrollment = async function (userID, courseID) {
  const query =
    "SELECT * FROM enrolled WHERE student_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getEnrollmentsBy = async function ({ userID = null, courseID = null }) {
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

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from enrolled WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};
exports.createEnrollment = async function (userID, courseID) {
  const query = "INSERT INTO enrolled VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [userID, courseID]); // watch out for order of values!
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteEnrollment = async function (userID, courseID) {
  const query =
    "DELETE FROM enrolled WHERE student_id = $1 and course_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteEnrollmentsBy = async function ({
  userID = null,
  courseID = null,
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

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `DELETE FROM enrolled WHERE ${where} RETURNING *`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

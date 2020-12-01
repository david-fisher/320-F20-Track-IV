const pool = require("./pool");

const getCourse = async function (courseID) {
  const query = "SELECT * FROM courses WHERE id = $1";
  const { rows } = await pool.query(query, [courseID]);
  return rows.length > 0 ? rows[0] : null;
};

const getCoursesBy = async function ({
  webpage = null,
  name = null,
  semester = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "webpage",
    value: webpage,
    pos: webpage ? argsPos++ : 0,
  });
  queryValues.push({
    name: "name",
    value: name,
    pos: name ? argsPos++ : 0,
  });
  queryValues.push({
    name: "semester",
    value: semester,
    pos: semester ? argsPos++ : 0,
  });

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from courses WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createCourse = async function (webpage, name, semester) {
  const query = "INSERT INTO courses VALUES(DEFAULT, $1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [webpage, name, semester]);
  return rows.length > 0 ? rows[0] : null;
};

const updateCourse = async function (courseID, webpage, name, semester) {
  const query =
    "UPDATE courses SET webpage = $2 and name = $3 and semester = $4 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [courseID, webpage, name, semester]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteCourse = async function (courseID) {
  const query = "DELETE FROM courses WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [courseID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getCourse,
  getCoursesBy,
  createCourse,
  updateCourse,
  deleteCourse,
};

const db = require("../models");

exports.getCourse = async function (courseID) {
  const query = "SELECT * FROM courses WHERE id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.getCoursesBy = async function ({
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
  const { rows } = await db.query(query, values);
  return rows;
};

exports.createCourse = async function (webpage, name, semester) {
  const existing = await exports.getCoursesBy({ name, semester });
  if (existing.length > 0) {
    throw new Error(
      "Cannot create new course with already registered name and semester"
    );
  }

  const query = "INSERT INTO courses VALUES(DEFAULT, $1, $2, $3)";
  const { rows } = await db.query(query, [webpage, name, semester]);
  return rows[0];
};

exports.updateCourse = async function (courseID, webpage, name, semester) {
  const query =
    "UPDATE courses SET webpage = $2 and name = $3 and semester = $4 WHERE id = $1";
  const { rows } = await db.query(query, [courseID, webpage, name, semester]);
  return rows[0];
};

exports.deleteCourse = async function (courseID) {
  const query = "DELETE FROM courses WHERE id = $1";
  const { rows } = await db.query(query, [courseID]);
  return rows[0];
};

const pool = require("./pool");
const users = require("./users");
const courses = require("./courses");

exports.enrolledCourseByStudent = async function (userID, courseID, webpage) {
  if (!(await users.getUser(userID))) {
    throw new Error("Cannot find user who enrolled course");
  }

  if (!(await courses.getCourse(courseID))) {
    throw new Error("Cannot find course which user enrolled");
  }

  if (await exports.getConnectedStudentAndCourse(userID, courseID)) {
    throw new Error(
      "Cannot connect user and course that are already connected"
    );
  }

  const query = "INSERT INTO enrolled VALUES($1, $2, $3)";
  const { rows } = await pool.query(query, [userID, webpage, courseID]); // watch out for order of values!
  return rows[0];
};

exports.getConnectedStudentAndCourse = async function (userID, courseID) {
  const query =
    "SELECT * FROM enrolled WHERE student_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getCoursesEnrolledByStudent = async function (userID) {
  const query = "SELECT * FROM enrolled WHERE student_id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows.map((el) => el.course_id);
};

exports.getStudentsInCourse = async function (courseID) {
  const query = "SELECT * FROM enrolled WHERE course_id = $1";
  const { rows } = await pool.query(query, [courseID]);
  return rows.map((el) => el.student_id);
};

exports.disconnectStudentAndCourse = async function (userID, courseID) {
  const query = "DELETE FROM enrolled WHERE student_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows[0];
};

exports.disconnectStudentFromCourses = async function (userID) {
  const query = "DELETE FROM enrolled WHERE student_id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.disconnectCourseFromStudents = async function (courseID) {
  const query = "DELETE FROM enrolled WHERE course_id = $1";
  const { rows } = await pool.query(query, [courseID]);
  return rows;
};

const pool = require("./pool");
const users = require("./users");
const courses = require("./courses");

exports.instructCourseByInstructor = async function (
  userID,
  courseID,
  webpage
) {
  if (!(await users.getUser(userID))) {
    throw new Error("Cannot find user to instruct course");
  }

  if (!(await courses.getCourse(courseID))) {
    throw new Error("Cannot find course which user instructs");
  }

  if (await exports.getConnectedInstructorAndCourse(userID, courseID)) {
    throw new Error(
      "Cannot connect user and course that are already connected"
    );
  }

  const query = "INSERT INTO instructs VALUES($1, $2, $3)";
  const { rows } = await pool.query(query, [userID, webpage, courseID]); // watch out for order of values!
  return rows[0];
};

exports.getConnectedInstructorAndCourse = async function (userID, courseID) {
  const query =
    "SELECT * FROM instructs WHERE instructor_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getCoursesInstructedByInstructor = async function (userID) {
  const query = "SELECT * FROM instructs WHERE instructor_id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows.map((el) => el.course_id);
};

exports.getInstructorsInstructingCourse = async function (courseID) {
  const query = "SELECT * FROM instructs WHERE course_id = $1";
  const { rows } = await pool.query(query, [courseID]);
  return rows.map((el) => el.instructor_id);
};

exports.disconnectInstructorAndCourse = async function (userID, courseID) {
  const query =
    "DELETE FROM instructs WHERE instructor_id = $1 and course_id = $2";
  const { rows } = await pool.query(query, [userID, courseID]);
  return rows[0];
};

exports.disconnectInstructorFromCourses = async function (userID) {
  const query = "DELETE FROM instructs WHERE instructor_id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.disconnectCourseFromInstructors = async function (courseID) {
  const query = "DELETE FROM instructs WHERE course_id = $1";
  const { rows } = await pool.query(query, [courseID]);
  return rows;
};

const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/course/:course_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { course_id: courseID } = req.params;
      try {
        const course = await db.courses.getCourse(courseID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...course,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/course/:course_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { course_id: courseID } = req.params;
      let { webpage = null, name = null, semester = null } = req.body;

      try {
        const course = await db.courses.getCourse(courseID);
        webpage = webpage || course.webpage;
        name = name || course.name;
        semester = semester || course.semester;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.courses.updateCourse(courseID, webpage, name, semester);
        res.status(httpStatusCode.success.UPDATED);
        res.json({
          success: true,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;

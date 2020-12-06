const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/enrolled/:course_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const userID = req.user.userID;
    const { course_id: courseID } = req.params;
    try {
      const enrollment = await db.enrolled.getEnrollment(userID, courseID);
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...enrollment,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;

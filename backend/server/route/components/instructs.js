const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/instructs/:instruction_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const userID = req.user.userID;
      const { course_id: courseID } = req.params;
      try {
        const instruction = await db.instructs.getInstruction(userID, courseID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...instruction,
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
      const userID = req.user.userID;
      const { course_id: courseID } = req.params;
      let { webpage = null } = req.body;

      try {
        const course = await db.instructs.getInstruction(userID, courseID);
        webpage = webpage || course.webpage;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.instructs.updateInstuction(userID, courseID, webpage);
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

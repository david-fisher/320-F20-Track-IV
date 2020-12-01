const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/partof/:scenario_id/:course_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { course_id: courseID, scenario_id: scenarioID } = req.params;
    try {
      const connection = await db.partof.getConnectionOfScenarioAndCourse(
        scenarioID,
        courseID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...connection,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;

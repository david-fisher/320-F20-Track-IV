const router = require("express").Router();
const { httpStatusCode } = require("../constant");
const { auth, headers } = require("../middleware");
const db = require("../db");
const { createInvalidResponse } = require("../utils");

router.get(
  "/",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const userID = req.user.userID;
    try {
      const scenarios = await db.scenario.getScenariosByUserID(userID);

      res.status(httpStatusCode.success.OK);
      res.json({
        drafts: scenarios.filter((s) => s.status === "DRAFT"),
        closed: scenarios.filter((s) => s.status === "PUBLISHED"),
        open: scenarios.filter((s) => s.status === "CLOSED"),
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;

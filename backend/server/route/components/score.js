const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/score/:stakeholder_id/:issue_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { stakeholder_id: stakeholderID, issue_id: issueID } = req.params;

      try {
        const score = await db.score.getScore(stakeholderID, issueID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...score,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/score/:stakeholder_id/:issue_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { stakeholder_id: stakeholderID, issue_id: issueID } = req.params;
      const { value } = req.body;

      try {
        await db.score.getScore(stakeholderID, issueID);
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.score.updateScore(stakeholderID, issueID, value);
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

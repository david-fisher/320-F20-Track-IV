const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/issues/:issue_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { issue_id: issueID } = req.params;
      try {
        const issue = await db.issues.getIssue(issueID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...issue,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/issues/:issue_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { issue_id: issueID } = req.params;
      let { name = null, description = null } = req.body;

      try {
        const issue = await db.issues.getIssue(issueID);
        name = name || issue.name;
        description = description || issue.description;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.issues.updateIssue(issueID, name, description);
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

const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/submission/:submission_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { submission_id: submissionID } = req.params;

    try {
      const submission = await db.submissions.getSubmission(submissionID);
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...submission,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;

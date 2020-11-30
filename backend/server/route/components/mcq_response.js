const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/mcq-response/:response_id/:question_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { response_id: responseID, question_id: questionID } = req.params;

      try {
        const mcqResponse = await db.mcqResponse.getMcqResponse(
          responseID,
          questionID
        );
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...mcqResponse,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/mcq-response/:response_id/:question_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { response_id: responseID, question_id: questionID } = req.params;
      const { choice_id: choiceID } = req.body;

      try {
        await db.mcqResponse.getMcqResponse(responseID, questionID);
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.mcqResponse.updateMcqResponse(
          responseID,
          questionID,
          choiceID
        );
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

const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/question/:question_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { question_id: questionID } = req.params;
      try {
        const question = await db.question.getQuestion(questionID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...question,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/question/:question_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { question_id: questionID } = req.params;
      let { question: questionContent } = req.body;

      try {
        const question = await db.question.getQuestion(questionID);
        questionContent = questionContent || question.question;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.question.updateQuestion(questionID, questionContent);
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

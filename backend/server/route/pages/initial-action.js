const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get("/", headers.areHeadersValid, auth.isAuthenticated, async (req, res) => {
    const { simulation_id: scenarioID } = req.params;

    try {
      const initialActionPageGroup = await db.pageGroup.initialAction.getInitialActionPageGroup(
        scenarioID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...initialActionPageGroup,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  })
  .post(
    "/",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { simulation_id: scenarioID } = req.params;
      const {
        body_text: bodyText = null,
        prompts = null,
        content = null,
        question = null,
        options = null,
      } = req.body;

      if (!bodyText) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'body_text' is not defined"));
      }

      if (!prompts) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'prompts' is not defined"));
      }

      if (!content) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'content' is not defined"));
      }

      if (!question) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'question' is not defined"));
      }

      if (!options) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'options' is not defined"));
      }

      try {
        const initialActionPageGroup = await db.pageGroup.initialAction.createInitialActionPageGroup(
          scenarioID,
          bodyText,
          prompts,
          content,
          question,
          options
        );
        res.status(httpStatusCode.success.CREATED);
        res.json({
          success: true,
          ...initialActionPageGroup,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;

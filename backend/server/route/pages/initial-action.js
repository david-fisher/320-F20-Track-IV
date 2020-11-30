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
      let bodyText, prompts, content, question, options;
      try {
        bodyText = req.body.bodyText;
        prompts = req.body.prompts;
        content = req.body.content;
        question = req.body.question;
        options = req.body.options;
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse(error.message));
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

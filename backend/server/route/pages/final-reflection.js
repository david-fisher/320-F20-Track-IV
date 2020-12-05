const router = require("express").Router({ mergeParams: true });
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get("/", headers.areHeadersValid, auth.isAuthenticated, async (req, res) => {
    const { simulation_id: scenarioID } = req.params;
    try {
      const finalReflectionPageGroup = await db.pageGroup.finalReflection.getFinalReflectionPageGroup(
        scenarioID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...finalReflectionPageGroup,
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
      const { body_text: bodyText = null, prompts = null } = req.body;

      if (!bodyText) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'body_text' is not defined"));
      }

      if (!prompts) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'prompts' is not defined"));
      }

      try {
        const finalReflectionPageGroup = await db.pageGroup.finalReflection.createFinalReflectionPageGroup(
          scenarioID,
          bodyText,
          prompts
        );
        res.status(httpStatusCode.success.CREATED);
        res.json({
          success: true,
          ...finalReflectionPageGroup,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;

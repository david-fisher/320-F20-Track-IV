const router = require("express").Router({ mergeParams: true });
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get("/", headers.areHeadersValid, auth.isAuthenticated, async (req, res) => {
    const { simulation_id: scenarioID } = req.params;

    try {
      const taskPageGroup = await db.pageGroup.task.getTaskPageGroup(
        scenarioID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...taskPageGroup,
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
      const { body_text: bodyText = null } = req.body;

      if (!bodyText) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse("'body_text' is not defined"));
      }

      try {
        console.log(scenarioID);
        const taskPageGroup = await db.pageGroup.task.createTaskPageGroup(
          scenarioID,
          bodyText
        );
        res.status(httpStatusCode.success.CREATED);
        res.json({
          success: true,
          ...taskPageGroup,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;

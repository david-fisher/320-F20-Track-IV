const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get("/", headers.areHeadersValid, auth.isAuthenticated, async (req, res) => {
    const { simulation_id: scenarioID } = req.params;

    try {
      const initialActionSubsequentPageGroup = await db.pageGroup.initialActionSubsequent.getInitialActionSubsequentPageGroup(
        scenarioID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...initialActionSubsequentPageGroup,
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
      let bodyText;
      try {
        bodyText = req.body.bodyText;
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse(error.message));
      }

      try {
        const initialActionSubsequentPageGroup = await db.pageGroup.initialActionSubsequent.createInitialActionSubsequentPageGroup(
          scenarioID,
          bodyText
        );
        res.status(httpStatusCode.success.CREATED);
        res.json({
          success: true,
          ...initialActionSubsequentPageGroup,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;

const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/mcq-option/:mcq_option_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { mcq_option_id: mcqOptionID } = req.params;
      try {
        const mcqOption = await db.mcqOption.getMcqOption(mcqOptionID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...mcqOption,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/mcq-option/:mcq_option_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { mcq_option_id: mcqOptionID } = req.params;
      let { option = null } = req.body;

      try {
        const mcqOption = await db.mcqOption.getMcqOption(mcqOptionID);
        option = option || mcqOption.option;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.mcqOption.updateMcqOption(mcqOptionID, option);
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

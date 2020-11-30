const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/prompt-response/:response_id/:prompt_num",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { response_id: responseID, prompt_num: promptNum } = req.params;

      try {
        const promptResponse = await db.promptResponse.getPromptResponse(
          responseID,
          promptNum
        );
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...promptResponse,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/prompt-response/:response_id/:prompt_num",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { response_id: responseID, prompt_num: promptNum } = req.params;
      const { response } = req.body;

      try {
        await db.promptResponse.getPromptResponse(responseID, promptNum);
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.promptResponse.updateMcqResponse(
          responseID,
          promptNum,
          response
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

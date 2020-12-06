const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/prompt/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      try {
        const prompt = await db.prompt.getPrompt(pageID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...prompt,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/prompt/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      let { prompt: promptContent = null } = req.body;

      try {
        const prompt = await db.prompt.getPrompt(pageID);
        promptContent = promptContent || prompt.prompt;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.prompt.updatePrompt(pageID, promptContent);
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

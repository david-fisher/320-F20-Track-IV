const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/mcq/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      try {
        const mcq = await db.mcq.getMcq(pageID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...mcq,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/mcq/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      let { content = null } = req.body;

      try {
        const mcq = await db.mcq.getMcq(pageID);
        content = content || mcq.content;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.mcq.updateMcq(pageID, content);
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

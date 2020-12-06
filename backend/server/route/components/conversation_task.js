const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/converstaion-task/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      try {
        const conversationTask = await db.conversationTask.getConversationTask(
          pageID
        );
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...conversationTask,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/converstaion-task/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      let { content = null } = req.body;

      try {
        const conversationTask = await db.conversationTask.getConversationTask(
          pageID
        );
        content = content || conversationTask.content;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.conversationTask.updateConversationTask(pageID, content);
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

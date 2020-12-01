const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/conversation-choices/:response_id/:conversation_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const {
      conversation_id: conversationID,
      response_id: responseID,
    } = req.params;

    try {
      const conversationChoice = await db.conversationChoices.getConversationChoice(
        responseID,
        conversationID
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...conversationChoice,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;

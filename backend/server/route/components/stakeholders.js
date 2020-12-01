const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/stakeholders/:stakeholder_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { stakeholder_id: stakeholderID } = req.params;

      try {
        const stakeholder = await db.stakeholders.getStakeholder(stakeholderID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...stakeholder,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/stakeholders/:stakeholder_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { stakeholder_id: stakeholderID } = req.params;
      let { name = null, description = null, conversation = null } = req.body;

      try {
        const stakeholder = await db.stakeholders.getStakeholder(stakeholderID);
        name = name || stakeholder.name;
        description = description || stakeholder.description;
        conversation = conversation || stakeholder.conversation;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.stakeholders.updateStakeholder(
          stakeholderID,
          name,
          description,
          conversation
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

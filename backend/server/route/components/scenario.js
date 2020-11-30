const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/scenario/:scenario_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { scenario_id: scenarioID } = req.params;
      try {
        const scenario = await db.scenario.getScenario(scenarioID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...scenario,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/scenario/:scenario_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { scenario_id: scenarioID } = req.params;
      let {
        name = null,
        due_date: dueDate = null,
        description = null,
        status = null,
        additional_data: additionalData = null,
      } = req.body;

      try {
        const scenario = await db.scenario.getScenario(scenarioID);
        name = name || scenario.name;
        dueDate = dueDate || scenario.due_date;
        description = description || scenario.description;
        status = status || scenario.status;
        additionalData = additionalData || scenario.additional_data;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.scenario.updateScenario(
          scenarioID,
          name,
          dueDate,
          description,
          status,
          additionalData
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

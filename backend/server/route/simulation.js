const router = require("express").Router();
const db = require("../db");

const { auth, headers } = require("../middleware");
const { httpStatusCode } = require("../constant");
const { createInvalidResponse } = require("../utils");
const pages = require("./pages");

router.post(
  "/create",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const {
      simulation_title,
      simulation_desc,
      simulation_introduction,
    } = req.body;

    let scenario;
    try {
      const fortnightAway = new Date(Date.now() + 12096e5);
      scenario = await db.scenario.createScenario(
        simulation_title,
        fortnightAway,
        simulation_desc,
        "DRAFT",
        "<additional data>"
      );
    } catch (error) {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      return res.json(createInvalidResponse(error.message));
    }

    try {
      await db.pageGroup.intro.createIntroPageGroup(
        scenario.id,
        simulation_introduction
      );
      db.partof.createConnectionOfScenarioAndCourse(scenario.id, 3); // TODO: 3 must be changed to real course id

      res.status(httpStatusCode.success.CREATED);
      res.json({
        success: true,
        simulation_id: scenario.id,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.delete(
  "/:simulation_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { simulation_id: scenarioID } = req.params;

    try {
      await db.scenario.deleteScenario(scenarioID);
      res.status(httpStatusCode.success.DELETED);
      res.json({
        success: true,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.post(
  "/:simulation_id/start",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { simulation_id: scenarioID } = req.params;

    let scenario;
    try {
      scenario = await db.scenario.getScenario(scenarioID);
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    try {
      await db.scenario.updateScenario(
        scenarioID,
        scenario.name,
        scenario.dueDate,
        scenario.description,
        "PUBLISHED",
        scenario.additionalData
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

router.post(
  "/:simulation_id/close",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { simulation_id: scenarioID } = req.params;
    let scenario;

    try {
      scenario = await db.scenario.getScenario(scenarioID);
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    try {
      await db.scenario.updateScenario(
        scenarioID,
        scenario.name,
        scenario.dueDate,
        scenario.description,
        "CLOSED",
        scenario.additionalData
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

router
  .get(
    "/:simulation_id/description",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { simulation_id: scenarioID } = req.params;
      try {
        const scenario = await db.scenario.getScenario(scenarioID);
        res.status(httpStatusCode.success.OK);
        res.json({
          description: scenario.description,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/:simulation_id/description",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { simulation_id: scenarioID } = req.params;
      let description;
      try {
        description = req.body.description;
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse(error.message));
      }

      let scenario;
      try {
        scenario = await db.scenario.getScenario(scenarioID);
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        return res.json(createInvalidResponse(error.message));
      }

      try {
        await db.scenario.updateScenario(
          scenarioID,
          scenario.name,
          scenario.dueDate,
          description,
          scenario.status,
          scenario.additionalData
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

router.use("/:simulation_id", pages);

module.exports = router;

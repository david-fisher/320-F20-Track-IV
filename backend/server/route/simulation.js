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
      name: simulation_title,
      description: simulation_desc,
      due_date: due_date_string,
      status,
      additional_data
    } = req.body;

    let scenario;
    try {
      const due_date = new Date(due_date_string);

      scenario = await db.scenario.createScenario(
        simulation_title,
        due_date,
        simulation_desc,
        status || "DRAFT",
        additional_data || "<additional data>"
      );
      await db.partof.createConnectionOfScenarioAndCourse(scenario.id, 1);
      res.json({
          success: true,
          simulation_id: scenario.id,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      return res.json(createInvalidResponse(error.message));
    }
    // try {
    //   await db.pageGroup.intro.createIntroPageGroup(
    //     scenario.id,
    //     simulation_introduction
    //   );
    //   db.partof.createConnectionOfScenarioAndCourse(scenario.id, 3); // TODO: 3 must be changed to real course id
    //
    //   res.status(httpStatusCode.success.CREATED);
    //   res.json({
    //     success: true,
    //     simulation_id: scenario.id,
    //   });
    // } catch (error) {
    //   res.status(httpStatusCode.failed.BAD_REQUEST);
    //   res.json(createInvalidResponse(error.message));
    // }
  }
);

router
  .get(
    "/:simulation_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { simulation_id: scenarioID } = req.params;
      try {
        const scenario = await db.scenario.getScenario(scenarioID);
        res.status(httpStatusCode.success.OK);
        res.json({
          simulation: scenario,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/:simulation_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { simulation_id: scenarioID } = req.params;
      let name, dueDate, description, status, additionalData;
      try {
        name = req.body.name || null;
        dueDate = req.body.due_date || null;
        description = req.body.description || null;
        status = req.body.status || null;
        additionalData = req.body.additionalData || null;
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
        name = name || scenario.name;
        dueDate = dueDate || scenario.due_date;
        description = description || scenario.description;
        status = status || scenario.status;
        additionalData = additionalData || scenario.additional_data;
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
  )
  .delete(
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

router.use("/:simulation_id", pages);

module.exports = router;

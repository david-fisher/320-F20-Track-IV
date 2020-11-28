const router = require("express").Router();
const db = require("../db");

const { auth, headers } = require("../middleware");
const { httpStatusCode } = require("../constant");
const { createInvalidResponse } = require("../utils");

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

    // try {
      const fortnightAway = new Date(Date.now() + 12096e5);
      await db.createScenario(
        simulation_title,
        fortnightAway,
        simulation_desc,
        "DRAFT",
        "<additional data>"
      );
      const simulation_id = await db.retrieveLatestScenarioID();
      await db.createIntroPage(simulation_id, simulation_introduction);
      db.createConnectionOfScenarioAndCourse(simulation_id, 3); // TODO: 3 must be changed to real course id

      res.status(httpStatusCode.success.CREATED);
      res.json({
        success: true,
        simulation_id: simulation_id,
      });
  }
);

router.delete(
  "/:simulation_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    /*
    TODO: remove saved simulation

    - path parameter
    * simulation_id: UID of simulation to be removed.
  */
    res.status(202);
    res.json({
      success: true,
    });
  }
);

router.post(
  "/:simulation_id/start",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { available_to } = req.body;
    /*
    TODO: start and open a simulation

    - path parameter
    * simulation_id: UID of simulation to be opened.

    - request body
    * available_to: UID of students who can access the simulation.
  */
    res.status(202);
    res.json({
      success: true,
    });
  }
);

router.post(
  "/:simulation_id/close",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    /*
    TODO: close a simulation

    - path parameter
    * simulation_id: UID of simulation to be closed.
  */
  res.status(202);
  res.json({
    success: true,
  });
});


router.get(
  "/:simulation_id/description",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const ERROR_CODE = 50650;
    try {
      const description = db.getScenarioDescription(req.params.simulation_id);
      res.status(httpStatusCode.success.OK);
      res.json({
        description: description,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.put(
  "/:simulation_id/description",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    try {
      db.setScenarioDescription(req.params.simulation_id, req.body.description);
      res.status(httpStatusCode.success.UPDATED);
      res.json({
        description: req.body.description,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.get(
  "/:simulation_id/introduction",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    try {
      const introduction = db.getSimulationIntroduction(
        req.params.simulation_id
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        summary: introduction,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.put(
  "/:simulation_id/introduction",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    try {
      const introduction = db.getSimulationIntroductionByID(
        req.params.simulation_id
      );
      res.status(httpStatusCode.success.OK);
      res.json({
        summary: introduction,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

router.put(
  "/:simulation_id/initial-reflection",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { description, questions } = req.body;

    /*
    TODO: Add or update `initial-reflection` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `initial-reflection` is updated.

    - request body:
    * description: content of `initial-reflection`
    * questions: list of questions
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put(
  "/:simulation_id/initial-action",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { description, choices } = req.body;

    /*
    TODO: Add or update `initial-action` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `initial-action` is updated.

    - request body:
    * description: content of `initial-action`
    * choices: list of choices
  */

    res.status(202);
    res.json({
      success: true,
    });
  }
);

router.put(
  "/:simulation_id/stakeholders/description",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { description } = req.body;

    /*
    TODO: Add or update a summary for all of the stakeholders

    - path variable:
    * simulation_id: UID of simuluation whose a summary for all of the stakeholders is updated.

    - request body:
    * description: content of a summary for all of the stakeholders
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put(
  "/:simulation_id/stakeholders",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { name, description, conversation_text } = req.body;

    /*
    TODO: Add or update `stakeholder-list` part of simulation

    - path variable:
    * simulation_id: UID of simuluation where a stakeholder is added or updated

    - request body:
    * name: name of a stakeholder
    * description: short description of a new stakeholder
    * conversation_text: content of conversation with a new stakeholder
  */

    res.status(202);
    res.json({
      success: true,
    });
  }
);

router.put(
  "/:simulation_id/additional-reflection",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { description, questions } = req.body;

    /*
    TODO: Add or update `additional-reflection` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `additional-reflection` is updated.

    - request body:
    * description: content of `additional-reflection`
    * questions: list of questions
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put(
  "/:simulation_id/final-action",
  headers.areHeadersValid,
  auth.isAuthenticated,
  (req, res) => {
    const { simulation_id } = req.params;
    const { description, choices } = req.body;

    /*
    TODO: Add or update `final-action` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `final-action` is updated.

    - request body:
    * description: content of `final-action`
    * choices: list of choices
  */

    res.status(202);
    res.json({
      success: true,
    });
  }
);

module.exports = router;

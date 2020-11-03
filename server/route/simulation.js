const router = require("express").Router();
const { isAuthenticated, validateToken } = require("../auth");
const helper = require("../helper.js");
const db = require("../db");
const BB_ERROR_CODES = require("../constants.js");

router.post("/create", isAuthenticated, (req, res) => {
  const { simulation_name } = req.body;

  /*
    TODO: create a new simulation

    - request body
    * simulation_name: name for a new simulation
  */

  res.status(202);
  res.json({
    success: true,
    simulation_id: 1234567,
  });
});

router.get("/:simulation_id/introduction", isAuthenticated, (req, res) => {
  const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_SIMULATION_INTRODUCTION; //ERROR CODE FOR DASHBOARD

  const header_validation = helper.VALIDATE_HEADERS(req.headers, ERROR_CODE);
  if (header_validation.status != 202) {
    // TODO: error code required
    res.json(header_validation);
  }

  //validate token
  if (!validateToken(header_validation.token)) {
    const error_description = "Invalid authorization token.";
    // TODO: error code required
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }

  const token = header_validation.token;
  //db interface
  const introduction = db.getSimulationIntroductionByID(token, req.params.simulation_id);
  if (introduction != 404) {
    res.status(202);
    res.json({
      summary: introduction,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    // TODO: error code required
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});
router.put("/:simulation_id/introduction", isAuthenticated, (req, res) => {
  const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_SIMULATION_INTRODUCTION; //ERROR CODE FOR DASHBOARD

  const header_validation = helper.VALIDATE_HEADERS(req.headers, ERROR_CODE, true);
  if (header_validation.status != 202) {
    // TODO: error code required
    res.json(header_validation);
  }

  //validate token
  if (!validateToken(header_validation.token)) {
    const error_description = "Invalid authorization token.";
    // TODO: error code required
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }

  const token = header_validation.token;
  //db interface
  const status = db.setSimulationIntroductionByID(token, req.params.simulation_id, req.body.summary);
  if (status != 404) {
    res.send(202);
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    // TODO: error code required
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});
router.put("/:simulation_id/introduction", isAuthenticated, (req, res) => {
  const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_SIMULATION_INTRODUCTION; //ERROR CODE FOR DASHBOARD

  const header_validation = helper.VALIDATE_HEADERS(req.headers, ERROR_CODE);
  if (header_validation.status != 202) {
    // TODO: error code required
    return res.json(header_validation);
  }

  //validate token
  if (!validateToken(header_validation.token)) {
    const error_description = "Invalid authorization token.";
    // TODO: error code required
    return res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }

  const token = header_validation.token;
  //db interface
  const introduction = db.getSimulationIntroductionByID(token, req.params.simulation_id);
  if (introduction != 404) {
    res.status(202);
    res.json({
      summary: introduction,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    // TODO: error code required
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});

router.put("/:simulation_id/project-task-assignment", isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description } = req.body;

  /*
    TODO: Add or update `project-task-assignment` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `project-task-assignment` is updated.

    - request body:
    * description: content of `project-task-assignment`
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put("/:simulation_id/initial-reflection", isAuthenticated, (req, res) => {
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

router.put("/:simulation_id/initial-action", isAuthenticated, (req, res) => {
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
});

router.put("/:simulation_id/stakeholders/description", isAuthenticated, (req, res) => {
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

router.put("/:simulation_id/stakeholders", isAuthenticated, (req, res) => {
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
});

router.put("/:simulation_id/additional-reflection", isAuthenticated, (req, res) => {
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

router.put("/:simulation_id/final-action", isAuthenticated, (req, res) => {
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
});

module.exports = router;

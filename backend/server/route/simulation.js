const router = require("express").Router();
const { isAuthenticated, validateToken } = require("../auth");
const helper = require("../helper.js");
const db = require("../db");
const constants = require("../constants.js");

router.post("/create", isAuthenticated, async (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status !== 202) {
    return res.json(authorization);
  }

  const { simulation_title, simulation_desc, simulation_introduction } = req.body;

  try {
    const simulation_id = await db.createScenario(simulation_title, simulation_desc);
    const response = await db.createIntroPage(simulation_id, simulation_introduction);
    if (200 <= response && response < 300) {
      throw new Error(response);
    }
    db.addScenarioToCourse(simulation_id, 3); // TODO: 3 must be changed to real course id

    res.status(202);
    res.json({
      success: true,
      simulation_id: simulation_id,
    });
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
    });
  }
});

router.delete("/:simulation_id", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
});

router.post("/:simulation_id/start", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
});

router.post("/:simulation_id/close", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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

router.get("/:simulation_id/description", isAuthenticated, async (req, res) => {
  const ERROR_CODE = 50650;
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

  //db interface
  const description = await db.getScenarioDescription(req.params.simulation_id);
  console.log(description);
  if (description != 404) {
    res.status(202);
    res.json({
      description: description,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    const error_code = constants.ERROR_CODE_INVALID_SIMULATION_ID;
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});

router.put("/:simulation_id/description", isAuthenticated, async (req, res) => {
  const ERROR_CODE = 50650;
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

  //db interface
  const description = req.body.description;
  let response = await db.setScenarioDescription(req.params.simulation_id, description);
  if (response != 404) {
    res.status(202);
    res.json({
      description: description,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    const error_code = constants.ERROR_CODE_INVALID_SIMULATION_ID;
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});

router.get("/:simulation_id/introduction", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

  //db interface
  const introduction = db.getSimulationIntroduction(req.params.simulation_id);
  console.log(introduction);
  if (introduction != 404) {
    res.status(202);
    res.json({
      summary: introduction,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    const error_code = constants.ERROR_CODE_INVALID_SIMULATION_ID;
    res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }
});

router.put("/:simulation_id/introduction", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

  //db interface
  const introduction = db.getSimulationIntroductionByID(token, req.params.simulation_id);
  if (introduction != 404) {
    res.status(202);
    res.json({
      summary: introduction,
    });
  } else {
    const error_description = `No simulation found with id ${req.params.simulation_id}.`;
    const error_code = constants.ERROR_CODE_INVALID_SIMULATION_ID;
    res.json(helper.INVALID_RESPONSE(error_code, error_description));
  }
});

router.put("/:simulation_id/initial-reflection", isAuthenticated, (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

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

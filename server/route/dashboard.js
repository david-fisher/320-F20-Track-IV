const router = require("express").Router();
require("dotenv").config(); //env vars
const { isAuthenticated, validateToken } = require("../auth");
const helper = require("../helper.js");
const db = require("../db");
const BB_ERROR_CODES = require("../constants.js");

router.get("/", isAuthenticated, (req, res) => {
  const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_INSTRUCTOR_DASHBOARD; //ERROR CODE FOR DASHBOARD

  const header_validation = helper.VALIDATE_HEADERS(req.headers, ERROR_CODE);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  //validate token
  if (!validateToken(header_validation.token)) {
    // TODO: error code required
    const error_description = "Invalid authorization token.";
    return res.json(helper.INVALID_RESPONSE(ERROR_CODE, error_description));
  }

  const token = header_validation.token;

  res.status(202);
  res.json({
    drafts: db.getDraftedSimulations(token),
    closed: db.getClosedSimulations(token),
    open: db.getOpenSimulations(token),
  });
});

router.delete("/simulation/:simulation_id", isAuthenticated, (req, res) => {
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

router.post("/simulation/:simulation_id/start", isAuthenticated, (req, res) => {
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

router.post("/simulation/:simulation_id/close", isAuthenticated, (req, res) => {
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

module.exports = router;

const router = require("express").Router();
require("dotenv").config(); //env vars
const { isAuthenticated, validateToken } = require("../auth");
const helper = require("../helper.js");
const db = require("../db");
const constants = require("../constants.js");

router.get("/", isAuthenticated, async (req, res) => {
  const header_validation = helper.VALIDATE_HEADERS(req.headers);
  if (header_validation.status != 202) {
    return res.json(header_validation);
  }

  const token = header_validation.token;
  const authorization = helper.VALIDATE_AUTHORIZATION(token);
  if (header_validation.status != 202) {
    return res.json(authorization);
  }

  res.status(202);
  res.json({
    drafts: await db.getDraftedScenarios(token),
    closed: await db.getClosedScenarios(token),
    open: await db.getOpenScenarios(token),
  });
});

module.exports = router;

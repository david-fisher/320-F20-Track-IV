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
  let drafted = await db.getScenariosBy({status: "DRAFT"});
  let published = await db.getScenariosBy({status: "PUBLISHED"});
  let closed = await db.getScenariosBy({status: "CLOSED"});
  // console.log(drafts);
  // db.scenario.getScenariosBy

  res.status(202);
  res.json({
    drafts: drafted,
    closed: closed,
    open: published,
  });
});

module.exports = router;

const router = require("express").Router();
const { auth, headers } = require("../middleware");
const db = require("../db");

router.get(
  "/",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { token } = req;
    res.status(202);
    res.json({
      drafts: await db.getDraftedScenarios(token),
      closed: await db.getClosedScenarios(token),
      open: await db.getOpenScenarios(token),
    });
  }
);

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

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

module.exports = router;

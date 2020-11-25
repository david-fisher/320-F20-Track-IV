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
      drafts: await db.getScenariosBy({status: "DRAFT"}),
      closed: await db.getScenariosBy({status: "PUBLISHED"}),
      open: await db.getScenariosBy({status: "CLOSED"}),
    });
  }
);

module.exports = router;

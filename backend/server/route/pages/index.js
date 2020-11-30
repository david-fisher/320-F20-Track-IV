const router = require("express").Router();

router
  .use("/introduction", require("./intro"))
  .use("/task", require("./task"))
  .use("/initial-reflection", require("./initial-reflection"))
  .use("/initial-action", require("./initial-action"))
  .use("/initial-action-subsequent", require("./initial-action-subsequent"))
  .use("/conversation", require("./conversation"))
  .use("/middle-reflection", require("./middle-reflection"))
  .use("/final-action", require("./final-action"))
  .use("/summary", require("./summary"))
  .use("/feedback", require("./feedback"))
  .use("/final-reflection", require("./final-reflection"))
  .use("/conclusion", require("./conclusion"));

module.exports = router;

const auth = require("./auth");
const dashboard = require("./dashboard");
const simulation = require("./simulation");
const components = require("./components");
const router = require("express-promise-router")();

router.use("/auth", auth);
router.use("/dashboard", dashboard);
router.use("/simulation", simulation);
router.use("/com", components);

module.exports = router;

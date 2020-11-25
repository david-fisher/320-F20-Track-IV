const { httpStatusCode } = require("../constant");
const { createInvalidResponse } = require("../utils");

exports.isAuthenticated = (req, res, next) => {
  if (process.env.NODE_ENV === "dev") return next();
  if (req.isAuthenticated()) return next();
  const msg = "Invalid authorization token.";
  res.status(httpStatusCode.failed.UNAUTHORIZED);
  res.json(createInvalidResponse(msg));
};

exports.isNotAuthenticated = (req, res, next) => {
  if (process.env.NODE_ENV === "dev") return next();
  if (!req.isAuthenticated()) return next();
  const msg = "The user already has valid token.";
  res.status(httpStatusCode.failed.UNAUTHORIZED);
  res.json(createInvalidResponse(msg));
};

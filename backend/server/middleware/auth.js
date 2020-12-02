const jwt = require("jsonwebtoken");
const { httpStatusCode } = require("../constant");
const { createInvalidResponse } = require("../utils");

exports.isAuthenticated = (req, res, next) => {
  // if (process.env.NODE_ENV === "dev") return next();

  if (
    !req.headers.hasOwnProperty("Authorization") &&
    !req.headers.hasOwnProperty("authorization")
  ) {
    const msg = "Missing authorization token.";
    res.status(httpStatusCode.failed.UNAUTHORIZED);
    res.json(createInvalidResponse(msg));
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    const msg = "Invalid authorization token.";
    res.status(httpStatusCode.failed.UNAUTHORIZED);
    res.json(createInvalidResponse(msg));
  }
};

exports.isNotAuthenticated = (req, res, next) => {
  // if (process.env.NODE_ENV === "dev") return next();

  if (
    !req.headers.hasOwnProperty("Authorization") &&
    !req.headers.hasOwnProperty("authorization")
  ) {
    next();
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    req.user = jwt.verify(token+"d", process.env.JWT_SECRET);
    const msg = "The user already has valid token.";
    res.status(httpStatusCode.failed.UNAUTHORIZED);
    res.json(createInvalidResponse(msg));
  } catch (err) {
    next();
  }
};

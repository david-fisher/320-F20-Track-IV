const { httpStatusCode, headers } = require("../constant");
const { createInvalidResponse } = require("../utils");

const defaultHeadersEntries = Object.entries(headers.DEFAULT_HEADERS);

const getKeysOfInvalidHeaders = (headers) => {
  return defaultHeadersEntries
    .filter((defaultHeaderEntries) => {
      const [key, value] = defaultHeaderEntries;
      return (
        !(key.toLowerCase() in headers) ||
        headers[key.toLowerCase()] !== value.toLowerCase()
      );
    })
    .map((missingHeaderEntries) => missingHeaderEntries[0]);
};

const createAuthenticator = (token = null) => {
  return token
    ? () => {
        // TODO: check if token is correct (by Jakob, with shibboleth)
        return !!token;
      }
    : () => false;
};

// middlewares
const isDefaultHeadersMissing = (req, res, next) => {
  const keys = getKeysOfInvalidHeaders(req.headers);
  if (keys.length > 0) {
    const msg = `Missing header(s): ${keys.join(", ")}`;
    res.status(httpStatusCode.failed.BAD_REQUEST);
    return res.json(createInvalidResponse(msg));
  }

  next();
};

const isAuthHeaderValid = (req, res, next) => {
  const { headers } = req;
  const auth_header = headers["Authorization"] || headers["authorization"];

  if (!auth_header) {
    // No tokens => login required
    next();
    return;
  }

  const [prefix, token] = auth_header.split(" ");
  if (!(prefix && token)) {
    const msg = "Invalid authorization format. Method requires Bearer token.";
    res.status(httpStatusCode.failed.BAD_REQUEST);
    return res.json(createInvalidResponse(msg));
  }

  if (prefix.toLowerCase() !== "bearer") {
    const msg = "Invalid authorization format. Method requires Bearer token.";
    res.status(httpStatusCode.failed.BAD_REQUEST);
    return res.json(createInvalidResponse(msg));
  }

  next();
};

const addAuthenticatorToRequest = (req, res, next) => {
  const { headers } = req;
  const auth_header = headers["Authorization"] || headers["authorization"];
  if (auth_header) {
    const token = auth_header.split(" ")[1];
    req.isAuthenticated = createAuthenticator(token);
  } else {
    req.isAuthenticated = createAuthenticator();
  }

  next();
};

exports.areHeadersValid = [
  isDefaultHeadersMissing,
  isAuthHeaderValid,
  addAuthenticatorToRequest,
];

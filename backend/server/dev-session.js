require("dotenv").config();
const session = {
  byToken: {},
  byUserID: {},
};
let tokenTicket = 1000000000;

exports.getUserIdByToken = (token) => {
  if (process.env.NODE_ENV !== "dev") {
    throw new Error("getUserIdByToken is only available for dev");
  }
  if (!(token in session.byToken)) {
    return null;
  }

  return session.byToken[token];
};

exports.getTokenByUserId = (userID) => {
  if (process.env.NODE_ENV !== "dev") {
    throw new Error("getUserIdByToken is only available for dev");
  }

  if (!(userID in session.byUserID)) {
    return null;
  }

  return session.byUserID[userID];
};

exports.createSession = (userID) => {
  if (process.env.NODE_ENV !== "dev") {
    throw new Error("getUserIdByToken is only available for dev");
  }

  if (!(userID in session.byUserID)) {
    return session.byUserID[userID];
  }

  const token = `${tokenTicket++}`;
  session.byToken[token] = userID;
  session.byUserID[userID] = token;
  return token;
};

exports.removeSession = (token) => {
  if (process.env.NODE_ENV !== "dev") {
    throw new Error("getUserIdByToken is only available for dev");
  }

  if (!(token in session.byToken)) {
    return;
  }

  const userID = session.byToken[token];
  delete session.byToken[token];
  delete session.byUserID[userID];
};

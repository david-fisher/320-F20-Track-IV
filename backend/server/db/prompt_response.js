const db = require("../models");
const response = require("./response");
const prompt = require("./prompt");

exports.getPromptResponse = async function (responseID, promptNum) {
  const query =
    "SELECT * FROM prompt_response WHERE response_id = $1 and prompt_num = $2";
  const { rows } = await db.query(query, [responseID, promptNum]);
  return rows.length !== 0 ? rows[0] : null;
};

exports.createPromptResponse = async function (
  responseID,
  promptNum,
  responseValue
) {
  const responseObj = await response.getResponse(responseID);
  if (!responseObj) {
    throw new Error("Cannot find a response where response of mcq must belong");
  }

  const pageID = responseObj.page_id;
  if (!(await prompt.getPrompt(pageID, promptNum))) {
    throw new Error("Cannot find a question where response of mcq must belong");
  }

  const query = "insert into prompt_response values($1, $2, $3)";
  const { rows } = await db.query(query, [
    responseID,
    promptNum,
    responseValue,
  ]);
  return rows[0];
};

exports.updatePromptResponse = async function (
  responseID,
  promptNum,
  responseValue
) {
  const responseObj = await response.getResponse(responseID);
  if (!responseObj) {
    throw new Error("Cannot find a response where response of mcq must belong");
  }

  const pageID = responseObj.page_id;
  if (!(await prompt.getPrompt(pageID, promptNum))) {
    throw new Error("Cannot find a question where response of mcq must belong");
  }

  const query =
    "UPDATE prompt_response SET response = $3 WHERE response_id = $1 and prompt_num = $2";
  const { rows } = await db.query(query, [
    responseID,
    promptNum,
    responseValue,
  ]);
  return rows[0];
};

exports.deletePromptResponse = async function (responseID, promptNum) {
  const query =
    "DELETE FROM prompt_response WHERE response_id = $1 and prompt_num = $2";
  const { rows } = await db.query(query, [responseID, promptNum]);
  return rows[0];
};

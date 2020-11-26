const pool = require("./pool");
const response = require("./response");
const prompt = require("./prompt");

exports.getPromptResponse = async function (responseID, promptNum) {
  const query =
    "SELECT * FROM prompt_response WHERE response_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [responseID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
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

  const query = "INSERT INTO prompt_response VALUES($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [
    responseID,
    promptNum,
    responseValue,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updatePromptResponse = async function (
  responseID,
  promptNum,
  responseValue
) {
  const responseObj = await response.getResponse(responseID);
  if (!responseObj) {
    return null;
  }

  const pageID = responseObj.page_id;
  if (!(await prompt.getPrompt(pageID, promptNum))) {
    return null;
  }

  const query =
    "UPDATE prompt_response SET response = $3 WHERE response_id = $1 and prompt_num = $2 RETURNING *";
  const { rows } = await pool.query(query, [
    responseID,
    promptNum,
    responseValue,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deletePromptResponse = async function (responseID, promptNum) {
  const query =
    "DELETE FROM prompt_response WHERE response_id = $1 and prompt_num = $2 RETURNING *";
  const { rows } = await pool.query(query, [responseID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

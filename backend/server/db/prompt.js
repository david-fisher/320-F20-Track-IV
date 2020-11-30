const pool = require("./pool");

const getPrompt = async function (pageID, promptNum) {
  const query = "SELECT * FROM prompt WHERE page_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [pageID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

const createPrompt = async function (pageID, prompt) {
  const query = "INSERT INTO prompt VALUES($1, $2, DEFAULT) RETURNING *";
  const { rows } = await pool.query(query, [pageID, prompt]);
  return rows.length > 0 ? rows[0] : null;
};

const updatePrompt = async function (pageID, promptNum, prompt) {
  const query =
    "UPDATE prompt SET prompt = $3 WHERE page_id = $1 and prompt_num = $2 RETURNING *";
  const { rows } = await pool.query(query, [pageID, promptNum, prompt]);
  return rows.length > 0 ? rows[0] : null;
};

const deletePrompt = async function (pageID, promptNum) {
  const query =
    "DELETE FROM prompt WHERE page_id = $1 and prompt_num = $2 RETURNING *";
  const { rows } = await pool.query(query, [pageID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getPrompt,
  createPrompt,
  updatePrompt,
  deletePrompt,
};

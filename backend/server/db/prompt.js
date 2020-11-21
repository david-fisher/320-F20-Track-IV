const pool = require("./pool");

exports.getPrompt = async function (pageID, promptNum) {
  const query = "SELECT * FROM prompt WHERE page_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [pageID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

exports.createPrompt = async function (pageID, prompt) {
  const query = "insert into prompt values($1, $2, DEFAULT)";
  const { rows } = await pool.query(query, [pageID, prompt]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updatePrompt = async function (pageID, promptNum, text) {
  const query =
    "UPDATE prompt SET body_text = $3 WHERE page_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [pageID, promptNum, text]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deletePrompt = async function (pageID, promptNum) {
  const query = "DELETE FROM prompt WHERE page_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [pageID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

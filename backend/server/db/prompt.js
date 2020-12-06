const pool = require("./pool");

const getPrompt = async function (pageID, promptNum) {
  const query = "SELECT * FROM prompt WHERE page_id = $1 and prompt_num = $2";
  const { rows } = await pool.query(query, [pageID, promptNum]);
  return rows.length > 0 ? rows[0] : null;
};

const getPromptsBy = async function ({ pageID = null }) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "id",
    value: pageID,
    pos: pageID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `pages.${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from pages WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createPrompt = async function (pageID, prompt, promptNum) {
  const query = "INSERT INTO prompt VALUES($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [pageID, prompt, promptNum]);
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
  getPromptsBy,
  createPrompt,
  updatePrompt,
  deletePrompt,
};

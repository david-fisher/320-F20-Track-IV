const pool = require("./pool");

const getMcq = async function (pageID) {
  const query = "SELECT * FROM mcq WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};
const createMcq = async function (pageID) {
  const query = "INSERT INTO mcq VALUES($1) RETURNING *";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

const updateMcq = async function (pageID, text) {
  const query = "UPDATE mcq SET body_text = $2 WHERE page_id = $1 RETURNING *";
  const { rows } = await pool.query(query, [pageID, text]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteMcq = async function (pageID) {
  const query = "DELETE FROM mcq WHERE page_id = $1 RETURNING *";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getMcq,
  createMcq,
  updateMcq,
  deleteMcq,
};

const pool = require("./pool");

const getConversationTask = async function (pageID) {
  const query = "SELECT * FROM conversation_task WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};
const createConversationTask = async function (pageID, content) {
  const query = "INSERT INTO conversation_task VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [pageID, content]);
  return rows.length > 0 ? rows[0] : null;
};

const updateConversationTask = async function (pageID, text) {
  const query =
    "UPDATE conversation_task SET body_text = $2 WHERE page_id = $1 RETURNING *";
  const { rows } = await pool.query(query, [pageID, text]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteConversationTask = async function (pageID) {
  const query = "DELETE FROM conversation_task WHERE page_id = $1 RETURNING *";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getConversationTask,
  createConversationTask,
  updateConversationTask,
  deleteConversationTask,
};

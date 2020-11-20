const pool = require("./pool");

exports.getConversationTask = async function (pageID) {
  const query = "SELECT * FROM conversation_task WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};
exports.createConversationTask = async function (pageID, content) {
  const query = "insert into conversation_task values($1, $2)";
  const { rows } = await pool.query(query, [pageID, content]);
  return rows.length > 0 ? rows[0] : null;
};

exports.updateConversationTask = async function (pageID, text) {
  const query =
    "UPDATE conversation_task SET body_text = $2 WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID, text]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteConversationTask = async function (pageID) {
  const query = "DELETE FROM conversation_task WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};

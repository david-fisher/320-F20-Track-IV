const pool = require("./pool");
const pages = require("./pages");

exports.getConversationTask = async function (pageID) {
  const query = "SELECT * FROM conversation_task WHERE page_id = $1";
  const { rows } = await pool.query(query, [pageID]);
  return rows.length > 0 ? rows[0] : null;
};
exports.createConversationTask = async function (pageID, content) {
  if (!(await pages.getPage(pageID))) {
    throw new Error("Cannot find a page where conversation task must belong");
  }

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

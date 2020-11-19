const db = require("../models");
const pages = require("./pages");

exports.getMcq = async function (pageID) {
  const query = "SELECT * FROM mcq WHERE page_id = $1";
  const { rows } = await db.query(query, [pageID]);
  return rows.length !== 0 ? rows[0] : null;
};
exports.createMcq = async function (pageID, content) {
  if (!(await pages.getPage(pageID))) {
    throw new Error("Cannot find a page where mcq must belong");
  }

  const query = "INSERT INTO mcq VALUES($1, $2)";
  const { rows } = await db.query(query, [pageID, content]);
  return rows[0];
};

exports.updateMcq = async function (pageID, text) {
  const query = "UPDATE mcq SET body_text = $2 WHERE page_id = $1";
  const { rows } = await db.query(query, [pageID, text]);
  return rows[0];
};

exports.deleteMcq = async function (pageID) {
  const query = "DELETE FROM mcq WHERE page_id = $1";
  const { rows } = await db.query(query, [pageID]);
  return rows[0];
};

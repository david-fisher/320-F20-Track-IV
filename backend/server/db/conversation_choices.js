const pool = require("./pool");

const getConversationChoice = async function (responseID, conversationID) {
  const query =
    "SELECT * FROM conversation_choices WHERE response_id = $1 and stakeholder_id = $2";
  const { rows } = await pool.query(query, [responseID, conversationID]);
  return rows.length > 0 ? rows[0] : null;
};

const getConversationChoicesBy = async function ({
  responseID = null,
  conversationID = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "response_id",
    value: responseID,
    pos: responseID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "conversation_id",
    value: conversationID,
    pos: conversationID ? argsPos++ : 0,
  });
  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * FROM conversation_choices WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createConversationChoice = async function (responseID, stakeholderID) {
  const query = "INSERT INTO conversation_choices VALUES($1, $2) RETURNING *";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteConversationChoice = async function (responseID, stakeholderID) {
  const query =
    "DELETE FROM conversation_choices WHERE response_id = $1 and stakeholder_id = $2 RETURNING *";
  const { rows } = await pool.query(query, [responseID, stakeholderID]);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = {
  getConversationChoice,
  getConversationChoicesBy,
  createConversationChoice,
  deleteConversationChoice,
};

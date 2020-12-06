const pool = require("./pool");

const getUser = async function (userID) {
  const query = "SELECT * FROM users WHERE id = $1";
  const { rows } = await pool.query(query, [userID]);
  return rows.length > 0 ? rows[0] : null;
};

const getUsersBy = async function ({
  fullName = null,
  email = null,
  demographics = null,
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "full_name",
    value: fullName,
    pos: fullName ? argsPos++ : 0,
  });
  queryValues.push({
    name: "email",
    value: email,
    pos: email ? argsPos++ : 0,
  });
  queryValues.push({
    name: "demographics",
    value: demographics,
    pos: demographics ? argsPos++ : 0,
  });

  const where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");

  const query = `SELECT * from users WHERE ${where}`;
  const values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);
  const { rows } = await pool.query(query, values);
  return rows;
};

const createUser = async function (fullName, email, demographics) {
  const existing = await getUsersBy({ email });
  if (existing.length > 0) {
    throw new Error("Cannot create new user with already registered email");
  }

  const query = "INSERT INTO users VALUES(DEFAULT, $1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [fullName, email, demographics]);
  return rows.length > 0 ? rows[0] : null;
};

const updateUser = async function (userID, fullName, email, demographics) {
  const query =
    "UPDATE users SET fullName = $2 and email = $3 and demographics = $4 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [
    userID,
    fullName,
    email,
    demographics,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteUser = async function (userID) {
  const query = "DELETE FROM users WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [userID]);
  return rows.length > 0 ? rows[0] : null;
};
module.exports = {
  getUser,
  getUsersBy,
  createUser,
  updateUser,
  deleteUser,
};

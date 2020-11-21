const pool = require("./pool");

const operatorList = {
  eq: "=",
  ne: "<>",
  gt: ">",
  ge: ">=",
  lt: "<",
  le: "<=",
};
exports.getResponse = async function (responseID) {
  const query = "SELECT * FROM response WHERE id = $1";
  const { rows } = await pool.query(query, [responseID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.getResponsesBy = async function ({
  submissionID = null,
  pageID = null,
  responseTime = [...{ time: null, operator: "eq" }],
}) {
  const queryValues = [];
  let argsPos = 1;

  queryValues.push({
    name: "submission_id",
    value: submissionID,
    pos: submissionID ? argsPos++ : 0,
  });
  queryValues.push({
    name: "page_id",
    value: pageID,
    pos: pageID ? argsPos++ : 0,
  });
  let where = queryValues
    .filter((el) => el.pos)
    .map((el) => `${el.name}=$${el.pos}`)
    .join(" and ");
  let values = queryValues.filter((el) => el.pos !== 0).map((el) => el.value);

  if (responseTime.length !== 0) {
    const timeQueryValues = [];

    for (let rt of responseTime) {
      timeQueryValues.push({
        name: "time",
        operator: operatorList[rt.operator],
        value: rt.time,
        pos: argsPos++,
      });
    }

    const whereTime = timeQueryValues
      .map((el) => `${el.name}${el.operator}$${el.pos}`)
      .join(" and ");
    const valuesTime = timeQueryValues.map((el) => el.value);
    where = where + " and " + whereTime;
    values = values.concat(valuesTime);
  }

  const query = `SELECT * from response WHERE ${where}`;
  const { rows } = await pool.query(query, values);
  return rows;
};
exports.createResponse = async function (submissionID, pageID) {
  const query = "INSERT INTO response VALUES($1, $2, DEFAULT)";
  const { rows } = await pool.query(query, [submissionID, pageID]);
  return rows.length > 0 ? rows[0] : null;
};

exports.deleteResponse = async function (responseID) {
  const query = "DELETE FROM response WHERE id = $1";
  const { rows } = await pool.query(query, [responseID]);
  return rows.length > 0 ? rows[0] : null;
};

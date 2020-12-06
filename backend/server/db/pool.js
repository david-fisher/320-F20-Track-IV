// require("dotenv").config();
// const construct = require("pg").Pool;
// const { Pool } = require('pg');
// module.exports.query = new Pool({
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     user: process.env.PGUSER,
// }).query;

const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};

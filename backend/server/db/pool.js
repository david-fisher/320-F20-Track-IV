require("dotenv").config();
const pool = new require("pg").Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
});
module.exports.query = pool.query;

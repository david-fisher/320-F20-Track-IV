const Pool = require('pg').Pool;
require("dotenv").config();
module.exports.pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER
});

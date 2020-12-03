const pool = require("./pool").pool;

// function Model(table) {
//   this.table = table;
//   this.pool = pool;
//   this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
// }
//
// Model.prototype.select(columns, clause) {
//   let query = `SELECT ${columns} FROM ${this.table}`;
//   if (clause) query += clause;
//   return this.pool.query(query);
// }
//
// module.exports.select = function(table, columns, clause){
//   let query = `SELECT ${columns} FROM ${this.table}`;
// }

module.exports = {
  query: (text, params) => pool.query(text, params),
}

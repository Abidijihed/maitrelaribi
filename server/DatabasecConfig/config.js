const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "134.209.228.166",
  user: "laaribi",
  port: 5900,
  password: "$Ji1961997",
  database: "maitrelaribi_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };
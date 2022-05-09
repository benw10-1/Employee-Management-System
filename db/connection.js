const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

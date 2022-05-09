const mysql = require("mysql2");
require("dotenv").config()

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

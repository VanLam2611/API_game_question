'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "sql107.epizy.com",
  user: process.env.MYSQLUSER || "epiz_33697982",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.DB_NAME || "epiz_33697982_question"
});

module.exports = db

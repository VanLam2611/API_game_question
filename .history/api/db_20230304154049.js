'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql107.epizy.com",
  user: process.env.DB_USER || "epiz_33697982",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "question"
});

module.exports = db

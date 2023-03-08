'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql107.epizy.com",
  user: process.env.DB_USERNAME || "epiz_33697982",
  port: process.env.DB_PORT || "3306",
  password: process.env.DB_PASSWORD || "vukH4wN97c7iLHl",
  database: process.env.DB_DATABASE || "epiz_33697982_question"
});

module.exports = db

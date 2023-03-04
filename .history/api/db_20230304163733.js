'use strict';
const mysql = require('mysql');
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "sql107.epizy.com",
  user: process.env.MYSQLUSER || "epiz_33697982",
  port: process.env.MYSQLPORT || "epiz_33697982",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.MYSQLDATABASE || "epiz_33697982_question"
});

module.exports = db

'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "containers-us-west-18.railway.app",
  user: process.env.MYSQLUSER || "root",
  port: process.env.MYSQLPORT || "7415",
  password: process.env.MYSQLPASSWORD || "LvkR8W2EZT3gtVfMkkP0",
  database: process.env.MYSQLDATABASE || "railway"
});

module.exports = db

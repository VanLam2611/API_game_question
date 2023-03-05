'use strict';
const mysql = require('mysql');
const dev_db_url =
  "mysql://root:LvkR8W2EZT3gtVfMkkP0@containers-us-west-18.railway.app:7415/railway";
const mongoDB = process.env.MONGODB_URI || dev_db_url;


// const db = mysql.createConnection({
//   host: process.env.MYSQLHOST || "containers-us-west-18.railway.app",
//   user: process.env.MYSQLUSER || "root",
//   port: process.env.MYSQLPORT || "7415",
//   password: process.env.MYSQLPASSWORD || "LvkR8W2EZT3gtVfMkkP0",
//   database: process.env.MYSQLDATABASE || "railway"
// });

 const db = mysql.connect(mongoDB);

module.exports = db

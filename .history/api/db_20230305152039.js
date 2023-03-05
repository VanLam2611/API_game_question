'use strict';
const mysql = require('mysql');
const dev_db_url =
  "mysql://root:LvkR8W2EZT3gtVfMkkP0@containers-us-west-18.railway.app:7415/railway";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch(err => console.log(err));
async function main() {
  await mysql.connect(mongoDB);
}
const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "railway",
  user: process.env.MYSQLUSER || "epiz_33697982",
  port: process.env.MYSQLPORT || "epiz_33697982",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.MYSQLDATABASE || "epiz_33697982_question"
});

module.exports = db

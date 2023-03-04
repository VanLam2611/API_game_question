'use strict';
const mysql = require('mysql');
const dev_db_url =
  "mongodb://mongo:5kpnLj4btxmjJOaPhH4d@containers-us-west-108.railway.app:7232";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "sql107.epizy.com",
  user: process.env.MYSQLUSER || "epiz_33697982",
  port: process.env.MYSQLPORT || "epiz_33697982",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.MYSQLDATABASE || "epiz_33697982_question"
});

module.exports = db

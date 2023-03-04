'use strict';
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "insert_your_database_url_here";

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "sql107.epizy.com",
  user: process.env.MYSQLUSER || "epiz_33697982",
  port: process.env.MYSQLPORT || "epiz_33697982",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.MYSQLDATABASE || "epiz_33697982_question"
});

module.exports = db

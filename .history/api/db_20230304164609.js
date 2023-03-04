'use strict';
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = "mongodb://mongo:5kpnLj4btxmjJOaPhH4d@containers-us-west-108.railway.app:7232";

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

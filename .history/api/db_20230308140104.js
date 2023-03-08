'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "containers-us-west-18.railway.app",
  user: process.env.MYSQLUSER || "epiz_33697982",
  port: process.env.MYSQLPORT || "7415",
  password: process.env.MYSQLPASSWORD || "vukH4wN97c7iLHl",
  database: process.env.MYSQLDATABASE || "railway"
});
db.connect((res)=>{
  res.send("Conect success!!!")
}
)
module.exports = db

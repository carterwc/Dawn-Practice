const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);



// CREATE TABLE movies (
//   id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   Title VARCHAR NOT NULL,
//   releaseDate INT(11),
//   genre VARCHAR(255) NOT NULL
// );



// mysql -u root < database/schema.sql - this you call mysql -u (username mine is root) < "FILEPATH TO SCHEMA File!"
// mysql -u root -p    - allows you to sign into the mysql db and server to check your tables and DB!
// show databases - show a list of all ur DB's
// use database "DB Name" - makes the mysql server use the DB
// show tables - shows all of the tables in the DB you are Using
// describe "tablenameHere" - describes the table schema.

connection.connect((error) => {
  if (error) {
    console.log(error, 'Error Connecting to DB!');
  } else {
    console.log('Connected to DB!!! SUcess!!');
  }
});


module.exports = {

};

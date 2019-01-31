const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var getAllMovies = function (callback) {
  var queryString = `SELECT * FROM movies`;
  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error, 'error getAllMovies');
      callback(error, null);
    } else {
      console.log(results, 'Results from getAllMovies SUCCESS!');
      callback(null, results);
    }
  });
}



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
  getAllMovies
};

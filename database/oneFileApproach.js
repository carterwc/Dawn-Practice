const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mooovies'
});


// CREATE TABLE movies (
//   id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   Title VARCHAR NOT NULL,
//   releaseDate INT(11),
//   genre VARCHAR(255) NOT NULL
// );





connection.connect((error) => {
  if (error) {
    console.log(error, 'Error Connecting to DB Config File');
  } else {
    console.log('Connected to DB!!!');
  }
});


module.exports = {

};
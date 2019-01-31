var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { getAllMovies } = require('../database/index.js');
const path = require('path');
const cors = require('cors');

const port = 9134;

// app.use(bodyParser.json());
// this is the exact same thing as BELOW!
app.use(bodyParser.json({type: 'application/json'}));
// object is optional - able to put 'application/json' letting bodyParser know it will parse json

// app.use('/', express.static('../client/dist/'));

app.use(express.static(__dirname + "/../client/dist"));
// "/" and index.html are the exact same thing
// the above is telling the express server "go to the directory name, find our INDEX.html file in the client/dist folder"
// DO NOT ADD INDEX.HTML TO THE END OF THIS FILE PATH IT IS LOOKING FOR IT AND WILL THROW AN ERROR!!!!


app.get('/api/movies', (req, res) => {

  getAllMovies((error, results) => {
    if (error) {
      console.log(error, 'Error getAllMovies SERVER!');
      res.status(500).send(error);
    } else {
      console.log(results, 'These are the results from getAllMovies Server!');
      res.json(results);
    }
  });
});


// app need to listen and make sure it is running on the port! otherwise tell us we are not!
app.listen(port, error => {
  if (error) {
    console.log(error, 'Error with connecting to Server Not Listening!!');
  }
  console.log(`Listening on port ${port}!!`);
});

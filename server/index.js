var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 8080;

app.use(bodyParser.json());
// this is the exact same thing as BELOW!
// app.use(bodyParser.json({type: 'application/json'}));
// object is optional - able to put 'application/json' letting bodyParser know it will parse json


app.use(express.static(path.join(__dirname, + "../client/dist")));
// "/" and index.html are the exact same thing
// the above is telling the express server "go to the directory name, find our INDEX.html file in the client/dist folder"
// DO NOT ADD INDEX.HTML TO THE END OF THIS FILE PATH IT IS LOOKING FOR IT AND WILL THROW AN ERROR!!!!


// app need to listen and make sure it is running on the port! otherwise tell us we are not!
app.listen(port, (error) => {
  if (error) {
    console.log(error, 'Error with connecting to PORT Not Listening!!');
  }
  console.log(`Listening on port ${port}!!`);
});

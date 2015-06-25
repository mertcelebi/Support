var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(2000, '0.0.0.0', function () {
  console.log("Server listening on port 2000")
});

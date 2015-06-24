var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(4000, '0.0.0.0', function () {
  console.log("Server listening on port 4000")
});

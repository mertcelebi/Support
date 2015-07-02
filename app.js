var express = require('express');
var app = express();

app.use('/images', express.static('build/images'));
app.use('/css', express.static('build/css'));
app.use('/fonts', express.static('build/fonts'));

// Force SSL
app.use(function(req, res, next) {
  if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
    res.redirect('https://' + req.get('Host') + req.url);
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/patient', function(req, res) {
  res.sendFile(__dirname + '/build/patient.html');
});

app.get('/intake', function(req, res) {
  res.sendFile(__dirname + '/build/intake.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/build/contact.html');
});

var server = app.listen(2000, '0.0.0.0', function () {
  console.log("Server listening on port 2000");
});

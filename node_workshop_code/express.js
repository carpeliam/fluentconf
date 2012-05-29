// To run: `node express.js` in console
var express = require('express');

var app = express.createServer();
app.get('/', function(req, res) {
  res.send("You've reached the homepage");
});

app.get('/products', function(req, res) {
  res.send("Check out our sweet products");
});

app.get('/old', function(req, res) {
  res.redirect('/new');
});

app.get('/new', function(req, res) {
  res.send('whichever way you got here, this is the new page');
});

app.get('/*', function(req, res) {
  res.cookie('rememberme', 'yes', { expires: new Date(Date.now() + 900000), httpOnly: true });
  if (req.query.page && req.query.page === 'thunk') {
    res.send('<b>THUNK</b>');
  } else {
    res.send('no thunk');
  }
});

app.listen(8000);
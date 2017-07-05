const express = require('express');
const app = express();

// log the METHOD of the request and the PATH
app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path);
  next();
});

app.get('/', function(req, res) {
  res.json('IT WORKS!');
});

/**
  * Contact Routes
  */

app.get('/contacts', function(req, res) {
    res.json('Contacts - show all');
});

app.get('/contacts/:id', function(req, res) {
    res.json('Contacts - view contact matching :id');
});

app.post('/contacts', function(req, res) {
    res.json('Contacts - create contact');
});

app.put('/contacts', function(req, res) {
    res.json('Contacts - update contact');
});

app.delete('/contacts/:id', function(req, res) {
    res.json('Contacts - delete contact matching :id');
});




// start the server on port 1337
app.listen(1337, function () {
  console.log('Listening on PORT 1337');
});

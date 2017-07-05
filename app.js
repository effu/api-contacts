const express = require('express');
const app = express();

// import our routes
const contacts = require('./routes/contacts');

// log the METHOD of the request and the PATH
app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path);
  next();
});

// use the contacts routes
app.use(contacts);


app.get('/', function(req, res) {
  res.json('IT WORKS!');
});

// start the server on port 1337
app.listen(1337, function () {
  console.log('Listening on PORT 1337');
});

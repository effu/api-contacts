const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');

// import our routes
const contacts = require('./routes/contacts');

// connect to database
mongoose.connect('mongodb://localhost/MyContacts', {
  useMongoClient: true,
});

// log the METHOD of the request and the PATH
app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path);
  next();
});

// using the handlebars template engine
app.engine('.hbs', handlebars({
  defaultLayout: 'single',
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the contacts routes
app.use(contacts);

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.render('login', { message: 'Both fields are required' });
  } else {
    res.send('Logging in');
  }

});


app.get('/', function (req, res) {
  res.json('IT WORKS!');
});

// start the server on port 1337
app.listen(1337, function () {
  console.log('Listening on PORT 1337');
});

const express = require('express');
const app = express();

// log the METHOD of the request and the PATH
app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path);
  next();
});


// start the server on port 1337
app.listen(1337, function () {
  console.log('Listening on PORT 1337');
});

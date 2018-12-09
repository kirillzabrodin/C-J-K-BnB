var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session')
var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'src')));

app.use(session({
  secret: "test"
}))

var router = require('./router.js');
app.use('/', router);

module.exports = app;

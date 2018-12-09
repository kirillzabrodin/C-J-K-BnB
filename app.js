var express = require('express');
var session = require('express-session');
var path = require('path');
var router = require('./router.js');

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'src')));

app.use('/', router);

module.exports = app;

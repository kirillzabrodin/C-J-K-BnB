var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

mongoose.connect("mongodb://james:mousehouse12@ds249873.mlab.com:49873/kirills_bnb", { useNewUrlParser: true })
 .then(() => console.log('connected to db...'));
 .catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log(`C-J-K-BnB listening on port 3000!`))

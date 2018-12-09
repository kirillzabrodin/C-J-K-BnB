var express = require('express');
var app = express();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log(`C-J-K-BnB listening on port 3000!`))

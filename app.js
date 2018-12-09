var express = require('express');
<<<<<<< HEAD
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

=======
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spacesRouter = require('./routes/spaces');

var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

mongoose.connect("mongodb://james:mousehouse12@ds249873.mlab.com:49873/kirills_bnb", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/spaces', spacesRouter);

app.listen(5000, () => console.log(`C-J-K-BnB listening on port 5000!`))

>>>>>>> 6fda567f7b4b38921b7ee97167b72be3318d8e48
module.exports = app;

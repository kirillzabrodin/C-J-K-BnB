var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spacesRouter = require('./routes/spaces');
var router = require('./router.js');

var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'src')));

mongoose.connect("mongodb://james:mousehouse12@ds249873.mlab.com:49873/kirills_bnb", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/', router);
app.use('/users', usersRouter);
app.use('/spaces', spacesRouter);

app.listen(5000, () => console.log(`C-J-K-BnB listening on port 5000!`))

module.exports = app;

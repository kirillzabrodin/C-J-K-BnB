var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var usersRouter = require('./routes/users');
var spacesRouter = require('./routes/spaces');

var app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://james:mousehouse12@ds249873.mlab.com:49873/kirills_bnb", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/users', usersRouter);
app.use('/spaces', spacesRouter);

app.listen(5000, () => console.log(`Backend server listening on port 5000!`))

module.exports = app;

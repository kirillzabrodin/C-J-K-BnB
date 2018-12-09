var express = require('express');
var port = 3000
var app = express();
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');

// app.use('/', indexRouter);
// app.use('/login', loginRouter);
// app.use('/signup', signupRouter);

mongoose.connect("mongodb://james:mousehouse12@ds249873.mlab.com:49873/kirills_bnb")
  .then(() => console.log('connected..........'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

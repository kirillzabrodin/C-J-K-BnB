var express = require('express');
var port = 3000
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');

// app.use('/', indexRouter);
// app.use('/login', loginRouter);
// app.use('/signup', signupRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

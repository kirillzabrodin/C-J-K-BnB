var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.set('views', __dirname + '/pages');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000, () => console.log(`C-J-K-BnB listening on port 3000!`))

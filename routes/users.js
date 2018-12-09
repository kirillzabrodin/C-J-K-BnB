var express = require('express');
var router = express.Router();

// GET new user page
router.get('/users/sign-up', function(req, res) {
  res.send('users page') // render the sign up form
});

// POST add new user
router.post('/users/new', function(req, res) {
  res.redirect('/user/:userId/') // create new user
});

// GET log in page
router.get('/users/login', function(req, res) {
  res.send('users page') // render the login form
});

// POST authenticate user
router.post('/users/authenticate', function(req, res) {
  res.redirect('/user/:userId/') // login user
});







module.exports = router;

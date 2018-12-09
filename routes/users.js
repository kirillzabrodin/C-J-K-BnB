var express = require('express');
var router = express.Router();

// GET new user page
router.get('/sign-up', function(req, res) {
  res.send('users page') // render the sign up form
});

// POST add new user
router.post('/new', function(req, res) {
  res.redirect('/user/:userId/') // create new user then log in
});

// GET log in page
router.get('/login', function(req, res) {
  res.send('users page') // render the login form
});

// POST authenticate user
router.post('/authenticate', function(req, res) {
  res.redirect('/user/:userId/') // authenticate then login user
});

module.exports = router;

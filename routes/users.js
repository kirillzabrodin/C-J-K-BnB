var express = require('express');
var router = express.Router();
var User = require('../models/User');

// GET new user page
router.get('/', (req, res) => {
    User.find()
          .then(users => res.json(users));
});

// POST add new user
router.post('/new', (req, res) => {
    var newUser= new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
});

// GET log in page
router.get('/login', function(req, res) {
  res.send('log in form') // render the login form
});

// POST authenticate user
router.post('/authenticate', function(req, res) {
  res.redirect('/user/:userId/') // authenticate then login user
});

module.exports = router;

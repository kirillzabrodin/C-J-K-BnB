var express = require('express');
var router = express.Router();
var Space = require('../models/Space');

// GET home page.
router.get('/', (req, res) => {
    Space.find()
          .then(spaces => res.json(spaces));
});

module.exports = router;

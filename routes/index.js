var express = require('express');
var router = express.Router();
// var crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
  	res.send('homePage');
});

require("./login.js")(router); // login and registration
require("./category.js")(router); // category

module.exports = router;
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('cookie-session');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.render('index');
	} else {
		res.render('login_signin');
	}
});

module.exports = router;

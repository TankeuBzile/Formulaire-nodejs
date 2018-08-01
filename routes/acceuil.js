var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('cookie-session');
/* GET users listing. */
router.get('/', function(req, res, next) {
	 
	 // session({secret: "blabla"});
	 req.session.name="mon nom";
	 res.send(req.session.name);






});

module.exports = router;

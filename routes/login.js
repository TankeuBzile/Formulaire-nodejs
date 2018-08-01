var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('cookie-session');
/* GET users listing. */
router.post('/', function(req, res, next) {
// 	var name=req.param('id');
// 		var password=req.param('password');
// console.log('login is called : '+name+' '+password);
	if (req.param('identifiant') && req.param('password') ) {
		var mysqlTest = mysql.createConnection({
		 	host: "localhost",
		 	user: "root",
		 	password: "",
		 	database:"nodejs"
		 	});
		
		var identifiant=req.param('identifiant');
		var password=req.param('password');
		var query ='SELECT id FROM users WHERE last_name="'+identifiant+'" AND password="'+password+'"';

		mysqlTest.query(
		 	query,
		 	function (error, result, fields) {
		 		if (error) {
		 			// console.log(error);
		 			console.log('login is called');
		 			res.send('connectDBError'+error);
		 		} else{
		 			if (result.length===1) {
		 				console.log('login is called : utilisateur trouvé...Connecté avec succes');
		 				req.session.user=[identifiant,password];
			 			res.send('success');
		 			} else {
		 				console.log('login is called : utilisateur non existant');
			 			res.send('not exist');
		 			}
			 		
		 		}
		 		
		 	}
		 );

		
	} else {
		res.send('try again');
	}
  
});

module.exports = router;

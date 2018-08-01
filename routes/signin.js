var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.post('/', function(req, res, next) {

	if (req.param('last_name') && req.param('name') && req.param('password') && req.param('password_repeat')) {
		var mysqlTest = mysql.createConnection({
		 	host: "localhost",
		 	user: "root",
		 	password: "",
		 	database:"nodejs"
		 	});
		var last_name=req.param('last_name');
		var name=req.param('name');
		var password_repeat=req.param('password_repeat');
		var password=req.param('password');
		var query = 'INSERT INTO users VALUES(null,"'+name+'","'+last_name+'","'+password+'")';//'SELECT * FROM test',
		mysqlTest.query(
		 	query,
		 	function (error, result, fields) {
		 		if (error) {
		 			// console.log(error);
		 			console.log('login is called : '+name+' '+password);
		 			res.send('connectDBError'+error);
		 		} else{
			 		console.log('login is called : Un utilisateur ajouté --> '+last_name);
			 		res.send('success');
		 		}
		 		
		 	}
		 );

		
	} else {
		res.send('try again');
	}
  
});

module.exports = router;

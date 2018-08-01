$(function(){ 

	var form_login = $('form#form-login');
	var form_signin = $('form#form-signin');
	var div_login = $('div#div-form-login');
	var div_signin = $('div#div-form-signin');
	var link_login =$('.div-form-signin a#link-login');
	var link_signin = $('.div-form-login a#link-signin');

	link_signin.click(function (e) {
		e.preventDefault();
		div_login.fadeOut().css({'display':'none'});
		div_signin.fadeIn();
	});
	link_login.click(function (e) {
		e.preventDefault();
		div_signin.fadeOut().css({'display':'none'});
		div_login.fadeIn();
	});
	form_login.submit(function (e) {
		e.preventDefault();
		var id=$('div#div-form-login input[name="name"]').val();
		var password=$('div#div-form-login input[name="password"]').val();
		// alert("connexion en cours ...");
		$.post(
				'/login',
				{identifiant:id, password:password},
				function (data) {
					
					if (data==="success") {
						location.reload(true);
					} else if (data==="connectDBError"){
						alert('connectDBError');
					} else if (data==="try again"){
						alert('veillez remplir tout les champ');
					}else if (data==="not exist"){
						alert('identifiant ou mot de passe incorrect');
					}else {
						alert('unsuccess; aucune liaison'+data);}
				},
				'text'
			);
	});
	form_signin.submit(function (e) {
		e.preventDefault();
		var last_name=$('div#div-form-signin input[name="pseudo"]').val();
		var name=$('div#div-form-signin input[name="name"]').val();
		var password=$('div#div-form-signin input[name="password"]').val();
		var password_repeat=$('div#div-form-signin input[name="password_repeat"]').val();
		// alert("connexion en cours ...");
		$.post(
				'/signin',
				{last_name:last_name,name:name,password:password, password_repeat:password_repeat},
				function (data) {
					
					if (data==="success") {
						alert('succes');
					} else if (data==="connectDBError"){
						alert('connectDBError');
					} else if (data==="try again"){
						alert('veillez remplir tout les champ');
					}else {
						alert('unsuccess; aucune liaison'+data);
					}
				},
				'text'
			);
	});
});

function die(msg=""){throw msg;}
var userLogin = function(username, password) {
	
	var loginFailed = true;

	if (ds.User.length != 0 ) {
		var user = ds.User.find("username == :1", username);
		if ( user != null ) {
			loginFailed = !user.validatePassword(password);
		}
	}
	else {
		// create a default user for new installations and login
		var personne = new ds.Personne({nom: "Admin", prenom: "User"});
		personne.save();
		
		var user = new ds.User({username: username, personne: personne});
		user.save();
		
		user.HA1Key  = directory.computeHA1(user.ID, user.password);
		user.save();
		
		loginFailed = false;
	}
	
	if ( !loginFailed) {
		return {
			ID: user.ID,
			name: user.username,
			fullName: user.username
		}
	}
	else {
		return {error: 100, errorMessage: "Login failed."};
	}
}


model.User.entityMethods.validatePassword = function(password) {
	var hash = directory.computeHA1(this.ID, password);
	return (hash === this.HA1Key);
};
model.User.entityMethods.validatePassword.scope = "publicOnServer";
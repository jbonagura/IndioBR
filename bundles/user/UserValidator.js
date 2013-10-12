var UserValidator = function(di) {
	this.validate = di.validate;
	return {
		username : [
				this.validate({
					message : "Username need be having between 3 to 100 letters/numbers."
				}, 'len', 3, 100),
				
				this.validate({
					message : "Username need to be Alpha Numeric."
				}, 'isAlphanumeric') 
		],
		password : [ function(value) {
				return true;
			}, "Invalid Password" 
		]
	};
};

module.exports = exports = UserValidator;
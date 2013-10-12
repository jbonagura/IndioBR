var UserSchema = function(di) {
	validate = di.validate;
	validator = di.validators.user;

	this.json = {
		id : di.mongoose.Schema.ObjectId,
		username : {
			type : String,
			lowercase : true,
			required : true,
			index : true,
			unique : true,
			trim : true,
			validate : validator.username
		},
		email : {
			type : String,
			lowercase : true,
			required : true,
			index : true,
			unique : true,
			trim : true,
			validate : validate('isEmail')
		},
		password : {
			type : String,
			required : true,
			validate : validator.password
		}
	};

	this.mongoose = new di.mongoose.Schema(this.json);
};

module.exports = exports = UserSchema;

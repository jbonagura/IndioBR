var UserSchema = function(di) {
	validate = di.validate;
	validator = di.validators.user;
	
	this.json = {
		id : di.mongoose.Schema.ObjectId,
		facebook : {
			like : Boolean,
			share : Boolean,
			friends_connected : [Number],
			linkesOnShare : Number,
			enableStream : Boolean
		},
		facebook_id : {
			type : Number,
			required : true,
			index : true,
			unique : true
		},
		name : {
			type : String,
			required : true,
			trim : true
		},
		email : {
			type : String,
			lowercase : true,
			required : false,
			index : true,
			unique : true,
			trim : true,
			validate : validate('isEmail')
		},
		age_range : String,
		sex : String,
		address : String
	};
	this.mongoose = new di.mongoose.Schema(this.json);
};

module.exports = exports = UserSchema;

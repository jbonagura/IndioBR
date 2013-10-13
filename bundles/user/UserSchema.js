var UserSchema = function(di) {
	validate = di.validate;
	validator = di.validators.user;
	
	this.json = {
		id : di.mongoose.Schema.ObjectId,
		facebook : {
			like : Boolean,
			share : Boolean,
			friendsConnected : [Number],
			linkesOnShare : Number,
			enableStream : Boolean
		},
		facebook_id : {
			type : Number,
			required : false,
			index : true,
			unique : false
		},
		name : {
			type : String,
			required : false,
			trim : true
		},
		email : {
			type : String,
			lowercase : true,
			required : false,
			index : true,
			unique : false,
			trim : true,
			validate : validate('isEmail')
		},
		age_range : String,
		sex : String,
		address : String,
		likes: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }],
		dislikes: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }],
		followers: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }],
		following: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }]
	};
	this.mongoose = new di.mongoose.Schema(this.json);
};

module.exports = exports = UserSchema;

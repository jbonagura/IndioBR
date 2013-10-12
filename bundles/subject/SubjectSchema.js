var SubjectSchema = function(di) {
	validate = di.validate;
	validator = di.validators.subject;
	
	this.json = {
		id : di.mongoose.Schema.ObjectId,
		subject: String,
		description: String,
		subjects: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
		users: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }],
		groups: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'Group' }]
	};
	
	this.mongoose = new di.mongoose.Schema(this.json);
};
module.exports = exports = SubjectSchema;

var GroupSchema = function(di) {
	validate = di.validate;
	validator = di.validators.group;
	
	this.json = {
		id : di.mongoose.Schema.ObjectId,
		name: String,
		description: String,
		users: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'User' }],
		groups: [{ type: di.mongoose.Schema.Types.ObjectId, ref: 'Group' }]
	};
	
	this.mongoose = new di.mongoose.Schema(this.json);
};
module.exports = exports = GroupSchema;

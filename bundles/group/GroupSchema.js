var GroupSchema = function(di) {
	validate = di.validate;
	validator = di.validators.group;
	this.json = {
		id : di.mongoose.Schema.ObjectId
	};
	this.mongoose = new di.mongoose.Schema(this.json);
};
module.exports = exports = GroupSchema;

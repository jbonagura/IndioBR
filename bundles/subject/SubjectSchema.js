var SubjectSchema = function(di) {
	validate = di.validate;
	validator = di.validators.subject;
	this.json = {
		id : di.mongoose.Schema.ObjectId
	};
	this.mongoose = new di.mongoose.Schema(this.json);
};
module.exports = exports = SubjectSchema;

var Subject = function(di) {
	di.schemas.subject.mongoose.methods = {
	};
	return di.mongoose.model("Subject", di.schemas.Subject.mongoose);
};
module.exports = exports = Subject;

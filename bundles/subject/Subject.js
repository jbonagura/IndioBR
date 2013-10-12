var Subject = function(di) {
	di.schemas.subject.mongoose.methods = {
	};
	return di.mongoose.model("Subject", di.schemas.subject.mongoose);
};
module.exports = exports = Subject;

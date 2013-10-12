var Group = function(di) {
	di.schemas.group.mongoose.methods = {
	};
	return di.mongoose.model("Group", di.schemas.group.mongoose);
};
module.exports = exports = Group;

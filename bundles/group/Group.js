var Group = function(di) {
	di.schemas.group.mongoose.methods = {
	};
	return di.mongoose.model("Group", di.schemas.Group.mongoose);
};
module.exports = exports = Group;

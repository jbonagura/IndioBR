var GraoSchema = function(di) {
	di.event.newEvent('Instance created').success().present().log('info');

	this.user = new (require(di.config.bundles+'/user/UserSchema'))(di);
};

module.exports = exports = GraoSchema;

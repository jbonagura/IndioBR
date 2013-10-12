var GraoModel = function(di) {
	di.event.newEvent('Database Connection....').success().present().log('info');
	
	di.mongoose.connect(di.config.db);

	di.event.newEvent('Instance created').success().present().log('info');

	this.user = new (require(di.config.bundles+'/user/User'))(di);
};

module.exports = exports = GraoModel;

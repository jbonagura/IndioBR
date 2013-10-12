var GraoController = function(di) {
	di.event.newEvent('Instance created').success().present().log('info');
	this.user = new (require(di.config.bundles+'/user/UserController'))(di);
};

module.exports = exports = GraoController;
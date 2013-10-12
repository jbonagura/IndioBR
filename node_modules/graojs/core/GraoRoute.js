var GraoRoute = function(di) {
	di.event.newEvent('Setting routes of controllers...').success().present().log('info');

	this.frontend = new require(di.config.bundles+'/frontend/FrontendRoute')(di);
	this.user = new require(di.config.bundles+'/user/UserRoute')(di);

};

module.exports = exports = GraoRoute;

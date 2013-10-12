var GraoPublicRoute = {
	enable : function(di) {
		di.event.newEvent('Setting routes of static public content....').success().present().log('info');

		for (var publicRoute in this.publicRoutes) {
			di.graoExpress.use(publicRoute, di.express.static(di.config.rootPath
					+ this.publicRoutes[publicRoute]));
		}
	},

	/**
	 * Need be automatic with nodejs fs package
	 */
	publicRoutes : {
		'/css/bootstrap' : '/node_modules/graojs/vendor/bootstrap/public/css',
		'/js/bootstrap' : '/node_modules/graojs/vendor/bootstrap/public/js',
		'/ui' : '/node_modules/graojs/vendor/bootstrap/public/ui',

		'/css/font-awesome' : '/node_modules/graojs/vendor/font-awesome/public/css',
		'/css/font' : '/node_modules/graojs/vendor/font-awesome/public/font',

		'/js/angularjs' : '/node_modules/graojs/vendor/angularjs/public/js',

		'/js' : '/bundles/frontend/public/js',
		'/css' : '/bundles/frontend/public/css',
		'/image' : '/bundles/frontend/public/image',
		'/font' : '/bundles/frontend/public/font',

		'/js/user' : '/bundles/user/public/js',
	}
};

module.exports = exports = GraoPublicRoute;

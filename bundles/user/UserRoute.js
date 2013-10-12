var UserRoute = function(di) {
	di.graoExpress.get('/user/:id', di.controllers.user.service.get);
	di.graoExpress.get('/user', di.controllers.user.service.query);
	di.graoExpress.post('/user', di.controllers.user.service.create);
	di.graoExpress.put('/user/:id', di.controllers.user.service.update);
	di.graoExpress.del('/user/:id', di.controllers.user.service.destroy);

	di.graoExpress.get('/admin/user', di.controllers.user.admin.dashboard);
	di.graoExpress.get('/user/:username', di.controllers.user.service.get);
};

module.exports = exports = UserRoute;
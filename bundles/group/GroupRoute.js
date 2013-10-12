var GroupRoute = function(di) {
	di.graoExpress.get('/group/:id', di.controllers.group.service.get);
	di.graoExpress.get('/group', di.controllers.group.service.query);
	di.graoExpress.post('/group', di.controllers.group.service.create);
	di.graoExpress.put('/group/:id', di.controllers.group.service.update);
	di.graoExpress.del('/group/:id', di.controllers.group.service.destroy);
	di.graoExpress.get('/admin/group', di.controllers.group.admin.dashboard);
};
module.exports = exports = GroupRoute;

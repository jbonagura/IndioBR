var SubjectRoute = function(di) {
	di.graoExpress.get('/subject/:id', di.controllers.subject.service.get);
	di.graoExpress.get('/subject', di.controllers.subject.service.query);
	di.graoExpress.post('/subject', di.controllers.subject.service.create);
	di.graoExpress.put('/subject/:id', di.controllers.subject.service.update);
	di.graoExpress.del('/subject/:id', di.controllers.subject.service.destroy);
	di.graoExpress.get('/admin/subject', di.controllers.subject.admin.dashboard);
};
module.exports = exports = SubjectRoute;

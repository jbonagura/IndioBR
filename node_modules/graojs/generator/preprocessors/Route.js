var {GRAO}{UCFIRST}{NAME}Route = function(di) {
	di.graoExpress.get('/{GRAO}{LOWER}{NAME}/:id', di.controllers.{GRAO}{LOWER}{NAME}.service.get);
	di.graoExpress.get('/{GRAO}{LOWER}{NAME}', di.controllers.{GRAO}{LOWER}{NAME}.service.query);
	di.graoExpress.post('/{GRAO}{LOWER}{NAME}', di.controllers.{GRAO}{LOWER}{NAME}.service.create);
	di.graoExpress.put('/{GRAO}{LOWER}{NAME}/:id', di.controllers.{GRAO}{LOWER}{NAME}.service.update);
	di.graoExpress.del('/{GRAO}{LOWER}{NAME}/:id', di.controllers.{GRAO}{LOWER}{NAME}.service.destroy);
	di.graoExpress.get('/admin/{GRAO}{LOWER}{NAME}', di.controllers.{GRAO}{LOWER}{NAME}.admin.dashboard);
};

module.exports = exports = {GRAO}{UCFIRST}{NAME}Route;
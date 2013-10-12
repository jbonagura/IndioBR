// Glocal Scope :)
var models, 
	controllers,
	event,
	{GRAO}{LOWER}{NAME}, // object
	{GRAO}{UCFIRST}{NAME}; // object/class

var service = {
		
	get : function(req, res) {
			{GRAO}{UCFIRST}{NAME}.findOne({_id : req.params.id}, function(err, {GRAO}{LOWER}{NAME}) {
			if (err)
			{
				event.newEvent(err).error().present().log('error');
				res.jsonp({GRAO}{LOWER}{NAME});
				res.end();
			}
		});
		
	},

	query : function(req, res) {
		
		{GRAO}{UCFIRST}{NAME}.find().sort('-created').populate('{GRAO}{LOWER}{NAME}').exec(function(err, {GRAO}{LOWER}{PLURAL}{NAME}) {
			if (err) {
				event.newEvent(err).error().present().log('error');
				res.end();
			} else {
				res.jsonp({GRAO}{LOWER}{PLURAL}{NAME});
				res.end();
			}
		});
	},

	create : function(req, res) {
		{GRAO}{LOWER}{NAME} = new {GRAO}{UCFIRST}{NAME}(req.body);
		{GRAO}{LOWER}{NAME}.save(function(err) {
			if (err) {
				event.newEvent(err).error().present().log('error');
			} else {
				event.newEvent('created').success().present().log('info');
			}
		});
		
		res.end();
	},

	update : function(req, res) {
		delete req.body._id;
		{GRAO}{UCFIRST}{NAME}.findOneAndUpdate({_id : req.params.id }, req.body, { upsert : true }, function(err, {GRAO}{LOWER}{NAME}) {
			if (err) {
				event.newEvent(err).error().present().log('error');
			} else {
				try {
					event.newEvent('updated').success().present().log('info');
				} catch(err) {
					event.newEvent(err).error().present().log('error');
				}
			}
		});
		res.end();
	},

	destroy : function(req, res) {	
		{GRAO}{UCFIRST}{NAME}.remove({_id : req.params.id}, function(err) {
			if (err) {
				event.newEvent(err).error().present().log('error');
			} else {
				event.newEvent('destroyed').success().present().log('info');
			}
		});
		res.end();
	}
};

var admin = {
	dashboard : function(req, res) {
		res.render('{GRAO}{LOWER}{NAME}/view/dashboard');
	}
};

var {GRAO}{UCFIRST}{NAME}Controller = function(di) {
	event = new di.event.newEvent('Instance created').success().present().log('info');
	
	models = di.models;
	controllers = di.controllers;
	{GRAO}{UCFIRST}{NAME} = models.{GRAO}{LOWER}{NAME}; // object/class
	{GRAO}{LOWER}{NAME} = new {GRAO}{UCFIRST}{NAME}(); // object
	this.service = service;
	this.admin = admin;
};

module.exports = exports = {GRAO}{UCFIRST}{NAME}Controller;
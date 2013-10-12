// Glocal Scope :)
var models, 
	controllers,
	event,
	subject, // object
	Subject; // object/class

var service = {
	get : function(req, res) {
			Subject.findOne({_id : req.params.id}, function(err, subject) {
			if (err)
			{
				event.newEvent(err).error().present().log('error');
				res.jsonp(subject);
				res.end();
			}
		});
	},
	query : function(req, res) {
		Subject.find().sort('-created').populate('Subject').exec(function(err, subjects) {
			if (err) {
				event.newEvent(err).error().present().log('error');
				res.end();
			} else {
				res.jsonp(subjects);
				res.end();
			}
		});
	},
	create : function(req, res) {
		subject = new Subject(req.body);
		subject.save(function(err) {
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
		Subject.findOneAndUpdate({_id : req.params.id }, req.body, { upsert : true }, function(err, subject) {
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
		Subject.remove({_id : req.params.id}, function(err) {
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
		res.render('subject/view/dashboard');
	}
};
var SubjectController = function(di) {
	event = new di.event.newEvent('Instance created').success().present().log('info');
	models = di.models;
	controllers = di.controllers;
	Subject = models.subject; // object/class
	subject = new Subject(); // object
	this.service = service;
	this.admin = admin;
};
module.exports = exports = SubjectController;

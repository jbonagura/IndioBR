// Glocal Scope :)
var models, 
	controllers,
	event,
	group, // object
	Group; // object/class
var service = {
	get : function(req, res) {
			Group.findOne({_id : req.params.id}, function(err, Group) {
			if (err)
			{
				event.newEvent(err).error().present().log('error');
				res.jsonp(group);
				res.end();
			}
		});
	},
	query : function(req, res) {
		Group.find().sort('-created').populate('Group').exec(function(err, groups) {
			if (err) {
				event.newEvent(err).error().present().log('error');
				res.end();
			} else {
				res.jsonp(groups);
				res.end();
			}
		});
	},
	create : function(req, res) {
		Group = new Group(req.body);
		group.save(function(err) {
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
		Group.findOneAndUpdate({_id : req.params.id }, req.body, { upsert : true }, function(err, Group) {
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
		Group.remove({_id : req.params.id}, function(err) {
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
		res.render('group/view/dashboard');
	}
};
var GroupController = function(di) {
	event = new di.event.newEvent('Instance created').success().present().log('info');
	models = di.models;
	controllers = di.controllers;
	Group = models.Group; // object/class
	Group = new Group(); // object
	this.service = service;
	this.admin = admin;
};
module.exports = exports = GroupController;

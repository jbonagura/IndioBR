// Glocal Scope :)
var models, 
	controllers,
	event,
	user, // object
	User; // object/class

var service = {
		
	get : function(req, res) {
			User.findOne({_id : req.params.id}, function(err, user) {
			if (err)
			{
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.get', 
					message: err
				}).error().present().log('error');
				
				res.jsonp(user);
				res.end();
			}
		});
		
	},

	query : function(req, res) {
		
		User.find().sort('-created').populate('user').exec(function(err, users) {
			if (err) {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.query', 
					message: err
				}).error().present().log('error');
				res.end();
			} else {
				res.jsonp(users);
				res.end();
			}
		});
	},

	create : function(req, res) {
		user = new User(req.body);
		user.save(function(err) {
			if (err) {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.create', 
					message: err
				}).error().present().log('error');
			} else {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.create', 
					message: 'created'
				}).success().present().log('info');
			}
		});
		
		res.end();
	},

	update : function(req, res) {
		delete req.body._id;
		User.findOneAndUpdate({_id : req.params.id }, req.body, { upsert : true }, function(err, user) {
			if (err) {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.update', 
					message: err
				}).error().present().log('error');
			} else {
				try {
					event.newEvent({
						name: 'kernel\.controllers\.service\.user\.update', 
						message: 'updated'
					}).success().present().log('info');
				} catch(err) {
					event.newEvent({
						name: 'kernel\.controllers\.service\.user\.update', 
						message: err
					}).error().present().log('error');
				}
			}
		});
		res.end();
	},

	destroy : function(req, res) {	
		User.remove({_id : req.params.id}, function(err) {
			if (err) {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.destroy', 
					message: err
				}).error().present().log('error');
			} else {
				event.newEvent({
					name: 'kernel\.controllers\.service\.user\.destroy', 
					message: 'destroyed'
				}).success().present().log('info');
			}
		});
		res.end();
	}
};

var admin = {
	dashboard : function(req, res) {
		res.render('user/view/dashboard');
	}
};

var UserController = function(di) {
	event = new di.event.newEvent({
				name: 'kernel\.controllers\.user', 
				message: 'Instance created'
	}).success().present().log('info');
	
	models = di.models;
	controllers = di.controllers;
	User = models.user; // object/class
	user = new User(); // object
	this.service = service;
	this.admin = admin;
};

module.exports = exports = UserController;
var {GRAO}{UCFIRST}{NAME}Schema = function(di) {
	validate = di.validate;
	validator = di.validators.{GRAO}{LOWER}{NAME};

	this.json = {
		id : di.mongoose.Schema.ObjectId
	};

	this.mongoose = new di.mongoose.Schema(this.json);
};

module.exports = exports = {GRAO}{UCFIRST}{NAME}Schema;
var fs = require('fs');

var GraoGenerator = function(config) {
	var $ = this; // holder
	
	this.config = config;
	this.name = this.config.name;
	this.firstString = '';
	this.currentDir = process.cwd();

	this.loadSchema = function() {
		this.schema = require(this.config.files.schema);
	};

	this.replace = function(buffer) {
		// We need indentation this Oo
		var allPlaceHolders = /{GRAO}{TD_SCHEMA}|{GRAO}{TH_SCHEMA_LABELS}|{GRAO}{FORM_FIELDS}|{GRAO}{SCHEMA_ID}|{GRAO}{SCHEMA_FIRST_STRING}|{GRAO}{LOWER}{NAME}|{GRAO}{UCFIRST}{NAME}|{GRAO}{LOWER}{PLURAL}{NAME}|{GRAO}{UCFIRST}{PLURAL}{NAME}/gi;
		localName = this.name;

		if (buffer.match(/{GRAO}{LOWER}|{GRAO}{UCFIRST}/i))
			localName = localName.toLowerCase();

		if (buffer.match(/{GRAO}{UCFIRST}/i))
			localName = ucfirst(localName);

		if (buffer.match(/{GRAO}{LOWER}{NAME}/i))
			buffer = buffer.replace(/{GRAO}{LOWER}{NAME}/gi,
					localName);
		else if (buffer.match(/{GRAO}{UCFIRST}{NAME}/i))
			buffer = buffer.replace(/{GRAO}{UCFIRST}{NAME}/gi,
					localName);
		else if (buffer.match(/{GRAO}{LOWER}{PLURAL}{NAME}/i))
			buffer = buffer.replace(
					/{GRAO}{LOWER}{PLURAL}{NAME}/gi, localName
							+ 's');
		else if (buffer.match(/{GRAO}{UCFIRST}{PLURAL}{NAME}/i))
			buffer = buffer.replace(
					/{GRAO}{UCFIRST}{PLURAL}{NAME}/gi, localName
							+ 's');
		else if (buffer.match(/{GRAO}{SCHEMA_FIRST_STRING}/i)) {
			for ( var path in this.schema.paths) {
				if (this.schema.paths[path]['instance'] == 'String') {
					this.firstString = this.schema.paths[path]['path'];
					break;
				}
			}

			buffer = buffer.replace(/{GRAO}{SCHEMA_FIRST_STRING}/gi,
					this.firstString);
		} else if (buffer.match(/{GRAO}{SCHEMA_ID}/i)) {
			buffer = buffer.replace(/{GRAO}{SCHEMA_ID}/gi, 'make_it');
			console.log(this.schema.json);
		} else if (buffer.match(/{GRAO}{FORM_FIELDS}/i)) {
			// @FIXME put ng-bind and placeholder
			var field = '';
			var formFields = '';
			for ( var path in this.schema.paths) {
				field = '';
				field = fs.readFileSync(this.config.files.viewInputText, {
					encoding : 'utf8'
				}) + '\n';
				formFields += field.replace(/{GRAO}{LOWER}{NAME}/gi,
						localName).replace(/{GRAO}{SCHEMA_FIELD}/gi,
						this.schema.paths[path]['path']).replace(
						/{GRAO}{FIELD_LABEL}/gi, '').replace(
						/{GRAO}{FIELD_OPTIONS}/gi, '');
				/*
				 * if(this.schema.paths[path]['instance'] == 'String') {
				 * firstString = this.schema.paths[path]['path']; break; }
				 */
			}

			buffer = buffer
					.replace(/{GRAO}{FORM_FIELDS}/gi, formFields);
		} else if (buffer.match(/{GRAO}{TH_SCHEMA_LABELS}/i)) {
			buffer = buffer.replace(/{GRAO}{TH_SCHEMA_LABELS}/gi,
					'make_it');
			console.log(this.schema.json);
		} else if (buffer.match(/{GRAO}{TD_SCHEMA}/i)) {
			buffer = buffer.replace(/{GRAO}{TD_SCHEMA}/gi, 'make_it');
			console.log(this.schema.json);
		}

		if (allPlaceHolders.test(buffer))
			return $.replace(buffer);
		else
			return buffer;
	};

	this.readTemplate = function(templateFile, output) {
		console.log('Getting preprocessor: ' + templateFile);

		fs.readFileSync(__dirname+'/preprocessors/'+templateFile).toString().
			split('\n').forEach(function (line) { 
				if (line != null && line != 0 && line != '0' && line != false) {
					//$.writeCode(line, output);
					console.log($.replace(line.toString()));
					fs.appendFileSync($.currentDir+'/bundles/'+$.name+'/'+output, 
						$.replace(line.toString())+"\n");
				}
		});
	};

	this.route = function() {
		$.readTemplate(this.config.files.route, ucfirst(this.name)+'Route.js');
	};

	this.controller = function() {
		$.readTemplate(this.config.files.controller, ucfirst(this.name)+'Controller.js');
	};

	this.model = function() {
		$.readTemplate(this.config.files.model, ucfirst(this.name)+'.js');
	};

	this.publicController = function() {
		$.readTemplate(this.config.files.publicController, 'public/js/'+ucfirst(this.name)+'PublicController.js');
	};

	this.view = function() {
		// $.readTemplate(this.config.files.viewDashboard);
		$.readTemplate(this.config.files.viewForm, 'view/form.jade');
		// $.readTemplate(this.config.files.viewGrid);
	};

	this.validator = function() {
		$.readTemplate(this.config.files.validator, ucfirst(this.name)+'Validator.js');
	};
	
	this.schema = function() {
		$.readTemplate(this.config.files.schema, ucfirst(this.name)+'Schema.js');
	};
};

function ucfirst(string)
{
	return string.toUpperCase().substr(0, 1)+string.substr(1).toLowerCase();	
}
module.exports = exports = GraoGenerator;
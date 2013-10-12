var args = process.argv.slice(2);
var name, fileName;

for ( var i = 0; i < args.length; i++) {
	switch (args[i]) {
	case '--name':
		fileName = args[i + 1];
		name = fileName.replace(/Schema/gi, '');
	}
};

var GraoGeneratorConfig = {
	fileName : fileName,
	name : name,
	schema : false,
	route : false,
	controller : false,
	validator : false,
	model : false,
	publicController : false,
	view : false,
	all : false,
	forceRewrite : false,
	verbose : true,

	files : {
		schema : 'Schema.js',
		route : 'Route.js',
		controller : 'Controller.js',
		model : 'Model.js',
		validator : 'Validator.js',
		publicController : 'public/js/PublicController.js',
		viewDashboard : 'view/dashboard.jade',
		viewForm : 'view/form.jade',
		viewGrid : 'view/grid.jade',
		viewCurrency : 'view/currency.jade',
		viewDate : 'view/date.jade',
		viewInputCheckbox : 'view/input_checkbox.jade',
		viewInputEmail : 'view/input_email.jade',
		viewInputNumber : 'view/input_number.jade',
		viewInputRadio : 'view/input_radio.jade',
		viewInputText : 'view/input_text.jade',
		viewInputUrl : 'view/input_url.jade',
		viewSelect : 'view/input_select.jade',
		viewTextarea : 'view/input_textarea.jade'
	},

	parseOptions : function() {
		for ( var i = 0; i < args.length; i++) {
			switch (args[i]) {
			case '--name':
				i++;
				break;
			case '--route':
				this.route = true;
				break;
			case '--validator':
				this.validator = true;
				break;
			case '--schema':
				this.schema = true;
				break;
			case '--controller':
				this.controller = true;
				break;
			case '--model':
				this.model = true;
				break;
			case '--public-controller':
				this.publicController = true;
				break;
			case '--view':
				this.view = true;
				break;
			case '--all':
				this.all = true;
				break;
			case '--force':
				this.forceRewrite = true;
				break;
			case '--verbose':
				this.verbose = true;
				break;
			default:
				console.log('Option ' + args[i] + ' not recognized.');
			}
		}
		;
	},
};

module.exports = exports = GraoGeneratorConfig;
var config = require('./GraoToolsConfig'),
	GraoTools = require('./GraoTools');

try {
	
	config.parseOptions();
	var tools = new GraoTools(config);

	if(config.newApp) {
		tools.newApp();
	} else if(config.newBundle) {
		tools.newBundle();
	} else if(config.newSchema) {
		tools.newSchema();
	} else if(config.generate) {
		tools.generate();
	} else {
		config.usage();
	}	
} catch(exception) {
	console.log('Error: '+exception);
	process.exit(-1);
}


module.exports = exports = tools;
var args = process.argv.slice(2);
var name = (args.length > 1) ? args[args.length-1] : null;

for ( var i = 0; i < args.length; i++) {
	switch (args[i]) {
		case '--name':
		case 'name':
			name = args[i + 1];
			break;
		}
};

var GraoToolsConfig = {
	name : name,
	newApp : false,
	newBundle : false,
	newSchema : false,
	generate : false,
	forceRewrite : false,
	verbose : true,
	
	files: {
		app: ["bin", "bundles", "config", "log", "scripts", "vendor", "tdd", "index.js"],
		bundle: []
	},

	usage : function() {
		console.log("Usage: grao [OPTION...] [NAME]" + "\n" + 
					"GrãoJS Tools, options:" + "\n" +
					"  -a, --app, --new-app, new-app, app\t\t\tCreate a new GrãoJS application" + "\n" +
					"  -b, --bundle, --new-bundle, new-bundle, bundle\tCreate a new bundle" + "\n" +
					"  -e, --schema, --new-schema, new-schema, schema\tCreate a new schema" + "\n" +
					"  -g, --gen, --generate, generate, gen\t\t\tGenerate a new bundle of schema" + "\n" +
					"  --verbose\t\t\t\t\t\tRunning on verbose mode" + "\n"
		);
		process.exit(-1);
	},

	parseOptions : function() {
		for ( var i = 0; i < args.length; i++) {
			switch (args[i]) {
			case '-a':
			case '--app':
			case '--new-app':
			case 'new-app':
			case 'app':
				this.newApp = true;
				break;
			case '-b':
			case '--bundle':
			case '--new-bundle':
			case 'new-bundle':
			case 'bundle':
				this.newBundle = true;
				break;
			case '-e':
			case '--schema':
			case '--new-schema':
			case 'schema':
			case 'new-schema':
				this.newSchema = true;
				break;
			case '-g':
			case '--gen':
			case '--generate':
			case 'gen':
			case 'generate':
				this.generate = true;
				break;
			case '-f':
			case '--force':
			case 'force':
				this.forceRewrite = true;
				break;
			case '--verbose':
				this.verbose = true;
				break;
			case '--name':
			case 'name':
			case this.name:
				break;
			default:
				GraoToolsConfig.usage();
			}
		}
		
		if(this.name == null)
			GraoToolsConfig.usage();
			
	},
};

module.exports = exports = GraoToolsConfig;
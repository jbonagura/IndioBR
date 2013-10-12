var fs = require('fs'), 
	path = require('path'), 
	rootPath = path.normalize(__dirname) + '/..',
	charset = 'utf-8',
	packageJson = JSON.parse(fs.readFileSync(rootPath+'/package.json', charset));

module.exports = exports = {
	packageJson: packageJson,
	ports : [ 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022 ],
	charset: charset,
	db: 'mongodb://localhost/grao',
	rootPath: rootPath,
	bundles: rootPath + '/bundles',
	vendor: rootPath + '/vendor',
	locales: rootPath + '/config/locales',
	name : packageJson.description,
	log : {
		transport : {
			console : {
				colorize: true,
				json : false,
				timestamp : true,
				level : 'info'
			},
			file : {
				filename : rootPath + '/log/grao.log',
				json : false,
				level : 'error'
			}
		},
		exception : {
			console : {
				colorize: true,
				json : false,
				timestamp : true,
				level : 'info'
			},
			file : {
				filename : rootPath + '/log/grao.log',
				json : false,
				level : 'error'
			}
		},
	},
	facebook : {
		clientID : "APP_ID",
		clientSecret : "APP_SECRET",
		callbackURL : "http://localhost:3000/auth/facebook/callback"
	},
	twitter : {
		clientID : "CONSUMER_KEY",
		clientSecret : "CONSUMER_SECRET",
		callbackURL : "http://localhost:3000/auth/twitter/callback"
	},
	github : {
		clientID : 'APP_ID',
		clientSecret : 'APP_SECRET',
		callbackURL : 'http://localhost:3000/auth/github/callback'
	},
	google : {
		clientID : "APP_ID",
		clientSecret : "APP_SECRET",
		callbackURL : "http://localhost:3000/auth/google/callback"
	}
};
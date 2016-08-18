var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var CSS_DIR = path.resolve(__dirname, 'src/client/styleSheets');

var config = {
  	entry: [
		'webpack-dev-server/client?http://localhost:1337', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		APP_DIR + '/index.jsx' // app's entry point
	],
  	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/static/'
  	},
	debug: true,
	devtool: "#eval-source-map",
  	module : {
	  	loaders : [{
				test : /\.jsx?/,
				loaders : ['react-hot', 'babel'],
				// query : {
					// presets: ['es2015', 'react']
				// },
				include : APP_DIR
			},{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader?sourceMap',
				include: CSS_DIR
		  	},{
				test: /\.css$/,
				loader: 'style-loader!css-loader?sourceMap',
				include: CSS_DIR
		  	}
		]
  	},
  	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
  	]
};

module.exports = config;
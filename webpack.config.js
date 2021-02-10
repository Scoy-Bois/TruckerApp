var path = require("path");
var webpack = require("webpack");
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	context: __dirname,
	entry: './web/trucker_app/static/js/index.js',

	output: {
		path: path.resolve(__dirname, './web/static'),
		filename: "index-bundle.js",
	},

	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
					'@babel/preset-env',
					'@babel/preset-react',
					]
				}
			},
			}
		]
	},
	resolve: {
	extensions: ['*', '.js', '.jsx']
	}
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
	target: 'node',
	mode: 'development',
	entry: [
		path.resolve(__dirname, 'src/server/server.ts')
	],
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json', '.jsx']
	},
	node: {
		__dirname: true,
		__filename: true
	}
};

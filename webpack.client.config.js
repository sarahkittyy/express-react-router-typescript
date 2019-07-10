const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src/app/Main.tsx'),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/js'),
		publicPath: '/public/'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.css', '.js', '.jsx', '.json'],
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: 'public/',
		hot: true,
	}
};
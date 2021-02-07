var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevBuild = process.env.NODE_ENV !== 'production';

module.exports = {
	// https://webpack.js.org/concepts/mode/
	mode: isDevBuild ? 'development' : 'production',

	// Context is the path for resolving `entry`, loaders, and other files in this config file.
	context: path.join(process.cwd(), 'src'),

	entry: 'demo-index.js',
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: 'demo.bundle.js',
	},
	devtool: isDevBuild ? 'eval-source-map' : 'source-map',
	resolve: {
		modules: [path.resolve('./node_modules'), path.resolve('./src')]
	},

	/* The value after the colon depends directly on “output.libraryTarget”. For example, if the
		target is 'amd', then this value is the RequireJS module name. If target is 'var', then the
		value is the global (window) name. */
	// externals: {
	// 	react: 'React',
	// 	'react-dom': 'ReactDOM'
	// },

	plugins: (function () {
		// When the Webpack CLI is called with the `-p` flag, it will cause the uglifyjs-webpack-plugin
		// automatically be loaded and used; no need to explicity do that here.
		const plugins = [];

		if (isDevBuild) {
			plugins.push(new HtmlWebpackPlugin());
		}

		return plugins;
	})(),

	module: {
		rules: [
			// {
			// 	test: /\.jsx?$/,
			// 	enforce: 'pre',
			// 	use: [
			// 		{
			// 			loader: require.resolve('eslint-loader')
			// 		}
			// 	],
			// 	include: [path.resolve(process.cwd(), 'src')]
			// },

			{
				/* CSS loaders */
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader' // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.jsx?$/,
				include: [path.resolve(process.cwd(), 'src')],
				loader: require.resolve('babel-loader'),
				options: {
					/* This is a feature of babel-loader that will allow for faster rebuilds by
							caching results in ./node_modules/.cache/babel-loader/. */
					cacheDirectory: true
				}
			}
		]
	},

	devServer: {
		contentBase: path.join(process.cwd(), 'dist'),
		compress: true,
		host: 'localhost',
		port: 8080,
		noInfo: true,
		open: true,
		overlay: true
	}
};

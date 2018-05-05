import merge from 'webpack-merge'
import baseConfig from './base.config.babel.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

const path = require('path')

export default merge(baseConfig, {
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: path.resolve(__dirname, '/js/'),
		filename: 'js/bundle.js',
	},

	devServer: {
		inline: true,
		historyApiFallback: true,
		port: 3000,
		publicPath: path.resolve(__dirname, '/build/'),
		watchOptions: {
		  aggregateTimeout: 300,
		  poll: 1000
		},
		headers: {
		    "Access-Control-Allow-Origin": "http://localhost:3000",
		    "Access-Control-Allow-Credentials": "true",
		    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
		    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
		}
	},

	module: {
		rules: [
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
	]
})
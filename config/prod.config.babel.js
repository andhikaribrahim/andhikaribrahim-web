import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import baseConfig from './base.config.babel.js'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import UglifyJS from 'uglifyjs-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

export default merge(baseConfig, {
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'build.[chunkhash].js',
	},

	module: {
		rules: [
			{
				test: /\.styl$/,
				loader: ExtractTextWebpackPlugin.extract('css-loader!stylus-loader')
			},
			{
				test: /\.css$/,
				loader: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
      	template: path.resolve(__dirname, '../index.prod.html')
		}),
		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        
		new ExtractTextWebpackPlugin('build.[chunkhash].css'),
		new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new VueLoaderPlugin()
	],
	devtool: '#source-map'
})
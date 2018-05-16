import webpack from 'webpack';
import path from 'path';

const baseConfig = {
	entry: {
		app: './src/main.js',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				],
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				],
			},
			{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'Components': path.resolve(__dirname, '../src/Components'),
			'Services': path.resolve(__dirname, '../src/Services'),
			'Directives': path.resolve(__dirname, '../src/Directives'),
			'Routes': path.resolve(__dirname, '../src/Routes'),
			'Stores': path.resolve(__dirname, '../src/Stores'),
			'Views': path.resolve(__dirname, '../src/Views'),
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	plugins: [
		new webpack.EnvironmentPlugin([
			'NODE_ENV',
		])
	],
};

export default baseConfig;
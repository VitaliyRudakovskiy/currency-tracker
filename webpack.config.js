const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	target: 'web',
	devServer: {
		historyApiFallback: true,
		port: '5000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.tsx', '.jsx', '.ts', '.json'],

		alias: {
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@constants': path.resolve(__dirname, 'src/constants/'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@providers': path.resolve(__dirname, 'src/providers/'),
			'@store': path.resolve(__dirname, 'src/store/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							noEmit: false,
						},
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg|ico)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		//new ESLintWebpackPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
	],
};

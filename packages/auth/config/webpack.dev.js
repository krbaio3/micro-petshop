// Dependencias de terceros
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuraciones comunes
const common = require('./webpack.common.js');
const packageJson = require('../package.json');

// Puerto de desarrollo
const PORT = process.env.PORT || 8082;

// Configuraciones de desarrollo
const devConfig = {
	mode: 'development',
	output: {
		publicPath: `http://localhost:${PORT}/`,
	},
	devServer: {
		port: PORT,
		historyApiFallback: {
			index: '/index.html',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'authorization',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap.jsx',
			},
			shared: packageJson.dependencies,
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

module.exports = merge(common, devConfig);

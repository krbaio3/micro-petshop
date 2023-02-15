// Dependencias de terceros
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Configuraciones comunes
const common = require('./webpack.common.js');
const packageJson = require('../package.json');

// Configuraciones de desarrollo
const devConfig = {
	mode: 'development',
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingApp': './src/bootstrap.jsx',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(common, devConfig);

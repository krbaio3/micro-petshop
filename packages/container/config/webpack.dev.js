// Dependencias de terceros
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Configuraciones comunes
const common = require('./webpack.common.js');
const packageJson = require('../package.json');

// Puerto de desarrollo
const PORT = process.env.PORT || 8080;

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
			name: 'container',
			remotes: {
				marketing: 'marketing@http://localhost:8081/remoteEntry.js',
				authorization: 'authorization@http://localhost:8082/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(common, devConfig);

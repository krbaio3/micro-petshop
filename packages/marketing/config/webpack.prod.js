const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const packageJson = require('../package.json');

console.log('version', packageJson.version);

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
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

module.exports = merge(common, prodConfig);

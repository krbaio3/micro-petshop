const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Common webpack config
const common = require('./webpack.common');
// Get the package.json file
const packageJson = require('../package.json');

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/marketing/latest/',
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

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN || 'http://localhost:8081';

console.log('domain', domain);
console.log('version', packageJson.version);

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: `marketing@${domain}/marketing/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(common, prodConfig);

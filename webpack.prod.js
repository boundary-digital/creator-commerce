const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new WebpackShellPluginNext({
			onBuildEnd: {
				scripts: [
					() => {
						fs.copyFile(
							path.resolve(__dirname, `./dist/app.js`),
							path.resolve(__dirname, `./dist/bundle.js.txt`),
							(err) => {
								if (err) throw err;
							}
						);
					},
				],
			},
		}),
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
});

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

let entries = {}; // ビルドするファイル群

const srcDir = './src/blocks';
const blocks = [
	'sample'
];

blocks.forEach((key) => {
	entries[key + '/index'] = path.resolve( srcDir, key + '/index.js');
});

/**
 * CleanWebpackPlugin （ビルド先のほかのファイルを勝手に削除するやつ） はオフに。
 */
// defaultConfig.plugins.shift();

console.log(entries);
/**
 * exports
 */
module.exports = {
	...defaultConfig, //@wordpress/scriptを引き継ぐ

	// mode: 'production', // npm start でも圧縮させる

	//エントリーポイント
	entry: entries,

	//アウトプット先
	output: {
		path: path.resolve(__dirname, 'blocks'),
		filename: '[name].js',
	},

	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@block': path.resolve(__dirname, 'src/blocks'),
		},
	},
	// plugins: [ ...defaultConfig.plugins, new HardSourceWebpackPlugin() ],
	//performance: { hints: false },
};
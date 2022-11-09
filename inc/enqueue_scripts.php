<?php 

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * ファイルの読み込み
 */
add_action( 'wp_enqueue_scripts', 'enqueue_front_scripts', 9 );
add_action( 'wp_footer', 'enqueue_scripts_after', 1 );
add_action( 'enqueue_block_editor_assets', 'enqueue_block_scripts' );

// フォームでyubinbangoを使う用（xxxxにmw_wp_formのIDを入れる）
add_action( 'mwform_enqueue_scripts_mw-wp-form-xxxx', 'yubinbango_enqueue_scripts');

/**
 * フロントで読み込むファイル
 */
function enqueue_front_scripts() {
	
	// wp-block-libraryを読み込み
	wp_enqueue_style( 'wp-block-library' );

	// main.css
	noncash_enqueue_style( 'hts-main-style', '/css/main.css' );

}

/**
 * フッターで読み込み判定するファイル
 */
function enqueue_scripts_after() {
	
	noncash_enqueue_script( 'hts-main-script', '/js/main.js', array('arkhe-main-script'));
	
	// swiper 店舗一覧ページの場合のスライダー（arkhe-blocks-proの有効化前提）
	if ( is_plugin_active('arkhe-blocks-pro/arkhe-blocks-pro.php')) {

		if ( is_post_type_archive( 'shop' ) || is_singular( 'shop' ) ) {

			wp_enqueue_style( 'arkhe-blocks-swiper', ARKHE_BLOCKS_URL . 'assets/css/swiper.min.css', [], \Arkhe_Blocks::$file_ver );
			wp_enqueue_script( 'arkhe-blocks-swiper', ARKHE_BLOCKS_URL . 'assets/js/swiper.min.js', [], \Arkhe_Blocks::$file_ver, true );
			wp_enqueue_script( 'arkhe-blocks-slider-swiper', ARKHE_BLOCKS_URL . 'dist/gutenberg/blocks/slider/script.js', [ 'arkhe-blocks-swiper' ], \Arkhe_Blocks::$file_ver, true );
		}
	}
}

/**
 * yubinbango.jsをエンキューする
 */
function yubinbango_enqueue_scripts() {
	wp_enqueue_script( 'yubinbango', 'https://yubinbango.github.io/yubinbango/yubinbango.js', \Arkhe_Blocks::$file_ver, true );
};

/**
 * Gutenberg用ファイル
 */
function enqueue_block_scripts( $hook_suffix ) {

	noncash_enqueue_style( 'hts-editor', '/css/main.css' );
	noncash_enqueue_style( 'hts-editor', '/css/editor.css' );

}


/**
 * noncash_enqueue_style
 * 更新時のキャッシュ対策付きで読み込み
 * 
 * @param [string] $id
 * @param [string] $filepath
 * @return void
 */
if ( !function_exists( 'noncash_enqueue_style' ) ) {

	function noncash_enqueue_style(	$id, $filepath, $deps = [] ) {

		$time_stamp = date( 'Ymdgis', filemtime( ARKHE_CHILD_PATH . $filepath  ) );
		wp_enqueue_style( $id, ARKHE_CHILD_URI . $filepath , $deps, $time_stamp );

	}
}

/**
 * noncash_enqueue_script
 * 更新時のキャッシュ対策付きで読み込み
 * 
 * @param [string] $id
 * @param [string] $filepath
 * @return void
 */
if ( !function_exists( 'noncash_enqueue_script' ) ) {

	function noncash_enqueue_script(	$id, $filepath, $deps = array()  ) {

		$time_stamp = date( 'Ymdgis', filemtime( ARKHE_CHILD_PATH . $filepath  ) );
		wp_enqueue_script( $id, ARKHE_CHILD_URI . $filepath , $deps, $time_stamp );

	}
}
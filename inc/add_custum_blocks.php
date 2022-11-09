<?php 

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

//カスタムブロックの登録
add_action( 'init', function() {
	register_block_type( ARKHE_CHILD_PATH . '/blocks/sample');

	// ダイナミックブロック
	// register_block_type( __DIR__ . '/dist/sample', [
	// 	'render_callback' => 'sample',
	// ]);
});

//ブロックカテゴリーの追加
add_filter( 'block_categories_all', function ( $categories ) {
	$my_category = [
			'slug'  => 'sample', // ブロックカテゴリーのスラッグ
			'title' => 'オリジナルブロック', // ブロックカテゴリーの表示名
			'icon'  => 'smiley',
	];
	array_unshift( $categories, $my_category ); // 先頭に追加
	return $categories;
} );

/**
 * ダイナミックブロックレンダリング
 */

//ピックアップ投稿
// require_once __DIR__ . '/inc/blocks_callback/sample.php';
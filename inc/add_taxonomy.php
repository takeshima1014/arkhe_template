<?php 

/**
 * タクソノミーの追加
 * 
 * オプションについて
 * https://wpdocs.osdn.jp/関数リファレンス/register_taxonomy
 */

add_action( 'init', function () {

	$taxonomies = [
		[
			/**
			 * Taxonomy: 店舗情報タグ.
			 */
			'slug' => 'shop_tag',
	
			'object_type' => [ 'shop' ],

			'setting' => [
				'label' => 'タグ',
				'labels' => [
					'name' => 'タグ',
					'singular_name' => 'タグ',
				],
				'public' => true,
				'publicly_queryable' => true,
				'hierarchical' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_nav_menus' => true,
				'show_in_rest' => true,
				'query_var' => true,
				'rewrite' => [ 'with_front' => true, 'hierarchical' => false ],
				'show_tagcloud' => true,
				'has_archive' => false,
				'delete_with_user' => false,
				'exclude_from_search' => true,
				'capability_type' => 'post',
				'map_meta_cap' => true,
				'show_in_quick_edit' => true,
				'show_in_graphql' => false,
			]
		]
	];
	
	foreach ( $taxonomies as $taxonomy ) {
		register_taxonomy( $taxonomy[ 'slug' ], $taxonomy[ 'object_type' ] , $taxonomy[ 'setting' ] );
	}
	
});
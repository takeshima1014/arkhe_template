<?php 

/**
 * 投稿タイプの追加
 * 
 * オプションについて
 * https://wpdocs.osdn.jp/関数リファレンス/register_post_type
 * 
 */

add_action( 'init', function () {

	$post_types = [
		[
			'slug' => 'shop',//投稿タイプスラッグ
	
			'setting' => [
				'label' => '店舗情報',
				'labels' => [
					'name' => '店舗情報',
					'singular_name' => '店舗情報',
					'all_items' => '店舗一覧'
				],
				'description' => '',
				'menu_icon' => 'dashicons-store', //https://developer.wordpress.org/resource/dashicons/
				'public' => true,
				'publicly_queryable' => true,
				'show_ui' => true,
				'show_in_rest' => true,
				'rest_base' => '',
				'rest_controller_class' => 'WP_REST_Posts_Controller',
				'rest_namespace' => 'wp/v2',
				'has_archive' => true,
				'show_in_menu' => true,
				'show_in_nav_menus' => true,
				'delete_with_user' => false,
				'exclude_from_search' => false,
				'capability_type' => 'post',
				'map_meta_cap' => true,
				'hierarchical' => false,
				'can_export' => false,
				'rewrite' => [ 'slug' => 'experience', 'with_front' => true ],
				'query_var' => true,
				'supports' => [ 'title', 'editor', 'thumbnail' ],
				'show_in_graphql' => false,
			]
		]
	];
	
	foreach ( $post_types as $post_type ) {
		register_post_type( $post_type[ 'slug' ], $post_type[ 'setting' ] );
	}
	
});

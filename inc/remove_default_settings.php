<?php

if ( ! defined( 'ABSPATH' ) ) exit;

$data = [
	'remove_wpver'						=> 	true,		// WordPressのバージョン情報
	'remove_srcset'						=>	false,		// srcsetの出力停止
	'remove_emoji'						=>	false,		// 絵文字の使用停止
	'remove_rel_link'					=>	false,		// rel="prev"とrel="next"のlinkタグの出力停止
	'remove_wlwmanifest'			=>	false,		// Windows Live Writeの停止
	'remove_rsd_link'					=>	false,		// EditURI(RSD Link)の停止
	'remove_wptexturize'			=>	false,		// 記号の自動変換停止(wptexturize無効化)
	'remove_feed_link'				=>	false,		// RSSフィードの出力停止
	'remove_rest_link'				=>	false,		// https://api.w.org/ の出力停止
	'remove_sitemap'					=>	false,		// コアのサイトマップ機能停止
	'remove_self_ping'				=>	false,		// セルフピンバックの停止
	'remove_cssjs'						=>	false,		// js|cssのバージョン削除
	'remove_empty_paragraph'	=>	false,		// エディター内の空のPタグの除去
	'remove_core_styles'			=>	false,		// コアで出力されるスタイルを除去
	'remove_render_svg'				=>	false,		// bodyタグ直下で出力されるSVGを除去
	'remove_menu_class'				=>	true			// カスタムメニューの不要なクラス名を削除する
];

// WordPressのバージョン情報
if ( $data['remove_wpver'] ) {
	remove_action( 'wp_head', 'wp_generator' );
}

// srcsetの出力停止
if ( $data['remove_srcset'] ) {
	add_filter( 'wp_calculate_image_srcset_meta', '__return_null' );
}

// 絵文字の使用停止
if ( $data['remove_emoji'] ) {
	add_filter( 'emoji_svg_url', '__return_false' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
}

// rel="prev"とrel="next"のlinkタグの出力停止
if ( $data['remove_rel_link'] ) {
	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
}

// Windows Live Writeの停止
if ( $data['remove_wlwmanifest'] ) {
	remove_action( 'wp_head', 'wlwmanifest_link' );
}
// EditURI(RSD Link)の停止
if ( $data['remove_rsd_link'] ) {
	remove_action( 'wp_head', 'rsd_link' );
}

// 記号の自動変換停止(wptexturize無効化)
if ( $data['remove_wptexturize'] ) {
	add_filter( 'run_wptexturize', '__return_false' );
}

// RSSフィード
if ( $data['remove_feed_link'] ) {
	remove_action( 'wp_head', 'feed_links', 2 ); // 記事フィードリンク停止
	remove_action( 'wp_head', 'feed_links_extra', 3 ); // カテゴリ・コメントフィードリンク停止
} else {
	add_theme_support( 'automatic-feed-links' );
}

// HTMLチェックで「Bad value」になるやつ https://api.w.org/ を消す
if ( $data['remove_rest_link'] ) {
	remove_action( 'wp_head', 'rest_output_link_wp_head' );
}

// コアのサイトマップ機能停止
if ( $data['remove_sitemap'] ) {
	add_filter( 'wp_sitemaps_enabled', '__return_false' );
	// add_filter( 'wp_sitemaps_users_pre_url_list', '__return_false' );
}

// セルフピンバックの停止
if ( $data['remove_self_ping'] ) {
	add_action( 'pre_ping', function( &$post_links ) {
		$home = home_url();
		foreach ( $post_links as $key => $link ) {
			if ( 0 === strpos( $link, $home ) ) {
				unset( $post_links[ $key ] );
			}
		}
	} );
}

// js|cssのバージョン削除
if ( $data['remove_cssjs'] ) {
	add_filter( 'style_loader_src', 'remove_cssjs', 9999 );
	add_filter( 'script_loader_src', 'remove_cssjs', 9999 );
	
	function remove_cssjs( $src ) {
		if ( strpos( $src, 'ver=' ) )
				$src = remove_query_arg( 'ver', $src );
		return $src;
	}
}

// エディター内の空のPタグの除去
if ( $data['remove_empty_paragraph'] ) {
	add_filter( 'the_content', 'remove_empty_paragraph', 12 );
	add_filter( 'widget_block_content', 'remove_empty_paragraph', 12 );

	function remove_empty_paragraph ( $content ) {
		$content = str_replace( '<p></p>', '', $content );
		return $content;
	}
}

// コアで出力されるスタイルを除去
if ( $data['remove_core_styles'] ) {
	remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
}

// bodyタグ直下で出力されるSVGを除去
if ( $data['remove_render_svg'] ) {
	remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );
}

//カスタムメニューの不要なクラス名を削除する
if ( $data['remove_menu_class'] ) {
	add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1);
	add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1);
	add_filter('page_css_class', 'my_css_attributes_filter', 100, 1);
	
	function my_css_attributes_filter($var) {
		return is_array($var) ? array_intersect($var, array( 'menu-item','c-gnav__item' ) ) : '';
	}
}
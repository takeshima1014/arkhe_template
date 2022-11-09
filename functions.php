<?php
/**
 * Arkhe用子テーマ用 function.php
 */
defined( 'ABSPATH' ) || exit;

/**
 * 子テーマのパス, URI
 */
define( 'ARKHE_CHILD_PATH', get_stylesheet_directory() );
define( 'ARKHE_CHILD_URI', get_stylesheet_directory_uri() );

//テーマ専用関数
require_once __DIR__ . '/inc/theme_funtions.php';

//コアの設定の除去
require_once __DIR__ . '/inc/remove_default_settings.php';

// スクリプトの読み込み
require_once __DIR__ . '/inc/enqueue_scripts.php';

// 管理画面のカスタマイズ
require_once __DIR__ . '/inc/admin_menu_custom.php';

// カスタム投稿タイプの追加
require_once __DIR__ . '/inc/add_post_type.php';

// カスタムカスタムタクソノミーの追加
require_once __DIR__ . '/inc/add_taxonomy.php';

// ナビメニューの出力カスタマイズ
require_once __DIR__ . '/inc/custum_nav_menu.php';

// WordPressのhook処理
require_once __DIR__ . '/inc/wp_hooks.php';

// カスタムブロックスタイルの追加
require_once __DIR__ . '/inc/add_core_block_style.php';

// カスタムブロックの追加
require_once __DIR__ . '/inc/add_custum_blocks.php';
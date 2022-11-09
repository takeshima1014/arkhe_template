<?php 

if ( ! defined( 'ABSPATH' ) ) exit;

//【管理画面】コメントページを非表示
add_action( 'admin_menu', function () {
  global $menu;
  // unset($menu[2]);  // ダッシュボード
  // unset($menu[4]);  // メニューの線1
  // unset($menu[5]);  // 投稿
  // unset($menu[10]); // メディア
  // unset($menu[15]); // リンク
  // unset($menu[20]); // ページ
  unset($menu[25]); // コメント
  // unset($menu[59]); // メニューの線2
  // unset($menu[60]); // テーマ
  // unset($menu[65]); // プラグイン
  // unset($menu[70]); // プロフィール
  // unset($menu[75]); // ツール
  // unset($menu[80]); // 設定
  // unset($menu[90]); // メニューの線3
	
  if (!current_user_can('administrator')) { //管理者権限以外のユーザーの場合以下メニューを削除する
    global $menu;
    unset($menu[75]); // ツール
  }
});

add_action('admin_bar_menu', function( $wp_admin_bar ) {
  if (!current_user_can('administrator')) { //管理者権限以外のユーザーの場合以下メニューを削除する
    //$wp_admin_bar->remove_menu( 'wp-logo' );      // WordPressロゴ
    //$wp_admin_bar->remove_menu( 'site-name' );    // サイト名
    //$wp_admin_bar->remove_menu( 'view-site' );    // サイト名 → サイトを表示
    //$wp_admin_bar->remove_menu( 'dashboard' );    // サイト名 → ダッシュボード（ウェブサイト側）
    //$wp_admin_bar->remove_menu( 'themes' );       // サイト名 → テーマ（ウェブサイト側）
    $wp_admin_bar->remove_menu( 'customize' );    // サイト名 → カスタマイズ（ウェブサイト側）
    $wp_admin_bar->remove_menu( 'comments' );     // コメント
    $wp_admin_bar->remove_menu( 'updates' );      // 更新
    //$wp_admin_bar->remove_menu( 'view' );         // 投稿を表示
    //$wp_admin_bar->remove_menu( 'new-content' );  // 新規
    //$wp_admin_bar->remove_menu( 'new-post' );     // 新規 → 投稿
    //$wp_admin_bar->remove_menu( 'new-media' );    // 新規 → メディア
    //$wp_admin_bar->remove_menu( 'new-link' );     // 新規 → リンク
    //$wp_admin_bar->remove_menu( 'new-page' );     // 新規 → 固定ページ
    //$wp_admin_bar->remove_menu( 'new-user' );     // 新規 → ユーザー
    //$wp_admin_bar->remove_menu( 'my-account' );   // マイアカウント
    //$wp_admin_bar->remove_menu( 'user-info' );    // マイアカウント → プロフィール
    //$wp_admin_bar->remove_menu( 'edit-profile' ); // マイアカウント → プロフィール編集
    //$wp_admin_bar->remove_menu( 'logout' );       // マイアカウント → ログアウト
    //$wp_admin_bar->remove_menu( 'search' );       // 検索（ウェブサイト側）
  }
}, 999 );
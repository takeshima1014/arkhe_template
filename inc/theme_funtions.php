<?php 

/**
 * 画像のimg_setの出力
 */
if ( !function_exists( 'hts_image_set' ) ) {

	function hts_image_set( $array = array('n'=>'', 'w'=>'', 'h'=>'', 'alt'=>'') ){
		
		if(!$array['n']||!$array['w']||!$array['h']) return;
		$alt = $array['alt'] ? ['alt' => $array['alt']] : '';

		echo wp_get_attachment_image(hts_image_id($array['n']),array($array['w'],$array['h']),false, $alt );
	}
}

/**
 * テスト環境対応用（サブディレクトリ名を取得する）
 */
if ( !function_exists( 'hts_get_sub_directory' ) ) {

	function hts_get_sub_directory() {
		
		$home_url = str_replace( ['http://','https://'], ['',''], home_url() );
		$site_url = strpos( $home_url, '/' ) ? strstr( $home_url, '/', true) : $home_url;
		return str_replace( $site_url , '', $home_url );

	}
}

//URLのサブディレクトリ名を定数化しておく
define( 'SUB_DIRECTORY_NAME', hts_get_sub_directory() );

/**
 * パーマリンクを省略
 */
if ( !function_exists( 'hts_omit_url' ) ) {

	function hts_omit_url( $url ) {
		
		return str_replace( home_url(), SUB_DIRECTORY_NAME, $url, );

	}

}
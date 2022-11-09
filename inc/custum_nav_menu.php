<?php 

if ( ! defined( 'ABSPATH' ) ) exit;

add_filter('wp_nav_menu_objects', function( $items, $args ) {

	// var_dump($items,$args);
	$location = $args->theme_location;

	foreach( $items as $item ) {
		
		$item->url = hts_omit_url( $item->url );

	}

	// return
	return $items;
	
}, 9999, 2);

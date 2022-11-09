<?php 
/**
 * オリジナルブロックスタイル
 */

add_action( 'init', function() {

	$blocks = [

		//見出し角丸
		[
			'type' => 'core/heading',
			'setting' => [
				'name' => 'original-zenmaru',
				'label' => '丸ゴシック',
				'inline_style' => '.is-style-original-zenmaru { 
					font-family: var(--wp--preset--font-family--original-heading-font) !important;
				}',
			]
		],
		//見出し角丸
		[
			'type' => 'core/paragraph',
			'setting' => [
				'name' => 'original-zenmaru',
				'label' => '丸ゴシック',
				'inline_style' => 'p.is-style-original-zenmaru { 
					font-family: var(--wp--preset--font-family--original-heading-font);
				}',
			]
		]
	];

	foreach ( $blocks as $block ) {
		register_block_style( $block[ 'type' ], $block[ 'setting' ] );
	}
} );
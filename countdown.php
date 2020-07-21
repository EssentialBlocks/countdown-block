<?php
/**
 * Plugin Name:     Countdown
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     create-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_countdown_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/countdown" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-countdown-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-countdown-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-countdown-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$datetime_css = 'src/css/react-datetime.css';
	wp_enqueue_style(
	   'react-datetime-style',
	   plugins_url($datetime_css, __FILE__),
	   array()
   );


	$frontend_js = 'src/frontend.js';
	wp_enqueue_script(
		'essential-blocks-countdown-frontend',
		plugins_url($frontend_js, __FILE__),
		array( "jquery","wp-editor"),
		true
	);


	register_block_type( 'create-block/countdown', array(
		'editor_script' => 'create-block-countdown-block-editor',
		'editor_style'  => 'create-block-countdown-block-editor',
		'style'         => 'create-block-countdown-block',
		'datetime_style'=> 'react-datetime-style',
		'countdown_frontend' => 'essential-blocks-countdown-frontend',
	) );
}
add_action( 'init', 'create_block_countdown_block_init' );

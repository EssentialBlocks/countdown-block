<?php
/**
 * Plugin Name:     Countdown Block
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Highlight Upcoming Events With Countdown Timer.
 * Version:         1.0.2
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     countdown-block
 *
 * @package         countdown-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';

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


	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/countdown' ) ) {
    register_block_type( 'block/countdown', array(
      'editor_script' => 'create-block-countdown-block-editor',
      'style'         => 'create-block-countdown-block',
      'datetime_style'=> 'react-datetime-style',
      'countdown_frontend' => 'essential-blocks-countdown-frontend',
    ) );
  }
}
add_action( 'init', 'create_block_countdown_block_init' );

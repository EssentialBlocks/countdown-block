<?php

/**
 * Plugin Name:   Countdown Block
 * Plugin URI: 		https://essential-blocks.com
 * Description:   Highlight Upcoming Events With Countdown Timer.
 * Version:       1.1.3
 * Author:        WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:       GPL-3.0-or-later
 * License URI:   https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:   countdown-block
 *
 * @package       countdown-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';


function create_block_countdown_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/countdown" block first.'
		);
	}

	$index_js     = 'build/index.js';
	wp_register_script(
		'create-block-countdown-block-editor',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
			'wp-editor',
		),
		filemtime("$dir/$index_js")
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-countdown-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$frontend_js = 'build/frontend.js';
	wp_register_script(
		'essential-blocks-countdown-frontend',
		plugins_url($frontend_js, __FILE__),
		array("jquery", "wp-editor"),
		filemtime("$dir/$frontend_js"),
		true
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/countdown')) {
		register_block_type('countdown-block/countdown', array(
			'editor_script' => 'create-block-countdown-block-editor',
			'editor_style' => 'create-block-countdown-block-editor',
			'render_callback' => function ($attribs, $content) {
				if (!is_admin()) {
					wp_enqueue_script('essential-blocks-countdown-frontend');
				}
				return $content;
			}
		));
	}
}
add_action('init', 'create_block_countdown_block_init');

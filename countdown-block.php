<?php

/**
 * Plugin Name:   Countdown Block
 * Plugin URI: 		https://essential-blocks.com
 * Description:   Highlight Upcoming Events With Countdown Timer.
 * Version:       1.2.0
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


define('COUNTDOWN_VERSION', "1.2.0");
define('COUNTDOWN_ADMIN_URL', plugin_dir_url(__FILE__));
define('COUNTDOWN_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_countdown_block_init()
{

	$script_asset_path = COUNTDOWN_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "countdown-block/countdown" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'countdown-controls-util',
	));

	$index_js     = COUNTDOWN_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-countdown-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$style_css     = COUNTDOWN_ADMIN_URL . 'dist/style.css';
	wp_register_style(
		'create-block-countdown-block-editor',
		$style_css,
		array(),
		COUNTDOWN_VERSION,
		"all"
	);


	$frontend_js = COUNTDOWN_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-countdown-frontend',
		$frontend_js,
		array(),
		COUNTDOWN_VERSION,
		true
	);


	//
	//
	//
	$controls_dependencies = require COUNTDOWN_ADMIN_PATH . '/dist/controls.asset.php';

	wp_register_script(
		"countdown-controls-util",
		COUNTDOWN_ADMIN_URL . '/dist/controls.js',
		array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
		$controls_dependencies['version'],
		true
	);

	wp_localize_script('countdown-controls-util', 'EssentialBlocksLocalize', array(
		'eb_wp_version' => (float) get_bloginfo('version'),
		'rest_rootURL' => get_rest_url(),
	));

	wp_register_style(
		'countdown-editor-css',
		COUNTDOWN_ADMIN_URL . '/dist/controls.css',
		array(
			"create-block-countdown-block-editor"
		),
		$controls_dependencies['version'],
		'all'
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/countdown')) {
		register_block_type(
			Countdown_Helper::get_block_register_path("countdown-block/countdown", COUNTDOWN_ADMIN_PATH),
			array(
				'editor_script'	=> 'create-block-countdown-block-editor',
				'editor_style' 	=> 'countdown-editor-css',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_script('essential-blocks-countdown-frontend');
						wp_enqueue_style('create-block-countdown-block-editor');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_countdown_block_init');

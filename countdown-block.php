<?php

/**
 * Plugin Name:   Countdown Block
 * Plugin URI:         https://essential-blocks.com
 * Description:   Highlight Upcoming Events With Countdown Timer.
 * Version:       1.2.6
 * Author:        WPDeveloper
 * Author URI:         https://wpdeveloper.net
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

define( 'COUNTDOWN_VERSION', "1.2.6" );
define( 'COUNTDOWN_ADMIN_URL', plugin_dir_url( __FILE__ ) );
define( 'COUNTDOWN_ADMIN_PATH', dirname( __FILE__ ) );

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_countdown_block_init() {

    $script_asset_path = COUNTDOWN_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "countdown-block/countdown" block first.'
        );
    }
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'countdown-controls-util',
        'essential-blocks-eb-animation'
    ] );

    $index_js = COUNTDOWN_ADMIN_URL . 'dist/index.js';
    wp_register_script(
        'create-block-countdown-block-editor',
        $index_js,
        $all_dependencies,
        $script_asset['version'],
        true
    );

    $load_animation_js = COUNTDOWN_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        COUNTDOWN_VERSION,
        true
    );

    $animate_css = COUNTDOWN_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        COUNTDOWN_VERSION
    );

    $style_css = COUNTDOWN_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'create-block-countdown-block-editor-css',
        $style_css,
        ['essential-blocks-animation'],
        COUNTDOWN_VERSION,
        "all"
    );

    $frontend_js = COUNTDOWN_ADMIN_URL . 'dist/frontend/index.js';
    wp_register_script(
        'essential-blocks-countdown-frontend',
        $frontend_js,
        [],
        COUNTDOWN_VERSION,
        true
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/countdown' ) ) {
        register_block_type(
            Countdown_Helper::get_block_register_path( "countdown-block/countdown", COUNTDOWN_ADMIN_PATH ),
            [
                'editor_script'   => 'create-block-countdown-block-editor',
                'editor_style'    => 'create-block-countdown-block-editor-css',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_style( 'create-block-countdown-block-editor-css' );
                        wp_enqueue_script( 'essential-blocks-countdown-frontend' );
                        wp_enqueue_script( 'essential-blocks-eb-animation' );
                    }
                    return $content;
                }
            ]
        );
    }
}

add_action( 'init', 'create_block_countdown_block_init', 99 );

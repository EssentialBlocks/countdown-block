<?php

/**
 * Plugin Name:   Countdown Block
 * Plugin URI:         https://essential-blocks.com
 * Description:   Highlight Upcoming Events With Countdown Timer.
 * Version:       1.5.2
 * Requires at least: 6.0
 * Tested up to:  7.0
 * Requires PHP:  7.4
 * Author:        WPDeveloper
 * Author URI:         https://wpdeveloper.net
 * License:       GPL-3.0-or-later
 * License URI:   https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:   countdown-block
 *
 * @package       countdown-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define( 'COUNTDOWN_VERSION', "1.5.2" );
define( 'COUNTDOWN_ADMIN_URL', plugin_dir_url( __FILE__ ) );
define( 'COUNTDOWN_ADMIN_PATH', dirname( __FILE__ ) );

require_once __DIR__ . '/includes/font-loader.php';
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
    if ( ! is_array( $script_asset ) ) {
        $script_asset = [];
    }
    $asset_dependencies = isset( $script_asset['dependencies'] ) && is_array( $script_asset['dependencies'] ) ? $script_asset['dependencies'] : [];
    $asset_version      = isset( $script_asset['version'] ) ? $script_asset['version'] : COUNTDOWN_VERSION;
    $all_dependencies   = array_merge( $asset_dependencies, [
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
        $asset_version,
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

    $eb_has_block = WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/countdown' );
    $block_args   = [
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
    ];

    // Essential Blocks has its own version of this block under another name. Posts saved
    // with this one still need its render callback and front-end assets, so keep it
    // registered, but leave out the editor bundle, which can't run beside Essential Blocks.
    if ( $eb_has_block ) {
        unset( $block_args['editor_script'], $block_args['editor_style'] );
    }

    register_block_type(
        Countdown_Helper::get_block_register_path( "countdown-block/countdown", COUNTDOWN_ADMIN_PATH ),
        $block_args
    );
}

add_action( 'init', 'create_block_countdown_block_init', 99 );

/**
 * Block icons are filled #6C3BFF, which almost disappears on the highlighted row of
 * the "/" inserter, a selected List View row and the drag chip. Recolour them there,
 * as Essential Blocks does. The handle is shared, so the stylesheet prints once when
 * several of these plugins are active.
 */
function countdown_block_icon_selected_style() {
    wp_enqueue_style(
        'eb-block-icon-selected',
        plugins_url( 'assets/css/block-icon-selected.css', __FILE__ ),
        [],
        COUNTDOWN_VERSION
    );
}
add_action( 'enqueue_block_editor_assets', 'countdown_block_icon_selected_style' );

/**
 * Let Essential Blocks' animation assets win on the front end when it is active.
 *
 * Both plugins register these handles and the first registration wins. This
 * plugin's loader doesn't set `window.ebAnimationLoaded`, so Essential Blocks'
 * failsafe would reveal every animated block without playing it. Essential Blocks
 * registers its own at priority 20 and handles the same `.eb___animated` classes.
 */
function countdown_block_use_essential_blocks_animation() {
    if ( defined( 'ESSENTIAL_BLOCKS_VERSION' ) ) {
        wp_deregister_script( 'essential-blocks-eb-animation' );
        wp_deregister_style( 'essential-blocks-animation' );
    }
}
add_action( 'wp_enqueue_scripts', 'countdown_block_use_essential_blocks_animation', 19 );

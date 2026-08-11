<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Countdown_Helper
{
    private static $instance;

    /**
     * Construct Method
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Register the plugin
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    /**
     * Enqueue function
     */
    public function enqueues()
    {
        global $pagenow;

        /**
         * Only for admin add/edit pages/posts
         */
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false)) {

            $modules_asset_path = COUNTDOWN_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($modules_asset_path)) {
                return;
            }

            $controls_dependencies = require $modules_asset_path;
            if (!is_array($controls_dependencies)) {
                $controls_dependencies = array();
            }
            $controls_deps    = isset($controls_dependencies['dependencies']) && is_array($controls_dependencies['dependencies']) ? $controls_dependencies['dependencies'] : array();
            $controls_version = isset($controls_dependencies['version']) ? $controls_dependencies['version'] : COUNTDOWN_VERSION;

            wp_register_script(
                "countdown-controls-util",
                COUNTDOWN_ADMIN_URL . '/dist/modules.js',
                $controls_deps,
                $controls_version,
                true
            );

            wp_localize_script('countdown-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('countdown-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('countdown-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'countdown-editor-css',
                COUNTDOWN_ADMIN_URL . 'dist/modules.css',
                array(),
                $controls_version,
                'all'
            );
        }
    }

    /**
     * Block Register Function
     */
    public static function get_block_register_path($blockname, $blockPath)
    {
        // Never float-cast a WP version string: "5.10" would cast to 5.1.
        // version_compare( $wp, '5.7', '<' ) is exactly the old "<= 5.6" intent.
        if (version_compare(get_bloginfo('version'), '5.7', '<')) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}

Countdown_Helper::register();

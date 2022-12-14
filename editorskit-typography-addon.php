<?php

/**
 * Plugin Name:       Editorskit Typography Addon
 * Description:       (Deprecated) Editorskit typography addon lets you apply typography on blocks and global level.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            Munir Kamal
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       editorskit-typography-addon
 *
 */

define('EDITORSKIT_TYPOGRAPHY_ADDON_URL', plugin_dir_url(__FILE__));
define('EDITORSKIT_TYPOGRAPHY_ADDON_DIR', plugin_dir_path(__FILE__));
class EditorsKit_Typography_Addon
{
	private static $instance;
	public static function instance()
	{

		if (!isset(self::$instance) && !(self::$instance instanceof EditorsKit_Typography_Addon)) {
			self::$instance = new EditorsKit_Typography_Addon();
			self::$instance->includes();
			self::$instance->initFilters();
		}
		return self::$instance;
	}

	private function includes()
	{
		require_once	EDITORSKIT_TYPOGRAPHY_ADDON_DIR . 'includes/class-editorskit-typography-addon-post-meta.php';
		require_once	EDITORSKIT_TYPOGRAPHY_ADDON_DIR . 'includes/class-editorskit-typography-addon-font-loader.php';
		require_once	EDITORSKIT_TYPOGRAPHY_ADDON_DIR . 'includes/class-editorskit-block-typography-addon-manager.php';
	}
	public static function initFilters()
	{
		add_action('init', function () {
			global $pagenow;

			if ($pagenow === "widgets.php") {
				return;
			}

			wp_register_script(
				"editorskit-typography-addon-script",
				EDITORSKIT_TYPOGRAPHY_ADDON_URL . '/build/index.js',
				array(
					"wp-element",
					"wp-compose",
					"wp-hooks",
					"wp-block-editor",
					"wp-i18n",
					"wp-api"
				),
				uniqid()
			);
			wp_register_style(
				'editorskit-typography-addon-editor-style',
				EDITORSKIT_TYPOGRAPHY_ADDON_URL . '/build/index.css',
				array(),
				uniqid()
			);

			wp_register_style(
				'editorskit-typography-addon-frontend-style',
				EDITORSKIT_TYPOGRAPHY_ADDON_URL . '/build/style-index.css',
				array(),
				uniqid()
			);
		});

		add_action('enqueue_block_editor_assets', function () {
			$global = array(
				'plugin'   => array(
					'version' => '1.0.0',
					'url'     => EDITORSKIT_TYPOGRAPHY_ADDON_URL,
					'dir'     => EDITORSKIT_TYPOGRAPHY_ADDON_DIR,
				),
			);

			wp_add_inline_script("editorskit-typography-addon-script", 'window.editorskitTypographyAddonInfo = ' . wp_json_encode($global) . ';', 'before');
			wp_enqueue_script('editorskit-typography-addon-script');
			wp_enqueue_style('editorskit-typography-addon-editor-style');
		});

		add_action('init', function () {
			if (!is_admin()) {
				wp_enqueue_style('editorskit-typography-addon-frontend-style');
			}
		});
	}
}

function editorskit_typography_addon()
{
	return EditorsKit_Typography_Addon::instance();
}

// Get Plugin Running.
if (function_exists('is_multisite') && is_multisite()) {
	// Get Plugin Running. Load on plugins_loaded action to avoid issue on multisite.
	add_action('plugins_loaded', 'editorskit');
} else {
	editorskit_typography_addon();
}

/**
 * Internal dependencies
 */
import SidebarPanel from "./components/panel";

/**
 * WordPress dependencies
 */

import { typography } from "@wordpress/icons";
import domReady from "@wordpress/dom-ready";

domReady(() => {
	wp.plugins.registerPlugin("editorskit-typography-panel", {
		icon: typography,
		render: SidebarPanel,
	});
});

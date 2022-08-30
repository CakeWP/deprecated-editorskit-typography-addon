/**
 * Internal dependencies
 */
import icon from "./icon";
import SidebarPanel from "./components/panel";

/**
 * WordPress dependencies
 */

import domReady from "@wordpress/dom-ready";

domReady(() => {
	wp.plugins.registerPlugin("editorskit-typography-panel", {
		icon: icon.typography,
		render: SidebarPanel,
	});
});

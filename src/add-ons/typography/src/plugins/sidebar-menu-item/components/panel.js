/**
 * Internal dependencies
 */
import icon from "../icon";
import TypographySelection from "../../../components/font-selection";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { Fragment, Component } from "@wordpress/element";
import { withSpokenMessages } from "@wordpress/components";
import { BlockIcon } from "@wordpress/blockEditor";
// import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import domReady from "@wordpress/dom-ready";

/**
 * Render plugin
 */
class SidebarPanel extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isOpen: false,
		};
	}

	render() {
		let PluginSidebar;
		let PluginSidebarMoreMenuItem;
		domReady(() => {
			PluginSidebar = wp.editPost.PluginSidebar;
			PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
		});
		return (
			<Fragment>
				<PluginSidebarMoreMenuItem target="editorskit-typography-panel">
					{__("Typography Settings", "editorskit-typography-addon")}
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					name="editorskit-typography-panel"
					title={__("Typography Settings", "editorskit-typography-addon")}
				>
					<div className="editorskit-block-card">
						<div className="block-editor-block-card">
							<BlockIcon icon={icon.typography} showColors />
							<div className="block-editor-block-card__content">
								<div className="block-editor-block-card__title">
									{__("Typography Settings", "editorskit-typography-addon")}
								</div>
								<div className="block-editor-block-card__description">
									{__(
										"Select from predefined font combinations. You can also create custom combo or duplicate existing ones.",
										"editorskit-typography-addon"
									)}
								</div>
							</div>
						</div>
					</div>
					<TypographySelection />
				</PluginSidebar>
			</Fragment>
		);
	}
}

export default compose([
	withSelect((select) => {
		const { isFeatureActive } = select("core/edit-post");
		return {
			isDisabled: isFeatureActive("disableEditorsKitTypography"),
		};
	}),
	withSpokenMessages,
])(SidebarPanel);

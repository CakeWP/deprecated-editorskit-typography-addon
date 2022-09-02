/**
 * Internal dependencies
 */
import TypographySelection from "../../../components/font-selection";

/**
 * WordPress dependencies
 */
import { isFunction } from "lodash";
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { typography } from "@wordpress/icons";
import { BlockIcon } from "@wordpress/blockEditor";
import { Fragment, Component } from "@wordpress/element";
import { withSpokenMessages } from "@wordpress/components";

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
		let PluginSidebar = wp?.editPost?.PluginSidebar;
		let PluginSidebarMoreMenuItem = wp?.editPost?.PluginSidebarMoreMenuItem;

		if (!isFunction(PluginSidebar) || !isFunction(PluginSidebarMoreMenuItem)) {
			return null;
		}

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
							<BlockIcon icon={typography} showColors />
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

export default compose([withSpokenMessages])(SidebarPanel);

import { find } from "lodash";

/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import TypographySettings from "./typography";
import applyFontStyle from "./apply-style";
import GoogleFonts from "../defaults/google-fonts.json";

/**
 * WordPress Dependencies
 */
import { addFilter } from "@wordpress/hooks";
import { hasBlockSupport, getBlockType } from "@wordpress/blocks";
import { Fragment, useEffect, useMemo } from "@wordpress/element";
import { withSelect, withDispatch, useSelect } from "@wordpress/data";
import { compose, createHigherOrderComponent } from "@wordpress/compose";

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes(settings) {
	if (
		typeof settings.attributes !== "undefined" &&
		!hasBlockSupport(settings, "disableEditorsKitTypography")
	) {
		settings.attributes = Object.assign(settings.attributes, {
			editorskit_typography: {
				type: "object",
				default: {
					name: "",
					family: "",
					weight: "",
				},
			},
		});
	}

	return settings;
}

/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
	/**
	 * For blocks whose block type doesn't support `multiple`, provides the
	 * wrapped component with `originalBlockClientId` -- a reference to the
	 * first block of the same type in the content -- if and only if that
	 * "original" block is not the current one. Thus, an inexisting
	 * `originalBlockClientId` prop signals that the block is valid.
	 *
	 */
	withDispatch((dispatch) => {
		const { editPost } = dispatch("core/editor");
		return {
			saveBlockTypography(value) {
				editPost({
					meta: {
						_editorskit_blocks_typography: value,
					},
				});
			},
		};
	}),
	withSelect((select) => {
		return {
			select,
		};
	})
);

const withBlockPanel = createHigherOrderComponent((BlockEdit) => {
	return enhance(({ ...props }) => {
		const { name, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&
					!hasBlockSupport(name, "disableEditorsKitTypography") && (
						<TypographySettings {...props} />
					)}
			</Fragment>
		);
	});
}, "withBlockPanel");

const withTypographySettings = createHigherOrderComponent((BlockListBlock) => {
	return enhance(({ saveBlockTypography, select, ...props }) => {
		const { setAttributes } = props;
		let wrapperProps = props.wrapperProps;
		let customData = {};
		const googleLink = "https://fonts.googleapis.com/css?family=";
		const meta = useSelect(
			(select) => select("core/editor").getEditedPostAttribute("meta"),
			[]
		);
		let editorskit_blocks_typography = useMemo(() => {
			if (meta !== null && typeof meta !== "undefined") {
				return meta["_editorskit_blocks_typography"] || "";
			}
		}, [meta]);
		const blockType = getBlockType(props.name);
		if (blockType.getEditWrapperProps) {
			wrapperProps = {
				...wrapperProps,
				...blockType.getEditWrapperProps(blockType.attributes),
			};
		}

		if (!hasBlockSupport(props.name, "disableEditorsKitTypography")) {
			const { editorskit_typography } = props.attributes;
			const onSelectFamily = (key, value) => {
				const oldValue = editorskit_typography[key];
				delete editorskit_typography[key];

				// Add Google Font
				const link = document.createElement("link");
				link.rel = "stylesheet";
				const googleFontData = find(GoogleFonts.fonts, ["name", value]);

				if (googleFontData) {
					link.href =
						googleLink + value.replace(" ", "+") + ":" + googleFontData.weights;
				}

				document.head.appendChild(link);

				const blockOptions = Object.assign(
					{ [key]: value },
					editorskit_typography
				);
				setAttributes({ editorskit_typography: blockOptions });
				// Save meta
				if (googleFontData) {
					editorskit_blocks_typography +=
						value.replace(" ", "+") + ":" + googleFontData.weights + "|";
				}
				if (oldValue) {
					let oldFontData = find(GoogleFonts.fonts, ["name", oldValue]);
					if (oldFontData) {
						oldFontData =
							oldValue.replace(" ", "+") + ":" + oldFontData.weights + "|";
						editorskit_blocks_typography = editorskit_blocks_typography.replace(
							oldFontData,
							""
						);
					}
				}
				saveBlockTypography(editorskit_blocks_typography);
			};

			useEffect(() => {
				const { family } = editorskit_typography;

				onSelectFamily("family", family);
			}, []);

			if (
				typeof editorskit_typography !== "undefined" &&
				typeof editorskit_typography.family !== "undefined" &&
				"" !== editorskit_typography.family
			) {
				customData = Object.assign(customData, { "data-ek-typography": 1 });
			}

			wrapperProps = {
				style: applyFontStyle(props.attributes, props.name, wrapperProps),
				...customData,
			};
		}

		return (
			<BlockListBlock
				{...props}
				wrapperProps={wrapperProps}
				className={classnames("has-ek-typography")}
			/>
		);
	});
}, "withTypographySettings");

const isDisabled = false;

addFilter(
	"blocks.registerBlockType",
	"editorskit/typography/attributes",
	addAttributes
);

addFilter(
	"editor.BlockEdit",
	"editorskit/typography/block-panel",
	withBlockPanel
);

addFilter(
	"editor.BlockListBlock",
	"editorskit/typography/withTypographySettings",
	withTypographySettings,
	10
);

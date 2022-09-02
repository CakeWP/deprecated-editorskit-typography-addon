/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/typography.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);
//# sourceMappingURL=typography.js.map

/***/ }),

/***/ "./src/add-ons/typography/src/block-panel/apply-style.js":
/*!***************************************************************!*\
  !*** ./src/add-ons/typography/src/block-panel/apply-style.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/add-ons/typography/src/defaults/google-fonts.json");
/**
 * External dependencies
 */

/**
 * Internal Dependencies
 */



function applyFontStyle(attributes, blockName, wrapperProps) {
  const {
    editorskit_typography
  } = attributes;
  let style = {};

  if (typeof wrapperProps !== 'undefined' && typeof wrapperProps.style !== 'undefined') {
    style = wrapperProps.style;
  }

  if (typeof editorskit_typography !== 'undefined' && typeof editorskit_typography.family !== 'undefined') {
    const googleFontData = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ['name', editorskit_typography.family]);

    if (googleFontData) {
      if (['core/heading'].includes(blockName)) {
        style['--ek-heading-font-family'] = googleFontData['font-family'];

        if (typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight) {
          style['--ek-heading-font-weight'] = editorskit_typography.weight;
        }
      } else if (['core/buttons', 'core/button'].includes(blockName)) {
        style['--ek-button-font-family'] = googleFontData['font-family'];

        if (typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight) {
          style['--ek-button-font-weight'] = editorskit_typography.weight;
        }
      } else {
        style['--ek-font-family'] = googleFontData['font-family'];

        if (typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight) {
          style['--ek-font-weight'] = editorskit_typography.weight;
        }
      }
    } else if (editorskit_typography.family !== '') {
      if (['core/heading'].includes(blockName)) {
        style['--ek-heading-font-family'] = editorskit_typography.family;
      } else if (['core/buttons'].includes(blockName)) {
        style['--ek-button-font-family'] = editorskit_typography.family;
      } else {
        style['--ek-font-family'] = editorskit_typography.family;
      }
    }
  }

  return style;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyFontStyle);

/***/ }),

/***/ "./src/add-ons/typography/src/block-panel/index.js":
/*!*********************************************************!*\
  !*** ./src/add-ons/typography/src/block-panel/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography */ "./src/add-ons/typography/src/block-panel/typography/index.js");
/* harmony import */ var _apply_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-style */ "./src/add-ons/typography/src/block-panel/apply-style.js");
/* harmony import */ var _defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../defaults/google-fonts.json */ "./src/add-ons/typography/src/defaults/google-fonts.json");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




/**
 * WordPress Dependencies
 */






/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function addAttributes(settings) {
  if (typeof settings.attributes !== "undefined" && !(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.hasBlockSupport)(settings, "disableEditorsKitTypography")) {
    settings.attributes = Object.assign(settings.attributes, {
      editorskit_typography: {
        type: "object",
        default: {
          name: "",
          family: "",
          weight: ""
        }
      }
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


const enhance = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.compose)(
/**
 * For blocks whose block type doesn't support `multiple`, provides the
 * wrapped component with `originalBlockClientId` -- a reference to the
 * first block of the same type in the content -- if and only if that
 * "original" block is not the current one. Thus, an inexisting
 * `originalBlockClientId` prop signals that the block is valid.
 *
 */
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.withDispatch)(dispatch => {
  const {
    editPost
  } = dispatch("core/editor");
  return {
    saveBlockTypography(value) {
      editPost({
        meta: {
          _editorskit_blocks_typography: value
        }
      });
    }

  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.withSelect)(select => {
  return {
    select
  };
}));
const withBlockPanel = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.createHigherOrderComponent)(BlockEdit => {
  return enhance(_ref => {
    let { ...props
    } = _ref;
    const {
      name,
      isSelected
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && !(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.hasBlockSupport)(name, "disableEditorsKitTypography") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_4__["default"], props));
  });
}, "withBlockPanel");
const withTypographySettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.createHigherOrderComponent)(BlockListBlock => {
  return enhance(_ref2 => {
    let {
      saveBlockTypography,
      select,
      ...props
    } = _ref2;
    const {
      setAttributes
    } = props;
    let wrapperProps = props.wrapperProps;
    let customData = {};
    const googleLink = "https://fonts.googleapis.com/css?family=";
    const meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select("core/editor").getEditedPostAttribute("meta"), []);
    let editorskit_blocks_typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
      if (meta !== null && typeof meta !== "undefined") {
        return meta["_editorskit_blocks_typography"] || "";
      }
    }, [meta]);
    const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.getBlockType)(props.name);

    if (blockType.getEditWrapperProps) {
      wrapperProps = { ...wrapperProps,
        ...blockType.getEditWrapperProps(blockType.attributes)
      };
    }

    if (!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.hasBlockSupport)(props.name, "disableEditorsKitTypography")) {
      const {
        editorskit_typography
      } = props.attributes;

      const onSelectFamily = (key, value) => {
        const oldValue = editorskit_typography[key];
        delete editorskit_typography[key]; // Add Google Font

        const link = document.createElement("link");
        link.rel = "stylesheet";
        const googleFontData = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_6__.fonts, ["name", value]);

        if (googleFontData) {
          link.href = googleLink + value.replace(" ", "+") + ":" + googleFontData.weights;
        }

        document.head.appendChild(link);
        const blockOptions = Object.assign({
          [key]: value
        }, editorskit_typography);
        setAttributes({
          editorskit_typography: blockOptions
        }); // Save meta

        if (googleFontData) {
          editorskit_blocks_typography += value.replace(" ", "+") + ":" + googleFontData.weights + "|";
        }

        if (oldValue) {
          let oldFontData = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_6__.fonts, ["name", oldValue]);

          if (oldFontData) {
            oldFontData = oldValue.replace(" ", "+") + ":" + oldFontData.weights + "|";
            editorskit_blocks_typography = editorskit_blocks_typography.replace(oldFontData, "");
          }
        }

        saveBlockTypography(editorskit_blocks_typography);
      };

      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const {
          family
        } = editorskit_typography;
        onSelectFamily("family", family);
      }, []);

      if (typeof editorskit_typography !== "undefined" && typeof editorskit_typography.family !== "undefined" && "" !== editorskit_typography.family) {
        customData = Object.assign(customData, {
          "data-ek-typography": 1
        });
      }

      wrapperProps = {
        style: (0,_apply_style__WEBPACK_IMPORTED_MODULE_5__["default"])(props.attributes, props.name, wrapperProps),
        ...customData
      };
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      wrapperProps: wrapperProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("has-ek-typography")
    }));
  });
}, "withTypographySettings");
const isDisabled = false;
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)("blocks.registerBlockType", "editorskit/typography/attributes", addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)("editor.BlockEdit", "editorskit/typography/block-panel", withBlockPanel);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)("editor.BlockListBlock", "editorskit/typography/withTypographySettings", withTypographySettings, 10);

/***/ }),

/***/ "./src/add-ons/typography/src/block-panel/typography/index.js":
/*!********************************************************************!*\
  !*** ./src/add-ons/typography/src/block-panel/typography/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/google-fonts.json */ "./src/add-ons/typography/src/defaults/google-fonts.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */


/**
 * WordPress Dependencies
 */







const googleLink = "https://fonts.googleapis.com/css?family=";

const TypographySettings = props => {
  const {
    attributes,
    setAttributes,
    saveBlockTypography,
    isDisabled
  } = props;

  if (isDisabled) {
    return false;
  }

  const meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select("core/editor").getEditedPostAttribute("meta"), []);
  let editorskit_blocks_typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (meta !== null && typeof meta !== "undefined") {
      return meta["_editorskit_blocks_typography"] || "";
    }
  }, [meta]);

  if (typeof meta === "undefined") {
    return null;
  }

  const {
    editorskit_typography
  } = attributes;

  if (typeof editorskit_typography === "undefined") {
    return null;
  }

  const selectOptions = () => {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Google Font", "editorskit-typography-addon"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Arial", "editorskit-typography-addon"),
      value: "Arial"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Helvetica", "editorskit-typography-addon"),
      value: "Helvetica"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Times New Roman", "editorskit-typography-addon"),
      value: "Times New Roman"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Georgia", "editorskit-typography-addon"),
      value: "Georgia"
    }, ..._defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_2__.fonts.map(_ref => {
      let {
        name
      } = _ref;
      return {
        label: name,
        value: name
      };
    })];
  };

  const googleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(_defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_2__.fonts, ["name", editorskit_typography.family]);

  const fontWeightOptions = () => {
    const fontWeights = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Font Weight", "editorskit-typography-addon"),
      value: ""
    }];

    if (typeof googleFontWeights !== "undefined" && typeof googleFontWeights.weights !== "undefined") {
      (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(googleFontWeights.weights.split(","), weight => {
        if (weight && !weight.includes("i")) {
          fontWeights.push({
            label: weight,
            value: parseInt(weight)
          });
        }
      });
    }

    return fontWeights;
  };

  const onSelectFamily = (key, value) => {
    const oldValue = editorskit_typography[key];
    delete editorskit_typography[key]; // Add Google Font

    const link = document.createElement("link");
    link.rel = "stylesheet";
    const googleFontData = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(_defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_2__.fonts, ["name", value]);

    if (googleFontData) {
      link.href = googleLink + value.replace(" ", "+") + ":" + googleFontData.weights;
    }

    document.head.appendChild(link);
    const blockOptions = Object.assign({
      [key]: value
    }, editorskit_typography);
    setAttributes({
      editorskit_typography: blockOptions
    }); // Save meta

    if (googleFontData) {
      editorskit_blocks_typography += value.replace(" ", "+") + ":" + googleFontData.weights + "|";
    }

    if (oldValue) {
      let oldFontData = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(_defaults_google_fonts_json__WEBPACK_IMPORTED_MODULE_2__.fonts, ["name", oldValue]);

      if (oldFontData) {
        oldFontData = oldValue.replace(" ", "+") + ":" + oldFontData.weights + "|";
        editorskit_blocks_typography = editorskit_blocks_typography.replace(oldFontData, "");
      }
    }

    saveBlockTypography(editorskit_blocks_typography);
  };

  const onSelectFields = (key, value) => {
    delete editorskit_typography[key];
    const blockOptions = Object.assign({
      [key]: value
    }, editorskit_typography);
    setAttributes({
      editorskit_typography: blockOptions
    });
  }; // useEffect(() => {
  // 	const { family } = editorskit_typography;
  // 	onSelectFamily("family", family);
  // }, []);


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Typography Settings", "editorskit-typography-addon"),
    initialOpen: false,
    className: "editorskit-panel editorskit-panel-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Font Family", "editorskit-typography-addon"),
    options: selectOptions(),
    value: typeof editorskit_typography.family !== "undefined" ? editorskit_typography.family : "",
    onChange: n => onSelectFamily("family", n)
  }), fontWeightOptions() && fontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Font Weight", "editorskit-typography-addon"),
    options: fontWeightOptions(),
    value: typeof editorskit_typography.weight !== "undefined" ? editorskit_typography.weight : "",
    onChange: n => onSelectFields("weight", n)
  }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editorskit-reset-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    isSmall: true,
    isSecondary: true,
    onClick: () => {
      onSelectFamily("family", "");
      onSelectFields("weight", "");
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Reset", "editorskit-typography-addon"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const {
    isFeatureActive
  } = select("core/edit-post");
  return {
    isDisabled: isFeatureActive("disableEditorsKitTypography")
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => {
  const {
    editPost
  } = dispatch("core/editor");
  return {
    saveBlockTypography(value) {
      editPost({
        meta: {
          _editorskit_blocks_typography: value
        }
      });
    }

  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_7__.withSpokenMessages])(TypographySettings));

/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js":
/*!******************************************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  withSpokenMessages,
  DropdownMenu
} = wp.components;
const defaultUnits = {
  'font-size-unit': 'px',
  'line-height-unit': 'px',
  'letter-spacing-unit': 'px'
};
const defaultContentCSS = {
  content: defaultUnits,
  heading: {
    H1: defaultUnits,
    H2: defaultUnits,
    H3: defaultUnits,
    H4: defaultUnits,
    H5: defaultUnits,
    H6: defaultUnits
  },
  button: defaultUnits,
  fonts: {}
};

class TypographyDropdownMenu extends Component {
  constructor() {
    super(...arguments);
    this.duplicateFont = this.duplicateFont.bind(this);
  }

  duplicateFont() {
    const {
      updateState,
      selectedItem,
      Fonts,
      GoogleFonts,
      saveMeta
    } = this.props;
    const elementTypes = ['content', 'heading', 'button'];
    const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    const fontNames = Fonts[selectedItem].name.split(' + ');
    const primaryFont = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(GoogleFonts.fonts, ['name', fontNames[0]]);
    const secondaryFont = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(GoogleFonts.fonts, ['name', fontNames[1]]);
    const headerCSS = Fonts[selectedItem].headerCss;
    let headingCSS, fontCSS, innerHeadingCSS, innerCSS, innerFontCSS;
    const contentCSS = Object.assign(defaultContentCSS, {
      name: Fonts[selectedItem].name + ' Custom'
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(elementTypes, elementType => {
      switch (elementType) {
        case 'heading':
          headingCSS = Object.assign({}, contentCSS[elementType]);

          if (primaryFont) {
            headingCSS = Object.assign(headingCSS, {
              'font-family': primaryFont.name
            });
          }

          contentCSS[elementType] = headingCSS;
          fontCSS = Object.assign({}, contentCSS.fonts);
          fontCSS = Object.assign(fontCSS, {
            [elementType]: primaryFont
          });
          contentCSS.fonts = fontCSS;

          if (headerCSS) {
            (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(headerCSS, (value, syntax) => {
              (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(headings, heading => {
                innerHeadingCSS = Object.assign({}, contentCSS[elementType][heading]);
                innerHeadingCSS = Object.assign(innerHeadingCSS, {
                  [syntax]: value
                });
                contentCSS[elementType][heading] = innerHeadingCSS;
              });
            });
          }

          break;

        case 'content':
          innerCSS = Object.assign({}, contentCSS[elementType]);

          if (secondaryFont) {
            innerCSS = Object.assign(innerCSS, {
              'font-family': secondaryFont.name
            });
          }

          contentCSS[elementType] = innerCSS;
          innerFontCSS = Object.assign({}, contentCSS.fonts);
          innerFontCSS = Object.assign(innerFontCSS, {
            [elementType]: secondaryFont
          });
          contentCSS.fonts = innerFontCSS;
          break;
      }
    });
    updateState('isAddingCustom', true);
    updateState('contentCSS', contentCSS);
    saveMeta(contentCSS);
  }

  render() {
    const {
      onToggle,
      selectedItem,
      itemType,
      contentCSS,
      updateState,
      settingsPanel,
      currentMetaId,
      setVariables
    } = this.props;
    let controls = [{
      title: __('Duplicate', 'editorskit-typography-addon'),
      icon: 'admin-page',
      onClick: () => {
        setVariables(selectedItem);
        const newKey = new Date().valueOf();
        updateState('customKey', newKey);

        if ('default' === itemType) {
          this.duplicateFont();
        } else {
          let newContentCSS = Object.assign({}, contentCSS);
          newContentCSS = Object.assign(newContentCSS, {
            name: contentCSS.name + __(' Duplicate', 'editorskit-typography-addon')
          });
          updateState('isAddingCustom', true);
          updateState('contentCSS', newContentCSS);
        }
      }
    }];

    if (itemType === 'custom' && parseInt(selectedItem) === parseInt(currentMetaId)) {
      controls.push({
        title: __('Edit', 'editorskit-typography-addon'),
        icon: 'edit',
        onClick: () => {
          onToggle(selectedItem);
        }
      });
    }

    if (settingsPanel) {
      controls = [currentMetaId === selectedItem ? {
        title: __('Remove as Default', 'editorskit-typography-addon'),
        icon: 'admin-page',
        onClick: () => {
          updateState('isRemovingDefault', true);
          updateState('itemSelected', selectedItem);
        }
      } : {
        title: __('Set as Default', 'editorskit-typography-addon'),
        icon: 'admin-page',
        onClick: () => {
          updateState('isSettingDefault', true);
          updateState('itemSelected', selectedItem);
        }
      }];

      if (itemType === 'custom') {
        controls.push({
          title: __('Delete', 'editorskit-typography-addon'),
          icon: 'trash',
          onClick: () => {
            updateState('isDeleting', true);
            updateState('itemSelected', selectedItem);
          }
        });
      }
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      icon: "admin-generic",
      label: __('More Options', 'editorskit-typography-addon'),
      controls: controls
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSpokenMessages(TypographyDropdownMenu));

/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/heading-level-icon.js":
/*!************************************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/heading-level-icon.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadingLevelIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
function HeadingLevelIcon(_ref) {
  let {
    level,
    __unstableActive
  } = _ref;
  const levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    // eslint-disable-line no-prototype-builtins
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __unstableActive: __unstableActive
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/index.js":
/*!***********************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_unit_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/unit-control */ "./src/add-ons/typography/src/components/unit-control/index.js");
/* harmony import */ var _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../defaults/fonts */ "./src/add-ons/typography/src/defaults/fonts.json");
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/google-fonts */ "./src/add-ons/typography/src/defaults/google-fonts.json");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown-menu */ "./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js");
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heading-level-icon */ "./src/add-ons/typography/src/components/font-selection/heading-level-icon.js");



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */

const {
  __,
  sprintf
} = wp.i18n;
const {
  compose
} = wp.compose;
const {
  withSelect,
  withDispatch,
  useEffect
} = wp.data;
const {
  Fragment,
  Component
} = wp.element;
const domReady = wp.domReady;
const {
  withSpokenMessages,
  Button,
  TextControl,
  PanelBody,
  SelectControl,
  TabPanel,
  CheckboxControl,
  Modal
} = wp.components;
/**
 * Get settings.
 */

const defaultUnits = {
  "font-size-unit": "px",
  "line-height-unit": "px",
  "letter-spacing-unit": "px"
};
const stylesElement = document.getElementById("editorskit-typography-inline-css");
const googleLink = "https://fonts.googleapis.com/css?family=";
const link = document.createElement("link");
link.rel = "stylesheet";
/**
 * Block edit function
 */

class TypographySelection extends Component {
  constructor() {
    super(...arguments);
    this.onToggle = this.onToggle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSetDefault = this.onSetDefault.bind(this);
    this.createMeta = this.createMeta.bind(this);
    this.createCSS = this.createCSS.bind(this);
    this.setVariables = this.setVariables.bind(this);
    this.saveMeta = this.saveMeta.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getValue = this.getValue.bind(this);
    this.state = {
      isAddingCustom: false,
      isActiveFont: "",
      contentCSS: {
        content: defaultUnits,
        heading: {
          H1: defaultUnits,
          H2: defaultUnits,
          H3: defaultUnits,
          H4: defaultUnits,
          H5: defaultUnits,
          H6: defaultUnits
        },
        button: defaultUnits,
        fonts: {}
      },
      optionsSaved: false,
      optionsFetched: false,
      optionsData: {},
      defaultTypography: {},
      customKey: "",
      showOptionsOn: "",
      searchKeyword: "",
      isDeleting: false,
      itemSelected: "",
      isDeleted: "",
      isSettingDefault: false,
      isRemovingDefault: false,
      applyToAll: false
    };
    new wp.api.models.Settings().fetch().then(response => {
      if (response.editorskit_typography_custom) {
        this.setState({
          optionsData: JSON.parse(response.editorskit_typography_custom),
          defaultTypography: JSON.parse(response.editorskit_typography_default)
        });
      }

      this.setState({
        optionsFetched: true
      });
    });
  }

  onToggle(selectedItem) {
    const {
      optionsData
    } = this.state;

    if (typeof optionsData[selectedItem] !== "undefined") {
      this.setVariables(selectedItem);
      this.createCSS(optionsData[selectedItem], selectedItem);
      this.setState({
        contentCSS: optionsData[selectedItem],
        customKey: selectedItem,
        isAddingCustom: true
      });
    }
  }

  setVariables(id) {
    const {
      settingsPanel
    } = this.props;
    const {
      optionsData,
      customKey,
      contentCSS
    } = this.state;
    let fontData = {};
    let variables = "";
    let isCustom = false;

    if (settingsPanel) {
      return;
    }

    if (typeof id === "undefined") {
      id = customKey;
    }

    if (typeof _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__[id] !== "undefined") {
      fontData = _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__[id];
    } else if (typeof optionsData[id] !== "undefined") {
      fontData = optionsData[id];
      isCustom = true;
    }

    if (fontData) {
      document.body.classList.add("ek-has-typography");
    } //reset classes


    document.body.classList.remove("ek-has-content-font-family");
    document.body.classList.remove("ek-has-body-font-family");
    document.body.classList.remove("ek-has-content-font-weight");
    document.body.classList.remove("ek-has-content-font-size");
    document.body.classList.remove("ek-has-content-line-height");
    document.body.classList.remove("ek-has-content-letter-spacing");
    document.body.classList.remove("ek-has-header-font-family");
    document.body.classList.remove("ek-has-button-font-family");
    document.body.classList.remove("ek-has-button-font-weight");
    document.body.classList.remove("ek-has-button-text-transform");

    const wrapFontFamily = family => {
      if (isCustom) {
        return "'" + family + "'";
      }

      return family;
    };

    if (typeof fontData.content !== "undefined") {
      const content = fontData.content;

      if (content["font-family"]) {
        variables += "--ek-font-family:" + wrapFontFamily(content["font-family"]) + ";";
        document.body.classList.add("ek-has-content-font-family");
      }

      if (content.body) {
        document.body.classList.add("ek-has-body-font-family");
      }

      if (content["font-weight"]) {
        variables += "--ek-font-weight:" + content["font-weight"] + ";";
        document.body.classList.add("ek-has-content-font-weight");
      }

      if (content["font-size"]) {
        variables += "--ek-font-size:" + content["font-size"] + content["font-size-unit"] + ";";
        document.body.classList.add("ek-has-content-font-size");
      }

      if (content["line-height"]) {
        variables += "--ek-line-height:" + content["line-height"] + content["line-height-unit"] + ";";
        document.body.classList.add("ek-has-content-line-height");
      }

      if (content["letter-spacing"]) {
        variables += "--ek-letter-spacing:" + content["letter-spacing"] + content["letter-spacing-unit"] + ";";
        document.body.classList.add("ek-has-content-letter-spacing");
      }
    }

    if (typeof fontData.heading !== "undefined") {
      const heading = fontData.heading;

      if (heading["font-family"]) {
        variables += "--ek-heading-font-family:" + wrapFontFamily(heading["font-family"]) + ";";
        document.body.classList.add("ek-has-header-font-family");
      }

      if (heading["font-weight"]) {
        variables += "--ek-heading-font-weight:" + heading["font-weight"] + ";";
      }
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(contentCSS.heading, (headingData, headingType) => {
      document.body.classList.remove("ek-has-" + headingType + "-font-size");
      document.body.classList.remove("ek-has-" + headingType + "-line-height");
      document.body.classList.remove("ek-has-" + headingType + "-letter-spacing");
      document.body.classList.remove("ek-apply-" + headingType + "-to-title");

      if (typeof fontData.heading !== "undefined" && typeof fontData.heading[headingType] !== "undefined") {
        const innerHeading = fontData.heading[headingType];

        if (innerHeading["font-weight"]) {
          variables += "--ek-" + headingType + "-font-weight:" + innerHeading["font-weight"] + ";";
          document.body.classList.add("ek-has-" + headingType + "-font-weight");
        }

        if (innerHeading["font-size"]) {
          variables += "--ek-" + headingType + "-font-size:" + innerHeading["font-size"] + innerHeading["font-size-unit"] + ";";
          document.body.classList.add("ek-has-" + headingType + "-font-size");
        }

        if (innerHeading["line-height"]) {
          variables += "--ek-" + headingType + "-line-height:" + innerHeading["line-height"] + innerHeading["line-height-unit"] + ";";
          document.body.classList.add("ek-has-" + headingType + "-line-height");
        }

        if (innerHeading["letter-spacing"]) {
          variables += "--ek-" + headingType + "-letter-spacing:" + innerHeading["letter-spacing"] + innerHeading["letter-spacing-unit"] + ";";
          document.body.classList.add("ek-has-" + headingType + "-letter-spacing");
        }

        if (innerHeading["text-transform"]) {
          variables += "--ek-" + headingType + "-text-transform:" + innerHeading["text-transform"] + ";";
          document.body.classList.add("ek-has-" + headingType + "-text-transform");
        }

        if (innerHeading.title) {
          document.body.classList.add("ek-apply-" + headingType + "-to-title");
        }
      }
    });

    if (typeof fontData.button !== "undefined") {
      const button = fontData.button;

      if (button["font-family"]) {
        variables += "--ek-button-font-family:" + wrapFontFamily(button["font-family"]) + ";";
        document.body.classList.add("ek-has-button-font-family");
      }

      if (button["font-weight"]) {
        variables += "--ek-button-font-weight:" + button["font-weight"] + ";";
        document.body.classList.add("ek-has-button-font-weight");
      }

      if (button["font-size"]) {
        variables += "--ek-button-font-size:" + button["font-size"] + button["font-size-unit"] + ";";
        document.body.classList.add("ek-has-button-font-size");
      }

      if (button["line-height"]) {
        variables += "--ek-button-line-height:" + button["line-height"] + button["line-height-unit"] + ";";
        document.body.classList.add("ek-has-button-line-height");
      }

      if (button["letter-spacing"]) {
        variables += "--ek-button-letter-spacing:" + button["letter-spacing"] + button["letter-spacing-unit"] + ";";
        document.body.classList.add("ek-has-button-letter-spacing");
      }

      if (button["text-transform"]) {
        variables += "--ek-button-text-transform:" + button["text-transform"] + ";";
        document.body.classList.add("ek-has-button-text-transform");
      }
    }

    stylesElement.innerHTML = "body{" + variables + "}";
  }

  createCSS(savedOption) {
    const {
      settingsPanel
    } = this.props;
    let {
      contentCSS
    } = this.state;

    if (settingsPanel) {
      return;
    }

    if (savedOption) {
      contentCSS = savedOption;
    } //add fonts


    let googleFontData = googleLink;

    if (contentCSS.fonts) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(contentCSS.fonts, fontProp => {
        if (fontProp) {
          googleFontData += fontProp.name.replace(" ", "+") + ":" + fontProp.weights + "|";
        }
      });
    }

    if (googleFontData !== googleLink) {
      link.href = googleFontData.slice(0, -1);
    }

    document.head.appendChild(link);
  }

  createMeta(syntax, value, category, level) {
    let {
      contentCSS
    } = this.state;

    if (level) {
      let headingLevel = Object.assign({}, contentCSS[category][level]);
      headingLevel = Object.assign(headingLevel, {
        [syntax]: value
      });
      contentCSS[category][level] = headingLevel;
    } else if (!category) {
      contentCSS = Object.assign(contentCSS, {
        [syntax]: value
      });
    } else {
      let categoryLevel = Object.assign({}, contentCSS[category]);
      categoryLevel = Object.assign(categoryLevel, {
        [syntax]: value
      });
      contentCSS[category] = categoryLevel;
    } // Add Google Font data on selected Font Family


    if ("font-family" === syntax) {
      contentCSS.fonts[category] = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__.fonts, ["name", value]);
    }

    this.setVariables();
    this.setState({
      contentCSS
    });
    this.saveMeta(contentCSS);
  }

  updateState(key, value) {
    this.setState({
      [key]: value
    });
  }

  saveMeta(contentCSS) {
    const {
      onFontSelection
    } = this.props;
    let {
      optionsData,
      customKey
    } = this.state;

    if (!customKey || customKey === "") {
      customKey = new Date().valueOf();
      this.setState({
        customKey
      });
    }

    optionsData = Object.assign(optionsData, {
      [customKey]: contentCSS
    }); //load fonts

    this.createCSS(contentCSS, customKey); //save meta

    onFontSelection(contentCSS, customKey);
    const model = new wp.api.models.Settings({
      editorskit_typography_custom: JSON.stringify(optionsData)
    });
    model.save().then(() => {
      this.setState({
        optionsSaved: true,
        optionsData,
        customKey
      });
      new wp.api.models.Settings().fetch();
    });
  }

  getValue(category, key, level) {
    const {
      contentCSS
    } = this.state;

    if (level) {
      if (typeof contentCSS[category] !== "undefined" && typeof contentCSS[category][level] !== "undefined" && typeof contentCSS[category][level][key] !== "undefined") {
        return contentCSS[category][level][key];
      }
    } else if (typeof contentCSS[category] !== "undefined" && typeof contentCSS[category][key] !== "undefined") {
      return contentCSS[category][key];
    }

    return "";
  }

  onDelete() {
    const {
      noticeMessage
    } = this.props;
    const {
      itemSelected,
      optionsData
    } = this.state;
    delete optionsData[itemSelected];
    const model = new wp.api.models.Settings({
      editorskit_typography_custom: JSON.stringify(optionsData)
    });
    model.save().then(() => {
      this.setState({
        isDeleting: false,
        optionsData
      });
      new wp.api.models.Settings().fetch();
    });
    noticeMessage(__("Item successfully deleted.", "editorskit-typography-addon"));
  }

  onSetDefault() {
    let isRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const {
      noticeMessage
    } = this.props;
    const {
      optionsData,
      itemSelected,
      applyToAll
    } = this.state;
    let meta = {};

    if (typeof optionsData[itemSelected] !== "undefined") {
      meta = optionsData[itemSelected];
    } else if (typeof _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__[itemSelected] !== "undefined") {
      meta = _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__[itemSelected];
    }

    let defaultTypography = {
      itemSelected,
      applyToAll,
      meta
    };

    if (isRemoving) {
      defaultTypography = {};
    }

    const model = new wp.api.models.Settings({
      editorskit_typography_default: JSON.stringify(defaultTypography)
    });
    model.save().then(() => {
      this.setState({
        isSettingDefault: false,
        isRemovingDefault: false,
        defaultTypography
      });
      new wp.api.models.Settings().fetch();
    });
    noticeMessage(__("Default Typography Successfully Set.", "editorskit-typography-addon"));
  }

  render() {
    const {
      onFontSelection,
      removeFontSelection,
      postmeta,
      settingsPanel
    } = this.props;
    let currentMetaId = "";

    if (!this.state.optionsFetched) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        className: "ek-fetching-typography"
      }, __("Fetching Typography Data.....", "editorskit-typography-addon")));
    }

    if (typeof postmeta !== "undefined") {
      const {
        _editorskit_typography_data
      } = postmeta; // eslint-disable-line camelcase

      if (typeof _editorskit_typography_data.meta !== "undefined" && typeof _editorskit_typography_data.meta.id !== "undefined") {
        currentMetaId = _editorskit_typography_data.meta.id;
      }
    }

    const {
      isAddingCustom,
      contentCSS,
      optionsData,
      customKey,
      searchKeyword,
      isDeleting,
      isSettingDefault,
      isRemovingDefault,
      defaultTypography
    } = this.state;

    const selectOptions = () => {
      return [{
        label: __("Select Google Font", "editorskit-typography-addon"),
        value: ""
      }, {
        label: __("Arial", "editorskit-typography-addon"),
        value: "Arial"
      }, {
        label: __("Helvetica", "editorskit-typography-addon"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "editorskit-typography-addon"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "editorskit-typography-addon"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__.fonts.map(_ref => {
        let {
          name
        } = _ref;
        return {
          label: name,
          value: name
        };
      })];
    };

    if (!currentMetaId && !customKey && typeof defaultTypography !== "undefined" && defaultTypography && typeof defaultTypography.itemSelected !== "undefined") {
      currentMetaId = defaultTypography.itemSelected;
    }

    const transformOptions = () => {
      return [{
        label: __("Select Text Transform", "editorskit-typography-addon"),
        value: ""
      }, {
        label: __("None", "editorskit-typography-addon"),
        value: "none"
      }, {
        label: __("Capitalize", "editorskit-typography-addon"),
        value: "capitalize"
      }, {
        label: __("Uppercase", "editorskit-typography-addon"),
        value: "uppercase"
      }, {
        label: __("Lowercase", "editorskit-typography-addon"),
        value: "lowercase"
      }, {
        label: __("Initial", "editorskit-typography-addon"),
        value: "initial"
      }, {
        label: __("Inherit", "editorskit-typography-addon"),
        value: "inherit"
      }];
    };

    const fontWeightOptions = fontName => {
      const googleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__.fonts, ["name", fontName]);
      const fontWeights = [{
        label: __("Select Font Weight", "editorskit-typography-addon"),
        value: ""
      }];

      if (typeof googleFontWeights !== "undefined" && typeof googleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    if (!isAddingCustom) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, !settingsPanel ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isPrimary: true,
        className: "editorskit-typography--custom-button",
        onClick: () => {
          this.setState({
            isAddingCustom: true,
            customKey: "",
            contentCSS: {
              content: defaultUnits,
              heading: {
                H1: defaultUnits,
                H2: defaultUnits,
                H3: defaultUnits,
                H4: defaultUnits,
                H5: defaultUnits,
                H6: defaultUnits
              },
              button: defaultUnits,
              fonts: {}
            }
          });
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, __("Create Custom Combination", "editorskit-typography-addon"))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
        className: "editorskit-typography-search",
        placeholder: __("Search", "editorskit-typography-addon"),
        onChange: keyword => {
          this.setState({
            searchKeyword: keyword.toLowerCase()
          });
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "editorskit-typography-selection"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
        className: "editorskit-typography--items"
      }, typeof optionsData !== undefined && optionsData ? (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(optionsData, (fontCustom, id) => {
        if (searchKeyword && (fontCustom.name.toLowerCase().includes(searchKeyword) || typeof fontCustom.heading["font-family"] !== "undefined" && fontCustom.heading["font-family"].toLowerCase().includes(searchKeyword) || typeof fontCustom.content["font-family"] !== "undefined" && fontCustom.content["font-family"].toLowerCase().includes(searchKeyword) || typeof fontCustom.button["font-family"] !== "undefined" && fontCustom.button["font-family"].toLowerCase().includes(searchKeyword))) {//do nothing
        } else if (searchKeyword) {
          return false;
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("editorskit-typography--item", "editorskit-typography--item__custom", parseInt(id) === parseInt(currentMetaId) || !currentMetaId && customKey === id ? "editorskit-typography--item__current" : null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          onClick: () => {
            if (id === currentMetaId || !currentMetaId && customKey === id) {
              removeFontSelection();
              this.updateState("customKey", "");
            } else {
              this.setVariables(id);
              this.createCSS(fontCustom, id);
              onFontSelection(fontCustom, id);
            }
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, fontCustom.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          className: "editorskit-typography--item__custom-fonts"
        }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(fontCustom, fontCustomData => {
          if (typeof fontCustomData["font-family"] !== "undefined") {
            return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, fontCustomData["font-family"]);
          }
        }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          itemType: "custom",
          selectedItem: id,
          onDelete: this.onDelete,
          onToggle: this.onToggle,
          Fonts: _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__,
          GoogleFonts: _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__,
          updateState: this.updateState,
          contentCSS: fontCustom,
          setVariables: this.setVariables,
          currentMetaId: currentMetaId,
          saveMeta: this.saveMeta
        })));
      }) : "", (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(_defaults_fonts__WEBPACK_IMPORTED_MODULE_5__, (font, i) => {
        if (searchKeyword && !font.name.toLowerCase().includes(searchKeyword)) {
          return false;
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("editorskit-typography--item", "editorskit-typography--item__default", "editorskit-typography--item-" + i, i === currentMetaId ? "editorskit-typography--item__current" : null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          onClick: () => {
            if (settingsPanel) {
              return;
            }

            if (i === currentMetaId) {
              removeFontSelection();
            } else {
              const googleFont = googleLink + font.fonts.join("|"); // Set CSS variables

              this.setVariables(i);
              link.href = googleFont;
              document.head.appendChild(link); //save meta

              onFontSelection(font, i);
            }
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, font.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
          src: window.editorskitTypographyAddonInfo.plugin.url + "/typography-assets/combinations/" + font.name + ".png",
          alt: font.name
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          itemType: "default",
          selectedItem: i,
          onToggle: this.onToggle,
          Fonts: _defaults_fonts__WEBPACK_IMPORTED_MODULE_5__,
          GoogleFonts: _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_6__,
          updateState: this.updateState,
          setVariables: this.setVariables,
          currentMetaId: currentMetaId,
          saveMeta: this.saveMeta
        })));
      }))), isDeleting && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Modal, {
        className: "editorskit-delete-typography-modal",
        title: __("Delete Confirmation", "editorskit-typography-addon"),
        onRequestClose: () => {
          this.updateState("isDeleting", false);
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, __("Are you sure you want to delete this item?", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        onClick: this.onDelete
      }, __("Yes, Delete", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isDefault: true,
        onClick: () => {
          this.updateState("isDeleting", false);
        }
      }, __("No, Cancel", "editorskit-typography-addon"))), isSettingDefault && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Modal, {
        className: "editorskit-default-typography-modal",
        title: __("Set as Default Fonts", "editorskit-typography-addon"),
        onRequestClose: () => {
          this.updateState("isSettingDefault", false);
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, __("Setting default typography will save you time when creating new posts or pages.", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        className: "editorskit-notice-box"
      }, __("Take note that this option will apply your selected default typography to old posts, post types and pages on your website without the need for you to edit them on the Gutenberg editor manually.", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isPrimary: true,
        onClick: () => {
          this.onSetDefault();
        }
      }, __("Yes, Set as Default", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isDefault: true,
        onClick: () => {
          this.updateState("isSettingDefault", false);
        }
      }, __("No, Cancel", "editorskit-typography-addon"))), isRemovingDefault && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Modal, {
        className: "editorskit-default-typography-modal",
        title: __("Remove Default Fonts", "editorskit-typography-addon"),
        onRequestClose: () => {
          this.updateState("isRemovingDefault", false);
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, __("Are you sure you want to remove this item as default typography?", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isPrimary: true,
        onClick: () => {
          this.onSetDefault(true);
        }
      }, __("Yes, Set Remove Default", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isDefault: true,
        onClick: () => {
          this.updateState("isRemovingDefault", false);
        }
      }, __("No, Cancel", "editorskit-typography-addon"))));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editorskit-typography-custom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDefault: true,
      className: "editorskit-typography-back-btn",
      onClick: () => {
        this.setState({
          isAddingCustom: false,
          searchKeyword: "",
          customKey: ""
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "\u2039 ", __("Back", "editorskit-typography-addon"), " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
      className: "editorskit-typography-custom--name",
      label: __("Name", "editorskit-typography-addon"),
      value: typeof contentCSS.name !== "undefined" ? contentCSS.name : customKey,
      onChange: newName => {
        this.createMeta("name", newName);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
      className: "editorskit-typography-custom--key",
      type: "hidden" // value={typeof contentCSS['key'] !== 'undefined' ? contentCSS['font-selected'] : ''}

    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Content Typography", "editorskit-typography-addon"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Google Fonts", "editorskit-typography-addon"),
      options: selectOptions(),
      value: this.getValue("content", "font-family"),
      onChange: selectedValue => {
        this.createMeta("font-family", selectedValue, "content");
      }
    }), fontWeightOptions(this.getValue("content", "font-family")) && fontWeightOptions(this.getValue("content", "font-family")).length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Font Weight", "editorskit-typography-addon"),
      options: fontWeightOptions(this.getValue("content", "font-family")),
      value: this.getValue("content", "font-weight"),
      onChange: selectedWeight => {
        this.createMeta("font-weight", parseInt(selectedWeight), "content");
      }
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Font Size", "editorskit-typography-addon"),
      elementType: "content",
      syntax: "font-size",
      createMeta: this.createMeta,
      value: this.getValue("content", "font-size"),
      unit: this.getValue("content", "font-size-unit")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Line Height", "editorskit-typography-addon"),
      elementType: "content",
      syntax: "line-height",
      createMeta: this.createMeta,
      value: this.getValue("content", "line-height"),
      unit: this.getValue("content", "line-height-unit")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Letter Spacing", "editorskit-typography-addon"),
      elementType: "content",
      syntax: "letter-spacing",
      createMeta: this.createMeta,
      value: this.getValue("content", "letter-spacing"),
      unit: this.getValue("content", "letter-spacing-unit")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CheckboxControl, {
      label: __("Apply Font Family to whole page", "editorskit-typography-addon"),
      checked: this.getValue("content", "body") ? true : false,
      help: __("Check this option to apply the selected font family to <body> instead of just content.", "editorskit-typography-addon"),
      onChange: selectedTransform => {
        this.createMeta("body", selectedTransform, "content");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Heading Typography", "editorskit-typography-addon"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Google Fonts", "editorskit-typography-addon"),
      options: selectOptions(),
      value: this.getValue("heading", "font-family"),
      onChange: selectedValue => {
        this.createMeta("font-family", selectedValue, "heading");
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
      className: "editorskit-typography-tab-panel",
      activeClass: "active-tab" // onSelect={onSelect}
      ,
      tabs: [{
        name: "editorskit-typography-h1",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 1
        }),
        className: "editorskit-typography-h1",
        level: "H1"
      }, {
        name: "editorskit-typography-h2",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 2
        }),
        className: "editorskit-typography-h2",
        level: "H2"
      }, {
        name: "editorskit-typography-h3",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 3
        }),
        className: "editorskit-typography-h3",
        level: "H3"
      }, {
        name: "editorskit-typography-h4",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 4
        }),
        className: "editorskit-typography-h4",
        level: "H4"
      }, {
        name: "editorskit-typography-h5",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 5
        }),
        className: "editorskit-typography-h5",
        level: "H5"
      }, {
        name: "editorskit-typography-h6",
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          level: 6
        }),
        className: "editorskit-typography-h6",
        level: "H6"
      }]
    }, tab => {
      const headingFontName = this.getValue("heading", "font-family");
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, fontWeightOptions(headingFontName) && fontWeightOptions(headingFontName).length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
        label: sprintf(__("Font Weight (%s)", "editorskit-typography-addon"), tab.level),
        options: fontWeightOptions(headingFontName),
        value: this.getValue("heading", "font-weight", tab.level),
        onChange: selectedTransform => {
          this.createMeta("font-weight", parseInt(selectedTransform), "heading", tab.level);
        }
      }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: sprintf(__("Font Size (%s)", "editorskit-typography-addon"), tab.level),
        syntax: "font-size",
        createMeta: this.createMeta,
        value: this.getValue("heading", "font-size", tab.level),
        unit: this.getValue("heading", "font-size-unit", tab.level),
        elementType: "heading",
        level: tab.level
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: sprintf(__("Line Height (%s)", "editorskit-typography-addon"), tab.level),
        syntax: "line-height",
        createMeta: this.createMeta,
        value: this.getValue("heading", "line-height", tab.level),
        unit: this.getValue("heading", "line-height-unit", tab.level),
        elementType: "heading",
        level: tab.level
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: sprintf(__("Letter Spacing (%s)", "editorskit-typography-addon"), tab.level),
        syntax: "letter-spacing",
        createMeta: this.createMeta,
        value: this.getValue("heading", "letter-spacing", tab.level),
        unit: this.getValue("heading", "letter-spacing-unit", tab.level),
        elementType: "heading",
        level: tab.level
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
        label: sprintf(__("Text Transform (%s)", "editorskit-typography-addon"), tab.level),
        options: transformOptions(),
        value: this.getValue("heading", "text-transform", tab.level),
        onChange: selectedTransform => {
          this.createMeta("text-transform", selectedTransform, "heading", tab.level);
        }
      }), tab.level === "H1" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CheckboxControl, {
        label: __("Apply to Title", "editorskit-typography-addon"),
        checked: this.getValue("heading", "title", tab.level) ? true : false,
        onChange: selectedTransform => {
          this.createMeta("title", selectedTransform, "heading", tab.level);
        }
      }) : null);
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Buttons Typography", "editorskit-typography-addon"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Google Fonts", "editorskit-typography-addon"),
      options: selectOptions(),
      value: this.getValue("button", "font-family"),
      onChange: selectedValue => {
        this.createMeta("font-family", selectedValue, "button");
      }
    }), fontWeightOptions(this.getValue("button", "font-family")) && fontWeightOptions(this.getValue("button", "font-family")).length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Font Weight", "editorskit-typography-addon"),
      options: fontWeightOptions(this.getValue("button", "font-family")),
      value: this.getValue("button", "font-weight"),
      onChange: selectedWeight => {
        this.createMeta("font-weight", parseInt(selectedWeight), "button");
      }
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Font Size", "editorskit-typography-addon"),
      syntax: "font-size",
      createMeta: this.createMeta,
      value: this.getValue("button", "font-size"),
      unit: this.getValue("button", "font-size-unit"),
      elementType: "button"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Line Height", "editorskit-typography-addon"),
      syntax: "line-height",
      createMeta: this.createMeta,
      value: this.getValue("button", "line-height"),
      unit: this.getValue("button", "line-height-unit"),
      elementType: "button"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: __("Letter Spacing", "editorskit-typography-addon"),
      syntax: "letter-spacing",
      createMeta: this.createMeta,
      value: this.getValue("button", "letter-spacing"),
      unit: this.getValue("button", "letter-spacing-unit"),
      elementType: "button"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __("Text Transform", "editorskit-typography-addon"),
      options: transformOptions(),
      value: this.getValue("button", "text-transform"),
      onChange: selectedTransform => {
        this.createMeta("text-transform", selectedTransform, "button");
      }
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose([withSelect(select => {
  return {
    postmeta: select("core/editor").getEditedPostAttribute("meta")
  };
}), withDispatch(dispatch => {
  const {
    createNotice
  } = dispatch("core/notices");
  return {
    onFontSelection(fontData, key) {
      dispatch("core/editor").editPost({
        meta: {
          _editorskit_typography_data: key ? {
            meta: {
              id: key,
              data: fontData
            }
          } : {
            meta: fontData
          }
        }
      });
    },

    removeFontSelection() {
      dispatch("core/editor").editPost({
        meta: {
          _editorskit_typography_data: {
            meta: {
              disabled: true
            }
          }
        }
      });
      document.body.classList.remove("ek-has-typography");
    },

    noticeMessage(message) {
      createNotice("info", message, {
        isDismissible: true,
        type: "snackbar"
      });
    }

  };
}), withSpokenMessages])(TypographySelection));

/***/ }),

/***/ "./src/add-ons/typography/src/components/unit-control/index.js":
/*!*********************************************************************!*\
  !*** ./src/add-ons/typography/src/components/unit-control/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __,
  sprintf
} = wp.i18n;
const {
  Fragment,
  Component
} = wp.element;
const {
  Tooltip,
  ButtonGroup,
  withSpokenMessages,
  Button
} = wp.components;

class UnitControl extends Component {
  render() {
    const {
      label,
      createMeta,
      syntax,
      unit,
      value,
      elementType,
      level
    } = this.props;
    const unitSizes = [{
      /* translators: a unit of size (px) for css markup */
      name: __('Pixel', 'editorskit-typography-addon'),
      unitValue: 'px'
    }, {
      /* translators: a unit of size (em) for css markup */
      name: __('Em', 'editorskit-typography-addon'),
      unitValue: 'em'
    }, {
      /* translators: a unit of size (rem) for css markup */
      name: __('Rem', 'editorskit-typography-addon'),
      unitValue: 'rem'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-editorskit-typography-unit-control"
    }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'components-editorskit-typography-unit-control__label'
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-editorskit-typography-unit-control__fields"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "components-editorskit-typography-unit-control__number",
      type: "number",
      onChange: event => {
        createMeta(syntax, event.target.value, elementType, level);
      },
      value: value
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      className: "components-editorskit-typography-unit-control__units",
      "aria-label": __('Select Units', 'editorskit-typography-addon')
    }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(unitSizes, _ref => {
      let {
        unitValue,
        name
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
        text: sprintf(
        /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
        __('%s Units', 'editorskit-typography-addon'), name)
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        key: unitValue,
        className: 'components-editorskit-typography-unit-control__units--' + name,
        isDefault: true,
        isPrimary: unit === unitValue,
        "aria-pressed": unit === unitValue,
        "aria-label": sprintf(
        /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
        __('%s Units', 'editorskit-typography-addon'), name),
        onClick: () => {
          createMeta(syntax + '-unit', unitValue, elementType, level);
        }
      }, unitValue));
    })))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSpokenMessages(UnitControl));

/***/ }),

/***/ "./src/add-ons/typography/src/index.js":
/*!*********************************************!*\
  !*** ./src/add-ons/typography/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_sidebar_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/sidebar-menu-item */ "./src/add-ons/typography/src/plugins/sidebar-menu-item/index.js");
/* harmony import */ var _block_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-panel */ "./src/add-ons/typography/src/block-panel/index.js");
/**
 * Sidebar Panel
 */



/***/ }),

/***/ "./src/add-ons/typography/src/plugins/sidebar-menu-item/components/panel.js":
/*!**********************************************************************************!*\
  !*** ./src/add-ons/typography/src/plugins/sidebar-menu-item/components/panel.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_font_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/font-selection */ "./src/add-ons/typography/src/components/font-selection/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Render plugin
 */

class SidebarPanel extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: false
    };
  }

  render() {
    var _wp, _wp$editPost, _wp2, _wp2$editPost;

    let PluginSidebar = (_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$editPost = _wp.editPost) === null || _wp$editPost === void 0 ? void 0 : _wp$editPost.PluginSidebar;
    let PluginSidebarMoreMenuItem = (_wp2 = wp) === null || _wp2 === void 0 ? void 0 : (_wp2$editPost = _wp2.editPost) === null || _wp2$editPost === void 0 ? void 0 : _wp2$editPost.PluginSidebarMoreMenuItem;

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isFunction)(PluginSidebar) || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isFunction)(PluginSidebarMoreMenuItem)) {
      return null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginSidebarMoreMenuItem, {
      target: "editorskit-typography-panel"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Typography Settings", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginSidebar, {
      name: "editorskit-typography-panel",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Typography Settings", "editorskit-typography-addon")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editorskit-block-card"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editor-block-card"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_5__.BlockIcon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
      showColors: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editor-block-card__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editor-block-card__title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Typography Settings", "editorskit-typography-addon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editor-block-card__description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select from predefined font combinations. You can also create custom combo or duplicate existing ones.", "editorskit-typography-addon"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_font_selection__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.withSpokenMessages])(SidebarPanel));

/***/ }),

/***/ "./src/add-ons/typography/src/plugins/sidebar-menu-item/index.js":
/*!***********************************************************************!*\
  !*** ./src/add-ons/typography/src/plugins/sidebar-menu-item/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/panel */ "./src/add-ons/typography/src/plugins/sidebar-menu-item/components/panel.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  wp.plugins.registerPlugin("editorskit-typography-panel", {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    render: _components_panel__WEBPACK_IMPORTED_MODULE_0__["default"]
  });
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_ons_typography_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-ons/typography/src */ "./src/add-ons/typography/src/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/blockEditor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/add-ons/typography/src/defaults/fonts.json":
/*!********************************************************!*\
  !*** ./src/add-ons/typography/src/defaults/fonts.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"roboto-cabin":{"name":"Roboto Condensed + Cabin","type":"default","category":"modern,minimal,warm","heading":{"font-weight":700,"font-family":"\'Roboto Condensed\', sans-serif"},"content":{"font-family":"\'Cabin\', sans-serif"},"fonts":["Roboto+Condensed:300,300i,400,400i,700,700i","Cabin:400,400i,500,500i,600,600i,700,700i"]},"raleway-open":{"name":"Raleway + Open Sans","type":"default","category":"modern,minimal","heading":{"font-weight":300,"font-family":"\'Raleway\', sans-serif"},"content":{"font-family":"\'Open Sans\', sans-serif"},"fonts":["Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i","Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"]},"playfair-sourcesans":{"name":"Playfair Display + Source Sans","type":"default","category":"striking,classic,warm","heading":{"font-weight":300,"font-family":"\'Playfair Display\', sans-serif"},"content":{"font-family":"\'Source Sans Pro\', sans-serif"},"fonts":["Playfair+Display:400,400i,700,700i,900,900i","Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"]},"roboto-lora":{"name":"Roboto + Lora","type":"default","category":"modern,neutral","heading":{"font-weight":700,"font-family":"\'Roboto\', sans-serif"},"content":{"font-family":"\'Lora\', serif"},"fonts":["Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i","Lora:400,400i,700,700i"]},"abril-poppins":{"name":"Abril Fatface + Poppins","type":"default","category":"eccentric,classic,warm","heading":{"font-weight":400,"font-family":"\'Abril Fatface\', cursive"},"content":{"font-family":"\'Poppins\', sans-serif"},"fonts":["Abril+Fatface","Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]},"ruda-roboto":{"name":"Ruda + Roboto Slab","type":"default","category":"striking,eccentric,neutral","heading":{"font-weight":400,"font-family":"\'Ruda\', sans-serif"},"content":{"font-family":"\'Roboto Slab\', serif"},"fonts":["Ruda:400,700,900","Roboto+Slab:100,200,300,400,500,600,700,800,900"]},"cormorant-fira":{"name":"Cormorant Garamond + Fira Sans","type":"default","category":"eccentric,classic,minimal","heading":{"font-weight":700,"font-style":"italic","font-family":"\'Cormorant Garamond\', serif"},"content":{"font-family":"\'Fira Sans\', sans-serif"},"fonts":["Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i","Fira+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]},"pt-playfair":{"name":"PT Sans + Playfair Display","type":"default","category":"modern,neutral","heading":{"font-weight":700,"font-family":"\'PT Sans\', sans-serif"},"content":{"font-family":"\'Playfair Display\', serif"},"fonts":["PT+Sans:400,400i,700,700i","Playfair+Display:400,400i,700,700i,900,900i"]},"oxygen-noto":{"name":"Oxygen + Noto Serif","type":"default","category":"modern,minimal,neutral","heading":{"font-weight":400,"font-family":"\'Oxygen\', sans-serif"},"content":{"font-family":"\'Noto Serif\', serif"},"fonts":["Oxygen:300,400,700","Noto+Serif:400,400i,700,700i"]},"arvo-lato":{"name":"Arvo + Lato","type":"default","category":"modern,minimal,neutral,warm","heading":{"font-weight":400,"font-family":"\'Arvo\', serif"},"content":{"font-family":"\'Lato\', sans-serif"},"fonts":["Arvo:400,400i,700,700i","Lato:100,100i,300,300i,400,400i,700,700i,900,900i"]},"lato-catamaran":{"name":"Lato + Catamaran","type":"default","category":"classic,warm","heading":{"font-weight":400,"font-style":"italic","font-family":"\'Lato\', sans-serif"},"content":{"font-family":"\'Catamaran\', sans-serif"},"fonts":["Lato:100,100i,300,300i,400,400i,700,700i,900,900i","Catamaran:100,200,300,400,500,600,700,800,900"]},"merriweather-muli":{"name":"Merriweather + Muli","type":"default","category":"striking,classic,warm","heading":{"font-weight":400,"font-family":"\'Merriweather\', serif"},"content":{"font-weight":300,"font-family":"\'Muli\', sans-serif"},"fonts":["Merriweather:300,300i,400,400i,700,700i,900,900i","Muli:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]},"pt-bitter":{"name":"PT Sans + Bitter","type":"default","category":"modern,striking","heading":{"font-weight":400,"font-style":"italic","font-family":"\'PT Sans\', sans-serif"},"content":{"font-family":"\'Bitter\', serif"},"fonts":["PT+Sans:400,400i,700,700i","Bitter:400,400i,700"]},"cinzel-fauna":{"name":"Cinzel + Fauna One","type":"default","category":"striking,eccentric,warm","heading":{"font-weight":700,"text-transform":"uppercase","font-family":"\'Cinzel\', serif"},"content":{"font-family":"\'Fauna One\', serif"},"fonts":["Cinzel:400,700,90","Fauna+One"]},"work-open":{"name":"Work Sans + Open Sans","type":"default","category":"modern,classic,minimal,neutral","heading":{"font-weight":300,"font-family":"\'Work Sans\', sans-serif"},"content":{"font-family":"\'Open Sans\', sans-serif"},"fonts":["Work+Sans:100,200,300,400,500,600,700,800,900","Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"]},"oswald-quattro":{"name":"Oswald + Quattro Cento","type":"default","category":"modern,striking,minimal","heading":{"font-weight":400,"text-transform":"uppercase","font-family":"\'Oswald\', sans-serif"},"content":{"font-family":"\'Quattrocento\', serif"},"fonts":["Oswald:200,300,400,500,600,700","Quattrocento:400,700"]},"nunito-pt":{"name":"Nunito + PT Sans","type":"default","category":"eccentric,warm","heading":{"font-weight":400,"font-family":"\'Nunito\', sans-serif"},"content":{"font-family":"\'PT Sans\', sans-serif"},"fonts":["Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i","PT+Sans:400,400i,700,700i"]},"unica-crimson":{"name":"Unica One + Crimson Text","type":"default","category":"modern,striking,eccentric,minimal,neutral","heading":{"font-weight":400,"text-transform":"uppercase","font-family":"\'Unica One\', cursive"},"content":{"font-family":"\'Crimson Text\', serif"},"fonts":["Unica+One","Crimson+Text:400,400i,600,600i,700,700i"]},"julius-monda":{"name":"Julius Sans + Monda","type":"default","category":"striking,eccentric,minimal","heading":{"font-weight":400,"text-transform":"uppercase","font-family":"\'Julius Sans One\', sans-serif"},"content":{"font-family":"\'Monda\', sans-serif"},"fonts":["Julius+Sans+One","Monda:400,700"]},"varela-noto":{"name":"Varela Round + Noto Serif","type":"default","category":"neutral,warm","heading":{"font-weight":400,"font-family":"\'Varela Round\', sans-serif"},"content":{"font-family":"\'Noto Serif\', serif"},"fonts":["Varela+Round","Noto+Serif:400,400i,700,700i"]},"vollkorn-raleway":{"name":"Vollkorn + Raleway","type":"default","category":"modern,striking,eccentric,classic,warm","heading":{"font-weight":400,"font-style":"italic","font-family":"\'Vollkorn\', serif"},"content":{"font-family":"\'Raleway\', sans-serif"},"fonts":["Vollkorn:400,400i,600,600i,700,700i,900,900i","Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]},"ovo-quattrocento":{"name":"Ovo + Quattrocento Sans","type":"default","category":"minimal,warm","heading":{"font-family":"\'Ovo\', serif"},"content":{"font-family":"\'Quattrocento Sans\', sans-serif"},"fonts":["Ovo","Quattrocento+Sans:400,400i,700,700i"]},"ubuntu-open":{"name":"Ubuntu + Open Sans","type":"default","category":"striking,neutral","heading":{"font-weight":700,"text-transform":"uppercase","font-family":"\'Ubuntu\', sans-serif"},"content":{"font-family":"\'Open Sans\', sans-serif"},"fonts":["Ubuntu:300,300i,400,400i,500,500i,700,700i","Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"]},"source-sintony":{"name":"Source Sans Pro + Sintony","type":"default","category":"neutral","heading":{"font-weight":900,"font-family":"\'Source Sans Pro\', sans-serif"},"content":{"font-family":"\'Sintony\', sans-serif"},"fonts":["Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i","Sintony:400,700"]},"slabo-lato":{"name":"Slabo 13px + Lato","type":"default","category":"modern,striking,eccentric,neutral,warm","heading":{"font-weight":700,"font-family":"\'Slabo 13px\', serif"},"content":{"font-family":"\'Lato\', sans-serif"},"fonts":["Slabo+13px","Lato:100,100i,300,300i,400,400i,700,700i,900,900i"]},"rufina-pt":{"name":"Rufina + PT Serif","type":"default","category":"minimal,warm","heading":{"font-weight":700,"font-family":"\'Rufina\', serif"},"content":{"font-family":"\'PT Serif\', serif"},"fonts":["Rufina:400,700","PT+Serif:400,400i,700,700i"]},"dosis-titillium":{"name":"Dosis + Titillium Web","type":"default","category":"modern,eccentric,neutral","heading":{"font-weight":400,"font-family":"\'Dosis\', sans-serif"},"content":{"font-family":"\'Titillium Web\', sans-serif"},"fonts":["Dosis:200,300,400,500,600,700,800","Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900"]},"oswald-esteban":{"name":"Oswald + Esteban","type":"default","category":"modern,eccentric,warm","heading":{"font-weight":300,"font-family":"\'Oswald\', sans-serif"},"content":{"font-family":"\'Esteban\', serif"},"fonts":["Oswald:200,300,400,500,600,700","Esteban"]},"playfair-source":{"name":"Playfair Display + Source Sans Pro","type":"default","category":"striking,eccentric,warm","heading":{"font-weight":900,"font-family":"\'Playfair Display\', serif"},"content":{"font-family":"\'Source Sans Pro\', sans-serif"},"fonts":["Playfair+Display:400,400i,700,700i,900,900i","Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"]},"libre-nunito":{"name":"Libre Baskerville + Nunito","type":"default","category":"minimal,neutral","heading":{"font-weight":700,"font-family":"\'Libre Baskerville\', serif"},"content":{"font-family":"\'Nunito\', sans-serif"},"fonts":["Libre+Baskerville:400,400i,700","Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"]},"catamaran-merriweather":{"name":"Catamaran + Merriweather Sans","type":"default","category":"modern,neutral","heading":{"font-weight":600,"font-family":"\'Catamaran\', sans-serif"},"content":{"font-weight":300,"font-family":"\'Merriweather Sans\', sans-serif"},"fonts":["Catamaran:100,200,300,400,500,600,700,800,900","Merriweather+Sans:300,300i,400,400i,700,700i,800,800i"]},"bree-alegreya":{"name":"Bree Serif + Alegreya","type":"default","category":"striking,eccentric,warm","heading":{"font-weight":700,"text-transform":"uppercase","font-family":"\'Bree Serif\', serif"},"content":{"font-weight":300,"font-family":"\'Alegreya\', serif"},"fonts":["Bree+Serif","Alegreya:400,400i,500,500i,700,700i,800,800i,900,900i"]},"cardo-libre":{"name":"Cardo + Libre Franklin","type":"default","category":"striking,classic,neutral","heading":{"font-weight":700,"font-family":"\'Cardo\', serif"},"content":{"font-family":"\'Libre Franklin\', sans-serif"},"fonts":["Cardo:400,400i,700","Libre+Franklin:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]},"roboto-libre":{"name":"Roboto + Libre Baskerville","type":"default","category":"minimal,neutral","heading":{"font-weight":500,"font-family":"\'Roboto\', sans-serif"},"content":{"font-family":"\'Libre Baskerville\', serif"},"fonts":["Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i","Libre+Baskerville:400,400i,700"]},"goudy-average":{"name":"Goudy Bookletter 1911 + Average Sans","type":"default","category":"classic,warm","heading":{"font-weight":500,"font-family":"\'Goudy Bookletter 1911\', serif"},"content":{"font-family":"\'Average Sans\', sans-serif"},"fonts":["Goudy+Bookletter+1911","Average+Sans"]},"raleway-frank":{"name":"Raleway + Frank Ruhl Libre","type":"default","category":"minimal,neutral","heading":{"font-weight":300,"font-family":"\'Raleway\', sans-serif"},"content":{"font-family":"\'Frank Ruhl Libre\', serif"},"fonts":["Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i","Frank+Ruhl+Libre:300,400,500,700,900"]},"prata-lato":{"name":"Prata + Lato","type":"default","category":"eccentric,warm","heading":{"font-weight":400,"font-family":"\'Prata\', serif"},"content":{"font-family":"\'Lato\', sans-serif"},"fonts":["Prata","Lato:100,100i,300,300i,400,400i,700,700i,900,900i"]},"ezcar-merriweather":{"name":"Eczar + Merriweather","type":"default","category":"classic,neutral","heading":{"font-weight":600,"font-family":"\'Eczar\', serif"},"content":{"font-family":"\'Merriweather\', serif"},"fonts":["Eczar:400,500,600,700,800","Merriweather:300,300i,400,400i,700,700i,900,900i"]},"chivo-crimson":{"name":"Chivo + Crimson Text","type":"default","category":"minimal,neutral","heading":{"font-weight":300,"font-family":"\'Chivo\', sans-serif"},"content":{"font-family":"\'Crimson Text\', serif"},"fonts":["Chivo:300,300i,400,400i,700,700i,900,900i","Crimson+Text:400,400i,600,600i,700,700i"]},"rubik-karla":{"name":"Rubik + Karla","type":"default","category":"modern,minimal","heading":{"font-weight":400,"font-family":"\'Rubik\', sans-serif"},"content":{"font-family":"\'Karla\', sans-serif"},"fonts":["Rubik:300,300i,400,400i,500,500i,700,700i,900,900i","Karla:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"]},"neuton-work":{"name":"Neuton + Work Sans","type":"default","category":"striking,classic,warm","heading":{"font-weight":400,"font-family":"\'Neuton\', serif"},"content":{"font-family":"\'Work Sans\', sans-serif"},"fonts":["Neuton:200,300,400,400i,700,800","Work+Sans:100,200,300,400,500,600,700,800,900"]},"anton-signika":{"name":"Anton + Signika","type":"default","category":"striking,eccentric,minimal,neutral","heading":{"font-weight":400,"font-family":"\'Anton\', sans-serif"},"content":{"font-weight":300,"font-family":"\'Signika\', sans-serif"},"fonts":["Anton","Signika:300,400,600,700"]}}');

/***/ }),

/***/ "./src/add-ons/typography/src/defaults/google-fonts.json":
/*!***************************************************************!*\
  !*** ./src/add-ons/typography/src/defaults/google-fonts.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fonts":[{"name":"Abril Fatface","font-family":"\'Abril Fatface\', cursive","weights":""},{"name":"Alegreya","font-family":"\'Alegreya\', serif","weights":"400,400i,500,500i,700,700i,800,800i,900,900i"},{"name":"Anton","font-family":"\'Anton\', sans-serif","weights":""},{"name":"Arvo","font-family":"\'Arvo\', serif","weights":"400,400i,700,700"},{"name":"Average Sans","font-family":"\'Average Sans\', sans-serif","weights":""},{"name":"Berkshire Swash","font-family":"\'Berkshire Swash\', cursive","weights":"400"},{"name":"Bitter","font-family":"\'Bitter\', serif","weights":"400,400i,700"},{"name":"Bree Serif","font-family":"\'Bree Serif\', serif","weights":""},{"name":"Cabin","font-family":"\'Cabin\', sans-serif","weights":"400,400i,500,500i,600,600i,700,700i"},{"name":"Cardo","font-family":"\'Cardo\', serif","weights":"400,400i,700"},{"name":"Catamaran","font-family":"\'Catamaran\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Chivo","font-family":"\'Chivo\', sans-serif","weights":"300,300i,400,400i,700,700i,900,900i"},{"name":"Cinzel","font-family":"\'Cinzel\', serif","weights":"400,700,90"},{"name":"Cormorant Garamond","font-family":"","weights":"300,300i,400,400i,500,500i,600,600i,700,700i"},{"name":"Crimson Text","font-family":"\'Cormorant Garamond\', serif","weights":"400,400i,600,600i,700,700i"},{"name":"Dosis","font-family":"\'Dosis\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Eczar","font-family":"\'Eczar\', serif","weights":"400,500,600,700,800"},{"name":"Esteban","font-family":"\'Esteban\', serif","weights":""},{"name":"Fauna One","font-family":"\'Fauna One\', serif","weights":""},{"name":"Fira Code","font-family":"\'Fira Code\', monospace","weights":"300,400,500,600,700"},{"name":"Fira Sans","font-family":"\'Fira Sans\', sans-serif","weights":"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},{"name":"Frank Ruhl Libre","font-family":"\'Frank Ruhl Libre\', serif","weights":"300,400,500,700,900"},{"name":"Goudy Bookletter 1911","font-family":"\'Goudy Bookletter 1911\', serif","weights":""},{"name":"Julius Sans One","font-family":"\'Julius Sans One\', sans-serif","weights":""},{"name":"Karla","font-family":"\'Karla\', sans-serif","weights":"200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"},{"name":"Lato","font-family":"\'Lato\', sans-serif","weights":"100,100i,300,300i,400,400i,700,700i,900,900i"},{"name":"Libre Baskerville","font-family":"\'Libre Baskerville\', serif","weights":"400,400i,700"},{"name":"Libre Franklin","font-family":"\'Libre Franklin\', sans-serif","weights":"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},{"name":"Lora","font-family":"\'Lora\', serif","weights":"400,400i,700,700i"},{"name":"Merriweather Sans","font-family":"\'Merriweather Sans\', sans-serif","weights":"300,300i,400,400i,700,700i,800,800i"},{"name":"Merriweather","font-family":"\'Merriweather\', serif","weights":"300,300i,400,400i,700,700i,900,900i"},{"name":"Monda","font-family":"\'Monda\', sans-serif","weights":"400,700"},{"name":"Muli","font-family":"\'Muli\', sans-serif","weights":"200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},{"name":"Neuton","font-family":"\'Neuton\', serif","weights":"200,300,400,400i,700,800"},{"name":"Noto Serif","font-family":"\'Noto Serif\', serif","weights":"400,400i,700,700i"},{"name":"Nunito","font-family":"\'Nunito\', sans-serif","weights":"200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"},{"name":"Open Sans","font-family":"\'Open Sans\', sans-serif","weights":"300,300i,400,400i,600,600i,700,700i,800,800i"},{"name":"Oswald","font-family":"\'Oswald\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Ovo","font-family":"\'Ovo\', serif","weights":""},{"name":"Oxygen","font-family":"\'Oxygen\', sans-serif","weights":"300,400,700"},{"name":"PT Sans","font-family":"\'PT Sans\', sans-serif","weights":"400,400i,700,700i"},{"name":"PT Serif","font-family":"\'PT Serif\', serif","weights":"400,400i,700,700i"},{"name":"Playfair Display","font-family":"\'Playfair Display\', serif","weights":"400,400i,700,700i,900,900i"},{"name":"Poppins","font-family":"\'Poppins\', sans-serif","weights":"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},{"name":"Prata","font-family":"\'Prata\', serif","weights":""},{"name":"Quattrocento Sans","font-family":"\'Quattrocento Sans\', sans-serif","weights":"400,400i,700,700i"},{"name":"Quattrocento","font-family":"\'Quattrocento\', serif","weights":"400,700"},{"name":"Raleway","font-family":"\'Raleway\', sans-serif","weights":"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},{"name":"Roboto Condensed","font-family":"\'Roboto Condensed\', sans-serif","weights":"300,300i,400,400i,700,700i"},{"name":"Roboto Slab","font-family":"\'Roboto Slab\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Roboto","font-family":"\'Roboto\', sans-serif","weights":"100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"},{"name":"Rubik","font-family":"\'Rubik\', sans-serif","weights":"300,300i,400,400i,500,500i,700,700i,900,900i"},{"name":"Ruda","font-family":"\'Ruda\', sans-serif","weights":"400,700,900"},{"name":"Rufina","font-family":"\'Rufina\', serif","weights":"400,700"},{"name":"Signika","font-family":"\'Signika\', sans-serif","weights":"300,400,600,700"},{"name":"Sintony","font-family":"\'Sintony\', sans-serif","weights":"400,700"},{"name":"Slabo 13px","font-family":"\'Slabo 13px\', serif","weights":""},{"name":"Source Sans Pro","font-family":"\'Source Sans Pro\', sans-serif","weights":"200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"},{"name":"Titillium Web","font-family":"\'Titillium Web\', sans-serif","weights":"200,200i,300,300i,400,400i,600,600i,700,700i,900"},{"name":"Ubuntu","font-family":"\'Ubuntu\', sans-serif","weights":"300,300i,400,400i,500,500i,700,700i"},{"name":"Unica One","font-family":"\'Unica One\', cursive","weights":""},{"name":"Varela Round","font-family":"\'Varela Round\', sans-serif","weights":""},{"name":"Vollkorn","font-family":"\'Vollkorn\', serif","weights":"400,400i,600,600i,700,700i,900,900i"},{"name":"Work Sans","font-family":"\'Work Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeditorskit_typography_addon"] = self["webpackChunkeditorskit_typography_addon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
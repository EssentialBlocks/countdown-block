/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";
//

var _window$EBCountdownCo = window.EBCountdownControls,
    generateDimensionsAttributes = _window$EBCountdownCo.generateDimensionsAttributes,
    generateTypographyAttributes = _window$EBCountdownCo.generateTypographyAttributes,
    generateBackgroundAttributes = _window$EBCountdownCo.generateBackgroundAttributes,
    generateBorderShadowAttributes = _window$EBCountdownCo.generateBorderShadowAttributes,
    generateResponsiveRangeAttributes = _window$EBCountdownCo.generateResponsiveRangeAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  //
  preset: {
    type: "string",
    "default": "default"
  },
  //
  flexDirection: {
    type: "string",
    "default": "row"
  },
  //
  contentsAlign: {
    type: "string",
    "default": "center"
  },
  //
  contentsJustify: {
    type: "string",
    "default": "center"
  },
  //
  contentsDirection: {
    type: "string",
    "default": "column"
  },
  //
  showSeparator: {
    type: "boolean",
    "default": false
  },
  //
  separatorType: {
    type: "string",
    "default": ":"
  },
  // //
  // sepPositionRight: {
  // 	type: "number",
  // 	default: 48,
  // },
  // //
  // sepPositionTop: {
  // 	type: "number",
  // 	default: 35,
  // },
  //
  separatorColor: {
    type: "string"
  },
  //  deadline Date timestamp
  endTimeStamp: {
    type: "number"
  },
  //
  showDays: {
    type: "boolean",
    "default": true
  },
  showHours: {
    type: "boolean",
    "default": true
  },
  showMinutes: {
    type: "boolean",
    "default": true
  },
  showSeconds: {
    type: "boolean",
    "default": true
  },
  //
  daysLabel: {
    type: "string",
    "default": "Days"
  },
  hoursLabel: {
    type: "string",
    "default": "Hours"
  },
  minutesLabel: {
    type: "string",
    "default": "Minutes"
  },
  secondsLabel: {
    type: "string",
    "default": "Seconds"
  },
  //
  digitsColor: {
    type: "string"
  },
  dayDgColor: {
    type: "string"
  },
  hourDgColor: {
    type: "string"
  },
  minuteDgColor: {
    type: "string"
  },
  secondDgColor: {
    type: "string"
  },
  labelsColor: {
    type: "string"
  },
  dayLbColor: {
    type: "string"
  },
  hourLbColor: {
    type: "string"
  },
  minuteLbColor: {
    type: "string"
  },
  secondLbColor: {
    type: "string"
  },
  dayBdrColor: {
    type: "string"
  },
  hourBdrColor: {
    type: "string"
  },
  minuteBdrColor: {
    type: "string"
  },
  secondBdrColor: {
    type: "string"
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.wrapperWidth, {
  defaultRange: 600
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.boxsSpaceConst, {
  defaultRange: 30
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.separatorPosTop, {
  defaultRange: 46,
  defaultUnit: "%" // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given

})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.separatorPosRight, {
  defaultRange: 18,
  defaultUnit: "%" // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.WrpBgConst, {
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.cdBoxsBgConst, {
  // defaultFillColor: "#7967ff",
  isBgDefaultGradient: true,
  noOverlay: true,
  noMainBgi: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.cdDayBoxBgConst, {
  noTransition: true,
  noOverlay: true,
  noMainBgi: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.cdHourBoxBgConst, {
  noTransition: true,
  noOverlay: true,
  noMainBgi: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.cdMinuteBoxBgConst, {
  noTransition: true,
  noOverlay: true,
  noMainBgi: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.cdSecondBoxBgConst, {
  noTransition: true,
  noOverlay: true,
  noMainBgi: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBdShadowConst, {// noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.cdBoxsBdShadowConst, {
  // bdrDefaults: {
  // 	top: 0,
  // 	bottom: 0,
  // 	right: 0,
  // 	left: 0,
  // },
  rdsDefaults: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10
  } // noShadow: true,
  // noBorder: true,

})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.cdBoxsPaddingConst, {
  top: 20,
  bottom: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.cdWrapMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.cdWrapPaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.cdDigitsPaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.cdLabelsPaddingConst));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cdBoxsBgConst": function() { return /* binding */ cdBoxsBgConst; },
/* harmony export */   "cdDayBoxBgConst": function() { return /* binding */ cdDayBoxBgConst; },
/* harmony export */   "cdHourBoxBgConst": function() { return /* binding */ cdHourBoxBgConst; },
/* harmony export */   "cdMinuteBoxBgConst": function() { return /* binding */ cdMinuteBoxBgConst; },
/* harmony export */   "cdSecondBoxBgConst": function() { return /* binding */ cdSecondBoxBgConst; },
/* harmony export */   "WrpBgConst": function() { return /* binding */ WrpBgConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var cdBoxsBgConst = "boxsBg_";
var cdDayBoxBgConst = "dayBg_";
var cdHourBoxBgConst = "hourBg_";
var cdMinuteBoxBgConst = "minuteBg_";
var cdSecondBoxBgConst = "secondBg_";
var WrpBgConst = "WrpBg_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cdBoxsBdShadowConst": function() { return /* binding */ cdBoxsBdShadowConst; },
/* harmony export */   "WrpBdShadowConst": function() { return /* binding */ WrpBdShadowConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var cdBoxsBdShadowConst = "boxsBds_";
var WrpBdShadowConst = "wrpBdSd_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cdBoxsPaddingConst": function() { return /* binding */ cdBoxsPaddingConst; },
/* harmony export */   "cdWrapMarginConst": function() { return /* binding */ cdWrapMarginConst; },
/* harmony export */   "cdWrapPaddingConst": function() { return /* binding */ cdWrapPaddingConst; },
/* harmony export */   "cdDigitsPaddingConst": function() { return /* binding */ cdDigitsPaddingConst; },
/* harmony export */   "cdLabelsPaddingConst": function() { return /* binding */ cdLabelsPaddingConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var cdBoxsPaddingConst = "boxsP_";
var cdWrapMarginConst = "wrpMrg_";
var cdWrapPaddingConst = "wrpPad_";
var cdDigitsPaddingConst = "dgPad_";
var cdLabelsPaddingConst = "lblPad_";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STYLE_PRESETS": function() { return /* binding */ STYLE_PRESETS; },
/* harmony export */   "SEPARATOR_TYPES": function() { return /* binding */ SEPARATOR_TYPES; },
/* harmony export */   "LAYOUT_TYPES": function() { return /* binding */ LAYOUT_TYPES; },
/* harmony export */   "ALIGN_ITEMS": function() { return /* binding */ ALIGN_ITEMS; },
/* harmony export */   "JUSTIFY_CONTENTS": function() { return /* binding */ JUSTIFY_CONTENTS; },
/* harmony export */   "FLEX_DIRECTIONS": function() { return /* binding */ FLEX_DIRECTIONS; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var STYLE_PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "essential-blocks"),
  value: "preset2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "preset3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "preset4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 5", "essential-blocks"),
  value: "preset5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 6", "essential-blocks"),
  value: "preset6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 7", "essential-blocks"),
  value: "preset7"
}];
var SEPARATOR_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: ":"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "|"
}];
var LAYOUT_TYPES = [{
  label: "Grid View",
  value: "row"
}, {
  label: "List View",
  value: "column"
}]; // export const BG_TYPES = ["fill", "gradient"];

var ALIGN_ITEMS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "flex-end"
}];
var JUSTIFY_CONTENTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Start", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("End", "essential-blocks"),
  value: "flex-end"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space-Between", "essential-blocks"),
  value: "space-between"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space-around", "essential-blocks"),
  value: "space-around"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space-Evenly", "essential-blocks"),
  value: "space-evenly"
}];
var FLEX_DIRECTIONS = [{
  label: "Row",
  value: "row"
}, {
  label: "Row-Reverse",
  value: "row-reverse"
}, {
  label: "Column",
  value: "column"
}, {
  label: "Column-Reverse",
  value: "column-reverse"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperWidth": function() { return /* binding */ wrapperWidth; },
/* harmony export */   "boxsSpaceConst": function() { return /* binding */ boxsSpaceConst; },
/* harmony export */   "separatorPosTop": function() { return /* binding */ separatorPosTop; },
/* harmony export */   "separatorPosRight": function() { return /* binding */ separatorPosRight; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var wrapperWidth = "wrpW_";
var boxsSpaceConst = "boxsSpb_";
var separatorPosTop = "sepTop_";
var separatorPosRight = "sepRight_";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_digits": function() { return /* binding */ typoPrefix_digits; },
/* harmony export */   "typoPrefix_labels": function() { return /* binding */ typoPrefix_labels; },
/* harmony export */   "typoPrefix_separator": function() { return /* binding */ typoPrefix_separator; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var typoPrefix_digits = "dg_";
var typoPrefix_labels = "lb_";
var typoPrefix_separator = "sp_";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */
// import {
// 	softMinifyCssStrings,
// 	generateBackgroundControlStyles,
// 	generateDimensionsControlStyles,
// 	generateTypographyStyles,
// 	generateBorderShadowStyles,
// 	generateResponsiveRangeStyles,
// 	mimmikCssForPreviewBtnClick,
// 	duplicateBlockIdFix,
// } from "../../../util/helpers";

var _window$EBCountdownCo = window.EBCountdownControls,
    softMinifyCssStrings = _window$EBCountdownCo.softMinifyCssStrings,
    generateBackgroundControlStyles = _window$EBCountdownCo.generateBackgroundControlStyles,
    generateDimensionsControlStyles = _window$EBCountdownCo.generateDimensionsControlStyles,
    generateTypographyStyles = _window$EBCountdownCo.generateTypographyStyles,
    generateBorderShadowStyles = _window$EBCountdownCo.generateBorderShadowStyles,
    generateResponsiveRangeStyles = _window$EBCountdownCo.generateResponsiveRangeStyles,
    duplicateBlockIdFix = _window$EBCountdownCo.duplicateBlockIdFix;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";







function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      clientId = _ref.clientId,
      className = _ref.className;
  var daysRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var hoursRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var minutesRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var secondsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var resOption = attributes.resOption,
      blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      endTimeStamp = attributes.endTimeStamp,
      showDays = attributes.showDays,
      showHours = attributes.showHours,
      showMinutes = attributes.showMinutes,
      showSeconds = attributes.showSeconds,
      daysLabel = attributes.daysLabel,
      hoursLabel = attributes.hoursLabel,
      minutesLabel = attributes.minutesLabel,
      secondsLabel = attributes.secondsLabel,
      preset = attributes.preset,
      showSeparator = attributes.showSeparator,
      separatorType = attributes.separatorType,
      _attributes$separator = attributes.separatorColor,
      separatorColor = _attributes$separator === void 0 ? "#4c457b" : _attributes$separator,
      contentsAlign = attributes.contentsAlign,
      contentsDirection = attributes.contentsDirection,
      contentsJustify = attributes.contentsJustify,
      flexDirection = attributes.flexDirection,
      _attributes$digitsCol = attributes.digitsColor,
      digitsColor = _attributes$digitsCol === void 0 ? "#fff" : _attributes$digitsCol,
      dayDgColor = attributes.dayDgColor,
      hourDgColor = attributes.hourDgColor,
      minuteDgColor = attributes.minuteDgColor,
      secondDgColor = attributes.secondDgColor,
      _attributes$labelsCol = attributes.labelsColor,
      labelsColor = _attributes$labelsCol === void 0 ? "#fff" : _attributes$labelsCol,
      dayLbColor = attributes.dayLbColor,
      hourLbColor = attributes.hourLbColor,
      minuteLbColor = attributes.minuteLbColor,
      secondLbColor = attributes.secondLbColor,
      dayBdrColor = attributes.dayBdrColor,
      hourBdrColor = attributes.hourBdrColor,
      minuteBdrColor = attributes.minuteBdrColor,
      secondBdrColor = attributes.secondBdrColor,
      boxsBds_borderStyle = attributes.boxsBds_borderStyle; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-countdown";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId: clientId
    });
  }, []); // // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
  // useEffect(() => {
  // 	mimmikCssForPreviewBtnClick({
  // 		domObj: document,
  // 		select,
  // 	});
  // }, []);
  // this useEffect is for the countdown animation effect

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var fakeElement = {
      current: {
        textContent: "3e"
      }
    };
    var daysRefUe = daysRef.current ? daysRef : fakeElement;
    var hoursRefUe = hoursRef.current ? hoursRef : fakeElement;
    var minutesRefUe = minutesRef.current ? minutesRef : fakeElement;
    var secondsRefUe = secondsRef.current ? secondsRef : fakeElement;

    var timeLeft = function timeLeft(deadlineTimeStamp) {
      var intervalId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var now = Date.now();
      var secondsLeft = Math.round((deadlineTimeStamp - now) / 1000);
      var seconds = secondsLeft % 60;
      var minutes = Math.floor(secondsLeft / 60) % 60;
      var hours = Math.floor(secondsLeft / 3600) % 24;
      var days = Math.floor(secondsLeft / 86400);

      if (secondsLeft < 0) {
        clearInterval(intervalId);
        daysRefUe.current.textContent = "00";
        hoursRefUe.current.textContent = "00";
        minutesRefUe.current.textContent = "00";
        secondsRefUe.current.textContent = "00";
        return;
      }

      daysRefUe.current.textContent = days < 10 ? "0".concat(days) : "".concat(days);
      hoursRefUe.current.textContent = hours < 10 ? "0".concat(hours) : "".concat(hours);
      minutesRefUe.current.textContent = minutes < 10 ? "0".concat(minutes) : "".concat(minutes);
      secondsRefUe.current.textContent = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
    };

    timeLeft(endTimeStamp || 0);
    var intervalId = setInterval(function () {
      timeLeft(endTimeStamp || 0, intervalId);
    }, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, [endTimeStamp, showDays, showHours, showMinutes, showSeconds]);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "eb-guten-block-main-parent-wrapper")
  }); //
  // styling codes start from here
  //
  // styles related to generateResponsiveRangeStyles start ⬇

  var _generateResponsiveRa = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.wrapperWidth,
    customUnit: "px",
    property: "max-width",
    attributes: attributes
  }),
      wrapWidthDesktop = _generateResponsiveRa.rangeStylesDesktop,
      wrapWidthTab = _generateResponsiveRa.rangeStylesTab,
      wrapWidthMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.boxsSpaceConst,
    customUnit: "px",
    property: flexDirection === "row" ? "margin-left" : "margin-top",
    attributes: attributes
  }),
      BoxsSpaceBetweenDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      BoxsSpaceBetweenTab = _generateResponsiveRa2.rangeStylesTab,
      BoxsSpaceBetweenMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.separatorPosTop,
    property: "top",
    attributes: attributes
  }),
      SeparatorTopDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      SeparatorTopTab = _generateResponsiveRa3.rangeStylesTab,
      SeparatorTopMobile = _generateResponsiveRa3.rangeStylesMobile;

  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.separatorPosRight,
    property: "padding-right",
    attributes: attributes
  }),
      SeparatorRightDesktop = _generateResponsiveRa4.rangeStylesDesktop,
      SeparatorRightTab = _generateResponsiveRa4.rangeStylesTab,
      SeparatorRightMobile = _generateResponsiveRa4.rangeStylesMobile; // styles related to generateResponsiveRangeStyles end
  // styles related to generateTypographyStyles start ⬇


  var _generateTypographySt = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_digits,
    defaultFontSize: 40
  }),
      digitsTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      digitsTypoStylesTab = _generateTypographySt.typoStylesTab,
      digitsTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_labels,
    defaultFontSize: 18
  }),
      labelsTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      labelsTypoStylesTab = _generateTypographySt2.typoStylesTab,
      labelsTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_separator,
    defaultFontSize: 44
  }),
      separatorTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      separatorTypoStylesTab = _generateTypographySt3.typoStylesTab,
      separatorTypoStylesMobile = _generateTypographySt3.typoStylesMobile; // styles related to generateTypographyStyles end
  // styles related to generateBackgroundControlStyles start ⬇


  var _generateBackgroundCo = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.WrpBgConst // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      wrpBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      wrpHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      wrpBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      wrpHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      wrpBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      wrpHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      wrpOverlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      wrpHoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      wrpOverlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      wrpHoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      wrpOverlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      wrpHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
      wrpBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
      wrpOvlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;

  var _generateBackgroundCo2 = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.cdBoxsBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      boxsBackgroundStylesDesktop = _generateBackgroundCo2.backgroundStylesDesktop,
      boxsHoverBackgroundStylesDesktop = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
      boxsBackgroundStylesTab = _generateBackgroundCo2.backgroundStylesTab,
      boxsHoverBackgroundStylesTab = _generateBackgroundCo2.hoverBackgroundStylesTab,
      boxsBackgroundStylesMobile = _generateBackgroundCo2.backgroundStylesMobile,
      boxsHoverBackgroundStylesMobile = _generateBackgroundCo2.hoverBackgroundStylesMobile,
      boxsBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle;

  var _ref2 = showDays ? generateBackgroundControlStyles({
    noTransition: true,
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.cdDayBoxBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }) : {},
      _ref2$backgroundStyle = _ref2.backgroundStylesDesktop,
      dayBoxBgStylesDesktop = _ref2$backgroundStyle === void 0 ? "" : _ref2$backgroundStyle,
      _ref2$hoverBackground = _ref2.hoverBackgroundStylesDesktop,
      dayBoxHoverBgStylesDesktop = _ref2$hoverBackground === void 0 ? "" : _ref2$hoverBackground,
      _ref2$backgroundStyle2 = _ref2.backgroundStylesTab,
      dayBoxBgStylesTab = _ref2$backgroundStyle2 === void 0 ? "" : _ref2$backgroundStyle2,
      _ref2$hoverBackground2 = _ref2.hoverBackgroundStylesTab,
      dayBoxHoverBgStylesTab = _ref2$hoverBackground2 === void 0 ? "" : _ref2$hoverBackground2,
      _ref2$backgroundStyle3 = _ref2.backgroundStylesMobile,
      dayBoxBgStylesMobile = _ref2$backgroundStyle3 === void 0 ? "" : _ref2$backgroundStyle3,
      _ref2$hoverBackground3 = _ref2.hoverBackgroundStylesMobile,
      dayBoxHoverBgStylesMobile = _ref2$hoverBackground3 === void 0 ? "" : _ref2$hoverBackground3;

  var _ref3 = showHours ? generateBackgroundControlStyles({
    noTransition: true,
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.cdHourBoxBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }) : {},
      _ref3$backgroundStyle = _ref3.backgroundStylesDesktop,
      hourBoxBgStylesDesktop = _ref3$backgroundStyle === void 0 ? "" : _ref3$backgroundStyle,
      _ref3$hoverBackground = _ref3.hoverBackgroundStylesDesktop,
      hourBoxHoverBgStylesDesktop = _ref3$hoverBackground === void 0 ? "" : _ref3$hoverBackground,
      _ref3$backgroundStyle2 = _ref3.backgroundStylesTab,
      hourBoxBgStylesTab = _ref3$backgroundStyle2 === void 0 ? "" : _ref3$backgroundStyle2,
      _ref3$hoverBackground2 = _ref3.hoverBackgroundStylesTab,
      hourBoxHoverBgStylesTab = _ref3$hoverBackground2 === void 0 ? "" : _ref3$hoverBackground2,
      _ref3$backgroundStyle3 = _ref3.backgroundStylesMobile,
      hourBoxBgStylesMobile = _ref3$backgroundStyle3 === void 0 ? "" : _ref3$backgroundStyle3,
      _ref3$hoverBackground3 = _ref3.hoverBackgroundStylesMobile,
      hourBoxHoverBgStylesMobile = _ref3$hoverBackground3 === void 0 ? "" : _ref3$hoverBackground3;

  var _ref4 = showMinutes ? generateBackgroundControlStyles({
    noTransition: true,
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.cdMinuteBoxBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }) : {},
      _ref4$backgroundStyle = _ref4.backgroundStylesDesktop,
      minuteBoxBgStylesDesktop = _ref4$backgroundStyle === void 0 ? "" : _ref4$backgroundStyle,
      _ref4$hoverBackground = _ref4.hoverBackgroundStylesDesktop,
      minuteBoxHoverBgStylesDesktop = _ref4$hoverBackground === void 0 ? "" : _ref4$hoverBackground,
      _ref4$backgroundStyle2 = _ref4.backgroundStylesTab,
      minuteBoxBgStylesTab = _ref4$backgroundStyle2 === void 0 ? "" : _ref4$backgroundStyle2,
      _ref4$hoverBackground2 = _ref4.hoverBackgroundStylesTab,
      minuteBoxHoverBgStylesTab = _ref4$hoverBackground2 === void 0 ? "" : _ref4$hoverBackground2,
      _ref4$backgroundStyle3 = _ref4.backgroundStylesMobile,
      minuteBoxBgStylesMobile = _ref4$backgroundStyle3 === void 0 ? "" : _ref4$backgroundStyle3,
      _ref4$hoverBackground3 = _ref4.hoverBackgroundStylesMobile,
      minuteBoxHoverBgStylesMobile = _ref4$hoverBackground3 === void 0 ? "" : _ref4$hoverBackground3;

  var _ref5 = showSeconds ? generateBackgroundControlStyles({
    noTransition: true,
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.cdSecondBoxBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }) : {},
      _ref5$backgroundStyle = _ref5.backgroundStylesDesktop,
      secondBoxBgStylesDesktop = _ref5$backgroundStyle === void 0 ? "" : _ref5$backgroundStyle,
      _ref5$hoverBackground = _ref5.hoverBackgroundStylesDesktop,
      secondBoxHoverBgStylesDesktop = _ref5$hoverBackground === void 0 ? "" : _ref5$hoverBackground,
      _ref5$backgroundStyle2 = _ref5.backgroundStylesTab,
      secondBoxBgStylesTab = _ref5$backgroundStyle2 === void 0 ? "" : _ref5$backgroundStyle2,
      _ref5$hoverBackground2 = _ref5.hoverBackgroundStylesTab,
      secondBoxHoverBgStylesTab = _ref5$hoverBackground2 === void 0 ? "" : _ref5$hoverBackground2,
      _ref5$backgroundStyle3 = _ref5.backgroundStylesMobile,
      secondBoxBgStylesMobile = _ref5$backgroundStyle3 === void 0 ? "" : _ref5$backgroundStyle3,
      _ref5$hoverBackground3 = _ref5.hoverBackgroundStylesMobile,
      secondBoxHoverBgStylesMobile = _ref5$hoverBackground3 === void 0 ? "" : _ref5$hoverBackground3; // styles related to generateBackgroundControlStyles end
  // styles related to generateDimensionsControlStyles start ⬇


  var _generateDimensionsCo = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.cdWrapMarginConst,
    styleFor: "margin"
  }),
      wrpMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrpMarginTab = _generateDimensionsCo.dimensionStylesTab,
      wrpMarginMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.cdWrapPaddingConst,
    styleFor: "padding"
  }),
      wrpPaddingDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrpPaddingTab = _generateDimensionsCo2.dimensionStylesTab,
      wrpPaddingMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.cdBoxsPaddingConst,
    styleFor: "padding"
  }),
      boxsPaddingDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      boxsPaddingTab = _generateDimensionsCo3.dimensionStylesTab,
      boxsPaddingMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.cdDigitsPaddingConst,
    styleFor: "padding"
  }),
      digitsPaddingDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      digitsPaddingTab = _generateDimensionsCo4.dimensionStylesTab,
      digitsPaddingMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.cdLabelsPaddingConst,
    styleFor: "padding"
  }),
      labelsPaddingDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      labelsPaddingTab = _generateDimensionsCo5.dimensionStylesTab,
      labelsPaddingMobile = _generateDimensionsCo5.dimensionStylesMobile; // styles related to generateDimensionsControlStyles end
  // styles related to generateBorderShadowStyles start ⬇


  var _generateBorderShadow = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.WrpBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      wrpBdShdStyesDesktop = _generateBorderShadow.styesDesktop,
      wrpBdShdStyesTab = _generateBorderShadow.styesTab,
      wrpBdShdStyesMobile = _generateBorderShadow.styesMobile,
      wrpBdShdStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      wrpBdShdStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      wrpBdShdStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
      wrpBdShdTransitionStyle = _generateBorderShadow.transitionStyle;

  var _generateBorderShadow2 = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.cdBoxsBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      boxsbdShadowStyesDesktop = _generateBorderShadow2.styesDesktop,
      boxsbdShadowStyesTab = _generateBorderShadow2.styesTab,
      boxsbdShadowStyesMobile = _generateBorderShadow2.styesMobile,
      boxsbdShadowStylesHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
      boxsbdShadowStylesHoverTab = _generateBorderShadow2.stylesHoverTab,
      boxsbdShadowStylesHoverMobile = _generateBorderShadow2.stylesHoverMobile,
      boxsbdShadowTransitionStyle = _generateBorderShadow2.transitionStyle; // styles related to generateBorderShadowStyles end


  var wrapperStylesDesktop = "\n\t\t.".concat(blockId, ".eb-cd-wrapper{\n\t\t\t").concat(wrapWidthDesktop, "\n\t\t\t").concat(wrpMarginDesktop, "\n\t\t\t").concat(wrpPaddingDesktop, "\n\t\t\t").concat(wrpBackgroundStylesDesktop, "\n\t\t\t").concat(wrpBdShdStyesDesktop, "\n\t\t\ttransition: ").concat(wrpBgTransitionStyle, ", ").concat(wrpBdShdTransitionStyle, ";\n\t\t}\n\t\t\n\t\tdiv.").concat(blockId, ".eb-cd-wrapper{\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover{\t\t\t\n\t\t\t").concat(wrpHoverBackgroundStylesDesktop, "\n\t\t\t").concat(wrpBdShdStylesHoverDesktop, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:before{\t\t\t\n\t\t\t").concat(wrpOverlayStylesDesktop, "\n\t\t\ttransition: ").concat(wrpOvlTransitionStyle, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover:before{\t\t\t\n\t\t\t").concat(wrpHoverOverlayStylesDesktop, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner {\n\t\t\tflex-direction: ").concat(flexDirection, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box {\n\t\t\t").concat(boxsBackgroundStylesDesktop, "\n\t\t\ttransition: ").concat(boxsBgTransitionStyle, ", ").concat(boxsbdShadowTransitionStyle, ";\n\t\t\t").concat(boxsPaddingDesktop, "\n\t\t\t").concat(boxsbdShadowStyesDesktop, "\n\t\t\t").concat(contentsDirection.includes("row") ? "justify-content: ".concat(contentsJustify, ";") : " ", "\n\t\t\tflex-direction: ").concat(contentsDirection, ";\n\t\t\talign-items: ").concat(contentsAlign, ";\n\t\t}\n\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box:hover{\n\t\t\t").concat(boxsHoverBackgroundStylesDesktop, "\n\t\t\t").concat(boxsbdShadowStylesHoverDesktop, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {\n\t\t\t").concat(digitsTypoStylesDesktop, "\n\t\t\t").concat(digitsPaddingDesktop, "\n\t\t\tcolor: ").concat(digitsColor, ";\n\t\t}\n\t\t\n\t\t").concat(showSeparator && flexDirection === "row" ? "\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box:before {\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 90%;\n\t\t\t\tcontent: \"").concat(separatorType, "\";\n\t\t\t\tcolor: ").concat(separatorColor, ";\n\t\t\t\t").concat(SeparatorTopDesktop, "\n\t\t\t\t").concat(SeparatorRightDesktop, "\n\t\t\t\t").concat(separatorTypoStylesDesktop, "\n\t\t\t}\n\n\t\t\tdiv.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box:before{\n\t\t\t\tline-height:0;\n\t\t\t}\n\t\t\t") : " ", "\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {\n\t\t\t").concat(labelsTypoStylesDesktop, "\n\t\t\t").concat(labelsPaddingDesktop, "\n\t\t\tcolor: ").concat(labelsColor, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box {\n\t\t\tmargin: 0;\n\t\t\t").concat(BoxsSpaceBetweenDesktop, "\n\t\t}\n\n\t\t").concat(showDays ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day{\n\t\t\t\t").concat(dayBoxBgStylesDesktop, "\n\t\t\t\t").concat(boxsBds_borderStyle !== "none" && dayBdrColor ? "border-color: ".concat(dayBdrColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{\n\t\t\t\t").concat(dayBoxHoverBgStylesDesktop, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-label{\n\t\t\t\t").concat(dayLbColor ? "color: ".concat(dayLbColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-digit{\n\t\t\t\t").concat(dayDgColor ? "color: ".concat(dayDgColor, ";") : " ", "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showHours ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{\n\t\t\t\t").concat(hourBoxBgStylesDesktop, "\n\t\t\t\t").concat(boxsBds_borderStyle !== "none" && hourBdrColor ? "border-color: ".concat(hourBdrColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{\n\t\t\t\t").concat(hourBoxHoverBgStylesDesktop, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-label{\n\t\t\t\t").concat(hourLbColor ? "color: ".concat(hourLbColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-digit{\n\t\t\t\t").concat(hourDgColor ? "color: ".concat(hourDgColor, ";") : " ", "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showMinutes ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{\n\t\t\t\t").concat(minuteBoxBgStylesDesktop, "\n\t\t\t\t").concat(boxsBds_borderStyle !== "none" && minuteBdrColor ? "border-color: ".concat(minuteBdrColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{\n\t\t\t\t").concat(minuteBoxHoverBgStylesDesktop, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-label{\n\t\t\t\t").concat(minuteLbColor ? "color: ".concat(minuteLbColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-digit{\n\t\t\t\t").concat(minuteDgColor ? "color: ".concat(minuteDgColor, ";") : " ", "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showSeconds ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second{\n\t\t\t\t").concat(secondBoxBgStylesDesktop, "\n\t\t\t\t").concat(boxsBds_borderStyle !== "none" && secondBdrColor ? "border-color: ".concat(secondBdrColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{\n\t\t\t\t").concat(secondBoxHoverBgStylesDesktop, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-label{\n\t\t\t\t").concat(secondLbColor ? "color: ".concat(secondLbColor, ";") : " ", "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-digit{\n\t\t\t\t").concat(secondDgColor ? "color: ".concat(secondDgColor, ";") : " ", "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t");
  var wrapperStylesTab = "\n\t\t.".concat(blockId, ".eb-cd-wrapper{\n\t\t\t").concat(wrapWidthTab, "\n\t\t\t").concat(wrpMarginTab, "\n\t\t\t").concat(wrpPaddingTab, "\n\t\t\t").concat(wrpBackgroundStylesTab, "\n\t\t\t").concat(wrpBdShdStyesTab, "\n\t\t}\t\t\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover{\t\t\t\n\t\t\t").concat(wrpHoverBackgroundStylesTab, "\n\t\t\t").concat(wrpBdShdStylesHoverTab, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:before{\t\t\t\n\t\t\t").concat(wrpOverlayStylesTab, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover:before{\t\t\t\n\t\t\t").concat(wrpHoverOverlayStylesTab, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box {\n\t\t\t").concat(boxsBackgroundStylesTab, "\n\t\t\t").concat(boxsPaddingTab, "\n\t\t\t").concat(boxsbdShadowStyesTab, "\n\t\t}\n\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box:hover{\n\t\t\t").concat(boxsHoverBackgroundStylesTab, "\n\t\t\t").concat(boxsbdShadowStylesHoverTab, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {\n\t\t\t").concat(digitsTypoStylesTab, "\n\t\t\t").concat(digitsPaddingTab, "\n\t\t}\n\n\t\t").concat(showSeparator && flexDirection === "row" ? "\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box:before {\n\t\t\t\t").concat(separatorTypoStylesTab, "\n\t\t\t\t").concat(SeparatorTopTab, "\n\t\t\t\t").concat(SeparatorRightTab, "\n\t\t\t}\n\t\t\t") : " ", "\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {\n\t\t\t").concat(labelsTypoStylesTab, "\n\t\t\t").concat(labelsPaddingTab, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box {\n\t\t\t").concat(BoxsSpaceBetweenTab, "\n\t\t}\n\t\t\n\t\t").concat(showDays ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day{\n\t\t\t\t").concat(dayBoxBgStylesTab, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{\n\t\t\t\t").concat(dayBoxHoverBgStylesTab, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showHours ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{\n\t\t\t\t").concat(hourBoxBgStylesTab, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{\n\t\t\t\t").concat(hourBoxHoverBgStylesTab, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showMinutes ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{\n\t\t\t\t").concat(minuteBoxBgStylesTab, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{\n\t\t\t\t").concat(minuteBoxHoverBgStylesTab, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showSeconds ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second{\n\t\t\t\t").concat(secondBoxBgStylesTab, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{\n\t\t\t\t").concat(secondBoxHoverBgStylesTab, "\n\t\t\t} \n\n\t\t\t") : " ", "\n\n\t");
  var wrapperStylesMobile = "\n\t\t.".concat(blockId, ".eb-cd-wrapper{\n\t\t\t").concat(wrapWidthMobile, "\n\t\t\t").concat(wrpBackgroundStylesMobile, "\n\t\t\t").concat(wrpMarginMobile, "\n\t\t\t").concat(wrpPaddingMobile, "\n\t\t\t").concat(wrpBdShdStyesMobile, "\n\t\t}\t\t\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover{\t\t\t\n\t\t\t").concat(wrpHoverBackgroundStylesMobile, "\n\t\t\t").concat(wrpBdShdStylesHoverMobile, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:before{\t\t\t\n\t\t\t").concat(wrpOverlayStylesMobile, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper:hover:before{\t\t\t\n\t\t\t").concat(wrpHoverOverlayStylesMobile, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box {\n\t\t\t").concat(boxsBackgroundStylesMobile, "\n\t\t\t").concat(boxsPaddingMobile, "\n\t\t\t").concat(boxsbdShadowStyesMobile, "\n\t\t}\n\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box:hover{\n\t\t\t").concat(boxsHoverBackgroundStylesMobile, "\n\t\t\t").concat(boxsbdShadowStylesHoverMobile, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {\n\t\t\t").concat(digitsTypoStylesMobile, "\n\t\t\t").concat(digitsPaddingMobile, "\n\t\t}\n\n\t\t").concat(showSeparator && flexDirection === "row" ? "\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box:before {\n\t\t\t\t").concat(separatorTypoStylesMobile, "\n\t\t\t\t").concat(SeparatorTopMobile, "\n\t\t\t\t").concat(SeparatorRightMobile, "\n\t\t\t}\n\t\t\t") : " ", "\n\t\t\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {\n\t\t\t").concat(labelsTypoStylesMobile, "\n\t\t\t").concat(labelsPaddingMobile, "\n\t\t}\n\n\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box + .box {\n\t\t\t").concat(BoxsSpaceBetweenMobile, "\n\t\t}\n\t\t\t\n\t\t").concat(showDays ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day{\n\t\t\t\t").concat(dayBoxBgStylesMobile, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{\n\t\t\t\t").concat(dayBoxHoverBgStylesMobile, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showHours ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{\n\t\t\t\t").concat(hourBoxBgStylesMobile, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{\n\t\t\t\t").concat(hourBoxHoverBgStylesMobile, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showMinutes ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{\n\t\t\t\t").concat(minuteBoxBgStylesMobile, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{\n\t\t\t\t").concat(minuteBoxHoverBgStylesMobile, "\n\t\t\t} \n\t\t\t") : " ", "\n\n\t\t").concat(showSeconds ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second{\n\t\t\t\t").concat(secondBoxBgStylesMobile, "\n\t\t\t} \n\n\t\t\t.").concat(blockId, ".eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{\n\t\t\t\t").concat(secondBoxHoverBgStylesMobile, "\n\t\t\t} \n\n\t\t\t") : " ", "\n\n\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = softMinifyCssStrings("\t\t\n\t\t".concat(wrapperStylesDesktop, "\n\n\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\n\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\n\n\t")); //
  // styling codes End here
  //
  // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }),
  /*#__PURE__*/
  // Edit view
  React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-cd-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-cd-inner"
  }, showDays ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-day"
  }, /*#__PURE__*/React.createElement("span", {
    ref: daysRef,
    className: "eb-cd-digit"
  }, "00"), daysLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, daysLabel) : null) : null, showHours ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-hour"
  }, /*#__PURE__*/React.createElement("span", {
    ref: hoursRef,
    className: "eb-cd-digit"
  }, "00"), hoursLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, hoursLabel) : null) : null, showMinutes ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-minute"
  }, /*#__PURE__*/React.createElement("span", {
    ref: minutesRef,
    className: "eb-cd-digit"
  }, "00"), minutesLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, minutesLabel) : null) : null, showSeconds ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-second"
  }, /*#__PURE__*/React.createElement("span", {
    ref: secondsRef,
    className: "eb-cd-digit"
  }, "00"), secondsLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, secondsLabel) : null) : null)))];
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    endTimeStamp: Date.now() + 462878000
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownIcon": function() { return /* binding */ CountdownIcon; }
/* harmony export */ });
var CountdownIcon = function CountdownIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-countdown",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "33",
    x2: "30",
    y2: "38.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "36",
    r: "4",
    fill: "url(#SVGID_1__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "5.5",
    x2: "30",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M30,18c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,18,30,18z M45.949,37 c-0.228,3.658-1.683,6.98-3.968,9.567l-1.375-1.375l-1.414,1.414l1.375,1.375c-2.587,2.285-5.91,3.74-9.568,3.968V50h-2v1.949 c-3.658-0.228-6.981-1.683-9.568-3.968l1.375-1.375l-1.414-1.414l-1.375,1.375c-2.284-2.587-3.74-5.91-3.968-9.567H16v-2h-1.949 c0.228-3.658,1.683-6.98,3.968-9.567l1.375,1.375l1.414-1.414l-1.375-1.375c2.587-2.285,5.91-3.74,9.568-3.968V22h2v-1.949 c3.658,0.228,6.981,1.683,9.568,3.968l-1.375,1.375l1.414,1.414l1.375-1.375c2.284,2.587,3.74,5.91,3.968,9.567H44v2H45.949z",
    fill: "url(#SVGID_2__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31,31.101V27h-2v4.101c-2.279,0.465-4,2.484-4,4.899c0,2.757,2.243,5,5,5 c2.415,0,4.434-1.721,4.899-4H39v-2h-4.101C34.5,33.044,32.956,31.5,31,31.101z M30,39c-1.654,0-3-1.346-3-3s1.346-3,3-3 s3,1.346,3,3S31.654,39,30,39z",
    fill: "url(#SVGID_3__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54,33h-2.21C50.366,22.607,41.661,14.505,31,14.025v-0.167c1.72-0.447,3-1.999,3-3.858 c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.859,1.28,3.411,3,3.858v0.167C17.332,14.55,8,24.205,8,36c0,12.131,9.869,22,22,22 c11.113,0,20.322-8.284,21.79-19H54c1.103,0,2-0.897,2-2v-2C56,33.897,55.103,33,54,33z M28,10c0-1.103,0.897-2,2-2s2,0.897,2,2 s-0.897,2-2,2S28,11.103,28,10z M30,56c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S41.028,56,30,56z M54,37h-2.025 C51.99,36.668,52,36.335,52,36s-0.01-0.668-0.025-1H54V37z",
    fill: "url(#SVGID_4__43666)"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block.json */ "./block.json");
/**
 * WordPress depencencies
 */

/**
 * Internal dependencies
 */








var _EBCountdownControls = EBCountdownControls,
    ebConditionalRegisterBlockType = _EBCountdownControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__.CountdownIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("countdown", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb counter", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb countdown", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _singleBoxControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singleBoxControl */ "./src/singleBoxControl.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

 // import TypographyDropdown from "../../../util/typography-control-v2";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import ColorControl from "../../../util/color-control";
// import ResetControl from "../../../util/reset-control";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import BackgroundControl from "../../../util/background-control";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";
//

var _window$EBCountdownCo = window.EBCountdownControls,
    TypographyDropdown = _window$EBCountdownCo.TypographyDropdown,
    ResponsiveDimensionsControl = _window$EBCountdownCo.ResponsiveDimensionsControl,
    ResponsiveRangeController = _window$EBCountdownCo.ResponsiveRangeController,
    ColorControl = _window$EBCountdownCo.ColorControl,
    BorderShadowControl = _window$EBCountdownCo.BorderShadowControl,
    BackgroundControl = _window$EBCountdownCo.BackgroundControl;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";







var defaultPresetAttrsObj = {
  boxsBds_Bdr_Bottom: "1",
  boxsBds_Bdr_Left: "1",
  boxsBds_Bdr_Right: "1",
  boxsBds_Bdr_Top: "1",
  boxsBds_borderStyle: "none",
  boxsP_Bottom: "20",
  boxsP_Top: "20",
  boxsBds_Rds_Bottom: "10",
  boxsBds_Rds_Left: "10",
  boxsBds_Rds_Right: "10",
  boxsBds_Rds_Top: "10",
  boxsBds_Rds_Unit: "px",
  boxsBg_backgroundType: "gradient",
  contentsDirection: "column",
  contentsAlign: "center",
  flexDirection: "row",
  separatorType: ":",
  sepRight_Range: 18,
  lblPad_isLinked: true,
  showSeparator: false,
  boxsBg_backgroundColor: undefined,
  dayDgColor: undefined,
  dayBdrColor: undefined,
  dg_FontSize: undefined,
  dg_LineHeight: undefined,
  digitsColor: undefined,
  hourBdrColor: undefined,
  hourDgColor: undefined,
  labelsColor: undefined,
  lb_FontSize: undefined,
  lb_FontWeight: undefined,
  lb_TextTransform: undefined,
  minuteBdrColor: undefined,
  minuteDgColor: undefined,
  secondDgColor: undefined,
  separatorColor: undefined,
  secondBdrColor: undefined,
  WrpBg_backgroundColor: undefined,
  wrpBdSd_Rds_Bottom: undefined,
  wrpBdSd_Rds_Left: undefined,
  wrpBdSd_Rds_Right: undefined,
  wrpBdSd_Rds_Top: undefined,
  wrpBdSd_blur: undefined,
  wrpBdSd_hOffset: undefined,
  wrpBdSd_shadowColor: undefined,
  wrpBdSd_vOffset: undefined,
  dayBg_backgroundColor: undefined,
  hourBg_backgroundColor: undefined,
  lb_LineHeight: undefined,
  lblPad_Left: undefined,
  lblPad_Top: undefined,
  minuteBg_backgroundColor: undefined,
  secondBg_backgroundColor: undefined,
  sp_FontSize: undefined,
  sp_FontWeight: undefined,
  lblPad_Bottom: undefined
};

function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
      blockId = attributes.blockId,
      blockRoot = attributes.blockRoot,
      blockMeta = attributes.blockMeta,
      endTimeStamp = attributes.endTimeStamp,
      showDays = attributes.showDays,
      showHours = attributes.showHours,
      showMinutes = attributes.showMinutes,
      showSeconds = attributes.showSeconds,
      daysLabel = attributes.daysLabel,
      hoursLabel = attributes.hoursLabel,
      minutesLabel = attributes.minutesLabel,
      secondsLabel = attributes.secondsLabel,
      preset = attributes.preset,
      flexDirection = attributes.flexDirection,
      showSeparator = attributes.showSeparator,
      separatorType = attributes.separatorType,
      separatorColor = attributes.separatorColor,
      contentsAlign = attributes.contentsAlign,
      contentsDirection = attributes.contentsDirection,
      contentsJustify = attributes.contentsJustify,
      digitsColor = attributes.digitsColor,
      labelsColor = attributes.labelsColor; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // // this useEffect is for mimmiking css for all the eb blocks on resOption changing
  // useEffect(() => {
  // 	mimmikCssForResBtns({
  // 		domObj: document,
  // 		resOption,
  // 	});
  // }, [resOption]);
  // // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
  // useEffect(() => {
  // 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
  // 		domObj: document,
  // 		select,
  // 		setAttributes,
  // 	});
  // 	return () => {
  // 		cleanUp();
  // 	};
  // }, []);

  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };

  var handleDateChange = function handleDateChange(newDate) {
    var endTimeStamp = new Date(newDate).getTime();
    setAttributes({
      endTimeStamp: endTimeStamp
    });
  };

  var handlePresetChange = function handlePresetChange(preset) {
    switch (preset) {
      case "default":
        setAttributes(_objectSpread({}, defaultPresetAttrsObj));
        break;

      case "preset1":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          boxsBds_Rds_Bottom: "50",
          boxsBds_Rds_Left: "50",
          boxsBds_Rds_Right: "50",
          boxsBds_Rds_Top: "50",
          boxsBds_Rds_Unit: "%",
          boxsBg_backgroundColor: "rgba(255,255,255,0.5)",
          boxsBg_backgroundType: "classic",
          dg_FontSize: 60,
          dg_LineHeight: 1,
          digitsColor: "rgba(16,253,244,1)",
          labelsColor: "rgba(0,0,0,0.5)"
        }));
        break;

      case "preset2":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          boxsBds_Bdr_Bottom: "2",
          boxsBds_Bdr_Left: "2",
          boxsBds_Bdr_Right: "2",
          boxsBds_Bdr_Top: "2",
          boxsBds_borderStyle: "solid",
          boxsBg_backgroundColor: "rgba(255,255,255,1)",
          boxsBg_backgroundType: "classic",
          boxsP_Bottom: "12",
          boxsP_Top: "12",
          dayBdrColor: "rgba(0,194,232,1)",
          dg_FontSize: 64,
          dg_LineHeight: 1.1,
          digitsColor: "rgba(75,75,75,1)",
          hourBdrColor: "rgba(255,107,211,1)",
          labelsColor: "rgba(75,75,75,1)",
          lb_FontSize: 21,
          lb_TextTransform: "uppercase",
          minuteBdrColor: "rgba(153,102,13,1)",
          sepRight_Range: 20,
          secondBdrColor: "rgba(0,91,255,1)"
        }));
        break;

      case "preset3":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          WrpBg_backgroundColor: "rgba(255,255,255,1)",
          boxsBg_backgroundType: "classic",
          dayDgColor: "rgba(52,219,213,1)",
          dg_FontSize: 62,
          dg_LineHeight: 1.1,
          hourDgColor: "rgba(138,65,255,1)",
          labelsColor: "rgba(77,77,77,1)",
          lb_FontSize: 16,
          lb_FontWeight: "500",
          lb_TextTransform: "uppercase",
          minuteDgColor: "rgba(1,206,135,1)",
          secondDgColor: "rgba(252,105,125,1)",
          separatorColor: "rgba(91,91,91,1)",
          showSeparator: true,
          wrpBdSd_Rds_Bottom: "10",
          wrpBdSd_Rds_Left: "10",
          wrpBdSd_Rds_Right: "10",
          wrpBdSd_Rds_Top: "10",
          wrpBdSd_blur: 20,
          wrpBdSd_hOffset: 11,
          wrpBdSd_shadowColor: "rgba(155,155,155,1)",
          wrpBdSd_vOffset: 12
        }));
        break;

      case "preset4":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          boxsBg_backgroundType: "classic",
          boxsP_Bottom: "27",
          contentsDirection: "row",
          dayBg_backgroundColor: "rgba(253,121,139,1)",
          dg_FontSize: 64,
          dg_LineHeight: 1,
          hourBg_backgroundColor: "rgba(23,229,157,1)",
          flexDirection: "column",
          labelsColor: "rgba(238,238,238,1)",
          lb_FontSize: 20,
          lb_FontWeight: "500",
          lb_LineHeight: 0,
          lb_TextTransform: "uppercase",
          lblPad_Left: "10",
          lblPad_Top: "35",
          lblPad_isLinked: false,
          minuteBg_backgroundColor: "rgba(124,117,255,1)",
          secondBg_backgroundColor: "rgba(75,230,224,1)"
        }));
        break;

      case "preset5":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          WrpBg_backgroundColor: "rgba(40,70,175,1)",
          boxsBg_backgroundType: "classic",
          dg_FontSize: 70,
          dg_LineHeight: 1,
          digitsColor: "rgba(255,255,255,0.8)",
          lb_FontSize: 19,
          lb_FontWeight: "100",
          lb_TextTransform: "uppercase",
          lblPad_Top: "5",
          lblPad_isLinked: false,
          separatorColor: "rgba(255,255,255,0.71)",
          separatorType: "|",
          showSeparator: true,
          sp_FontSize: 90,
          sp_FontWeight: "100"
        }));
        break;

      case "preset6":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          boxsBg_backgroundColor: "rgba(107,99,255,1)",
          boxsBg_backgroundType: "classic",
          boxsP_Bottom: "10",
          boxsP_Top: "10",
          contentsAlign: "flex-end",
          contentsDirection: "row",
          dg_FontSize: 37,
          lb_FontSize: 12,
          lb_LineHeight: 1,
          lb_TextTransform: "uppercase",
          lblPad_Bottom: "20",
          lblPad_Left: "5",
          lblPad_isLinked: false
        }));
        break;

      case "preset7":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          boxsBds_Bdr_Bottom: "10",
          boxsBds_Bdr_Left: "10",
          boxsBds_Bdr_Right: "10",
          boxsBds_Bdr_Top: "10",
          boxsBds_Rds_Bottom: "50",
          boxsBds_Rds_Left: "50",
          boxsBds_Rds_Right: "50",
          boxsBds_Rds_Top: "50",
          boxsBds_Rds_Unit: "%",
          boxsBds_borderStyle: "solid",
          boxsBg_backgroundType: "classic",
          boxsP_Bottom: "16",
          boxsP_Top: "16",
          dg_FontSize: 46,
          dg_LineHeight: 1,
          digitsColor: "rgba(0,0,0,0.5)",
          labelsColor: "rgba(0,0,0,0.5)",
          lb_FontWeight: "600",
          sepRight_Range: 29
        }));
        break;
    }

    setAttributes({
      preset: preset
    });
  };

  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Countdown Settings", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Design Preset", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl // label={__("Design Preset", "essential-blocks")}
    , {
      value: preset,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.STYLE_PRESETS // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: handlePresetChange
    })), /*#__PURE__*/React.createElement("style", null, ".customDatePickerStyle .components-datetime__timezone{display:none;}"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Countdown Due Date", "essential-blocks"),
      className: "customDatePickerStyle"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DateTimePicker, {
      currentDate: endTimeStamp ? new Date(endTimeStamp) : new Date(),
      onChange: function onChange(newDate) {
        return handleDateChange(newDate);
      },
      is12Hour: true
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Days", "essential-blocks"),
      checked: showDays,
      onChange: function onChange() {
        return setAttributes({
          showDays: !showDays
        });
      }
    }), showDays && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Label For Days", "essential-blocks"),
      value: daysLabel,
      type: "text",
      onChange: function onChange(daysLabel) {
        return setAttributes({
          daysLabel: daysLabel
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "-5px"
      }
    }, /*#__PURE__*/React.createElement("i", null, "Leave blank to hide"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Hours", "essential-blocks"),
      checked: showHours,
      onChange: function onChange() {
        return setAttributes({
          showHours: !showHours
        });
      }
    }), showHours && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Label For Hours", "essential-blocks"),
      value: hoursLabel,
      type: "text",
      onChange: function onChange(hoursLabel) {
        return setAttributes({
          hoursLabel: hoursLabel
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "-5px"
      }
    }, /*#__PURE__*/React.createElement("i", null, "Leave blank to hide"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Minutes", "essential-blocks"),
      checked: showMinutes,
      onChange: function onChange() {
        return setAttributes({
          showMinutes: !showMinutes
        });
      }
    }), showMinutes && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Label For Minutes", "essential-blocks"),
      value: minutesLabel,
      type: "text",
      onChange: function onChange(minutesLabel) {
        return setAttributes({
          minutesLabel: minutesLabel
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "-5px"
      }
    }, /*#__PURE__*/React.createElement("i", null, "Leave blank to hide"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Seconds", "essential-blocks"),
      checked: showSeconds,
      onChange: function onChange() {
        return setAttributes({
          showSeconds: !showSeconds
        });
      }
    }), showSeconds && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Label For Seconds", "essential-blocks"),
      value: secondsLabel,
      type: "text",
      onChange: function onChange(secondsLabel) {
        return setAttributes({
          secondsLabel: secondsLabel
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "-5px"
      }
    }, /*#__PURE__*/React.createElement("i", null, "Leave blank to hide"))))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Boxs Styles", "essential-blocks") //  initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: "Layout"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_12__.LAYOUT_TYPES.map(function (_ref2) {
      var value = _ref2.value,
          label = _ref2.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button // isLarge
      , {
        isSecondary: flexDirection !== value,
        isPrimary: flexDirection === value,
        onClick: function onClick() {
          return setAttributes({
            flexDirection: value
          });
        }
      }, label);
    }))), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Max Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.wrapperWidth,
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 2000,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space Between Boxs", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.boxsSpaceConst,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 200,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contents Direction", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: contentsDirection,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.FLEX_DIRECTIONS,
      onChange: function onChange(contentsDirection) {
        return setAttributes({
          contentsDirection: contentsDirection
        });
      }
    })), contentsDirection.includes("row") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contents Justify Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: contentsJustify,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.JUSTIFY_CONTENTS,
      onChange: function onChange(contentsJustify) {
        return setAttributes({
          contentsJustify: contentsJustify
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contents Alignment", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_12__.ALIGN_ITEMS.map(function (_ref3) {
      var value = _ref3.value,
          label = _ref3.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button // isLarge
      , {
        isSecondary: contentsAlign !== value,
        isPrimary: contentsAlign === value,
        onClick: function onClick() {
          return setAttributes({
            contentsAlign: value
          });
        }
      }, label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.cdBoxsBgConst,
      resRequiredProps: resRequiredProps,
      noOverlay: true,
      noMainBgi: true // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'

    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.cdBoxsPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.cdBoxsBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digits", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: digitsColor,
      onChange: function onChange(digitsColor) {
        return setAttributes({
          digitsColor: digitsColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_digits,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.cdDigitsPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Labels", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: labelsColor,
      onChange: function onChange(labelsColor) {
        return setAttributes({
          labelsColor: labelsColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_labels,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.cdLabelsPaddingConst,
      baseLabel: "Padding"
    })), flexDirection === "row" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Separator", "essential-blocks"),
      checked: showSeparator,
      onChange: function onChange() {
        return setAttributes({
          showSeparator: !showSeparator
        });
      }
    }), showSeparator && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Type", "essential-blocks"),
      value: separatorType,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.SEPARATOR_TYPES,
      onChange: function onChange(separatorType) {
        return setAttributes({
          separatorType: separatorType
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position Top", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.separatorPosTop,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 900,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position Right", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.separatorPosRight,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 900,
      step: 1
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: separatorColor,
      onChange: function onChange(separatorColor) {
        return setAttributes({
          separatorColor: separatorColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_separator,
      resRequiredProps: resRequiredProps
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Individual Box Styling", "essential-blocks"),
      initialOpen: false
    }, showDays && /*#__PURE__*/React.createElement(_singleBoxControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resRequiredProps: resRequiredProps,
      heading: "Days",
      bgControlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.cdDayBoxBgConst,
      dgColorAttrString: "dayDgColor",
      lbColorAttrString: "dayLbColor",
      bdColorAttrString: "dayBdrColor"
    }), showHours && /*#__PURE__*/React.createElement(_singleBoxControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resRequiredProps: resRequiredProps,
      heading: "Hours",
      bgControlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.cdHourBoxBgConst,
      dgColorAttrString: "hourDgColor",
      lbColorAttrString: "hourLbColor",
      bdColorAttrString: "hourBdrColor"
    }), showMinutes && /*#__PURE__*/React.createElement(_singleBoxControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resRequiredProps: resRequiredProps,
      heading: "Minutes",
      bgControlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.cdMinuteBoxBgConst,
      dgColorAttrString: "minuteDgColor",
      lbColorAttrString: "minuteLbColor",
      bdColorAttrString: "minuteBdrColor"
    }), showSeconds && /*#__PURE__*/React.createElement(_singleBoxControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resRequiredProps: resRequiredProps,
      heading: "Seconds",
      bgControlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.cdSecondBoxBgConst,
      dgColorAttrString: "secondDgColor",
      lbColorAttrString: "secondLbColor",
      bdColorAttrString: "secondBdrColor"
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.cdWrapMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.cdWrapPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.WrpBgConst,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.WrpBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      endTimeStamp = attributes.endTimeStamp,
      showDays = attributes.showDays,
      showHours = attributes.showHours,
      showMinutes = attributes.showMinutes,
      showSeconds = attributes.showSeconds,
      daysLabel = attributes.daysLabel,
      hoursLabel = attributes.hoursLabel,
      minutesLabel = attributes.minutesLabel,
      secondsLabel = attributes.secondsLabel;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-cd-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-cd-inner",
    "data-deadline-time": "".concat(endTimeStamp || 0)
  }, showDays ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-day"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-digit"
  }, "00"), daysLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, daysLabel) : null) : null, showHours ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-hour"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-digit"
  }, "00"), hoursLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, hoursLabel) : null) : null, showMinutes ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-minute"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-digit"
  }, "00"), minutesLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, minutesLabel) : null) : null, showSeconds ? /*#__PURE__*/React.createElement("div", {
    className: "box cd-box-second"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-digit"
  }, "00"), secondsLabel ? /*#__PURE__*/React.createElement("span", {
    className: "eb-cd-label"
  }, secondsLabel) : null) : null)));
}

/***/ }),

/***/ "./src/singleBoxControl.js":
/*!*********************************!*\
  !*** ./src/singleBoxControl.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ singleBoxControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _window$EBCountdownCo = window.EBCountdownControls,
    BackgroundControl = _window$EBCountdownCo.BackgroundControl,
    ColorControl = _window$EBCountdownCo.ColorControl;
function singleBoxControl(_ref) {
  var heading = _ref.heading,
      resRequiredProps = _ref.resRequiredProps,
      bgControlName = _ref.bgControlName,
      dgColorAttrString = _ref.dgColorAttrString,
      lbColorAttrString = _ref.lbColorAttrString,
      bdColorAttrString = _ref.bdColorAttrString;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "15px",
      color: "#444",
      margin: "0 0 10px 0"
    }
  }, heading), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks") // initialOpen={false}

  }, /*#__PURE__*/React.createElement(BackgroundControl, {
    noTransition: true,
    controlName: bgControlName,
    resRequiredProps: resRequiredProps,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'

  })), /*#__PURE__*/React.createElement(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digit Color", "essential-blocks"),
    color: attributes["".concat(dgColorAttrString)],
    onChange: function onChange(dgColor) {
      return setAttributes(_defineProperty({}, "".concat(dgColorAttrString), dgColor));
    }
  }), /*#__PURE__*/React.createElement(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label Color", "essential-blocks"),
    color: attributes["".concat(lbColorAttrString)],
    onChange: function onChange(lbColor) {
      return setAttributes(_defineProperty({}, "".concat(lbColorAttrString), lbColor));
    }
  }), attributes.boxsBds_borderStyle !== "none" && /*#__PURE__*/React.createElement(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "essential-blocks"),
    color: attributes["".concat(bdColorAttrString)],
    onChange: function onChange(bdColor) {
      return setAttributes(_defineProperty({}, "".concat(bdColorAttrString), bdColor));
    }
  }), /*#__PURE__*/React.createElement("hr", null));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"countdown-block/countdown","title":"Countdown","category":"widgets","apiVersion":2,"description":"Highlight Upcoming Events With Countdown Timer","textdomain":"countdown","supports":{"html":false,"align":["wide","full"]},"editorScript":"file:./dist/index.js"}');

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
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
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkcountdown"] = self["webpackChunkcountdown"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
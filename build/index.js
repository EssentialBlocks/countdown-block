(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-datetime/dist/react-datetime.cjs.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-datetime/dist/react-datetime.cjs.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=__webpack_require__(/*! react */ "react")},function(e,t){e.exports=__webpack_require__(/*! moment */ "moment")},function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=__webpack_require__(/*! react-dom */ "react-dom")},function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(1),i=n.n(a),s=n(0),c=n.n(s);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.onClickPrev,n=e.onClickSwitch,r=e.onClickNext,o=e.switchContent,a=e.switchColSpan,i=e.switchProps;return c.a.createElement("tr",null,c.a.createElement("th",{className:"rdtPrev",onClick:t},c.a.createElement("span",null,"‹")),c.a.createElement("th",u({className:"rdtSwitch",colSpan:a,onClick:n},i),o),c.a.createElement("th",{className:"rdtNext",onClick:r},c.a.createElement("span",null,"›")))}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,o=m(a);function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(v(e=o.call.apply(o,[this].concat(n))),"_setDate",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props.viewDate,t=e.localeData(),n=e.clone().startOf("month"),r=e.clone().endOf("month");return c.a.createElement("div",{className:"rdtDays"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation(e,t),this.renderDayHeaders(t)),c.a.createElement("tbody",null,this.renderDays(e,n,r)),this.renderFooter(e)))}},{key:"renderNavigation",value:function(e,t){var n=this;return c.a.createElement(l,{onClickPrev:function(){return n.props.navigate(-1,"months")},onClickSwitch:function(){return n.props.showView("months")},onClickNext:function(){return n.props.navigate(1,"months")},switchContent:t.months(e)+" "+e.year(),switchColSpan:5,switchProps:{"data-value":this.props.viewDate.month()}})}},{key:"renderDayHeaders",value:function(e){var t=this.getDaysOfWeek(e).map((function(e,t){return c.a.createElement("th",{key:e+t,className:"dow"},e)}));return c.a.createElement("tr",null,t)}},{key:"renderDays",value:function(e,t,n){var r=[[],[],[],[],[],[]],o=e.clone().subtract(1,"months");o.date(o.daysInMonth()).startOf("week");for(var a=o.clone().add(42,"d"),i=0;o.isBefore(a);)this.getRow(r,i++).push(this.renderDay(o,t,n)),o.add(1,"d");return r.map((function(e,t){return c.a.createElement("tr",{key:"".concat(a.month(),"_").concat(t)},e)}))}},{key:"renderDay",value:function(e,t,n){var r=this.props.selectedDate,o={key:e.format("M_D"),"data-value":e.date(),"data-month":e.month(),"data-year":e.year()},a="rdtDay";return e.isBefore(t)?a+=" rdtOld":e.isAfter(n)&&(a+=" rdtNew"),r&&e.isSame(r,"day")&&(a+=" rdtActive"),e.isSame(this.props.moment(),"day")&&(a+=" rdtToday"),this.props.isValidDate(e)?o.onClick=this._setDate:a+=" rdtDisabled",o.className=a,this.props.renderDay?this.props.renderDay(o,e.clone(),r&&r.clone()):c.a.createElement("td",o,e.date())}},{key:"renderFooter",value:function(e){var t=this;if(this.props.timeFormat)return c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",{onClick:function(){return t.props.showView("time")},colSpan:7,className:"rdtTimeToggle"},e.format(this.props.timeFormat))))}},{key:"getDaysOfWeek",value:function(e){var t=e.firstDayOfWeek(),n=[],r=0;return e._weekdaysMin.forEach((function(e){n[(7+r++-t)%7]=e})),n}},{key:"getRow",value:function(e,t){return e[Math.floor(t/7)]}}])&&d(t.prototype,n),r&&d(t,r),a}(c.a.Component);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}g(O,"defaultProps",{isValidDate:function(){return!0}});var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o=_(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return j(P(e=o.call.apply(o,[this].concat(n))),"_updateSelectedMonth",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"rdtMonths"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation())),c.a.createElement("table",null,c.a.createElement("tbody",null,this.renderMonths())))}},{key:"renderNavigation",value:function(){var e=this,t=this.props.viewDate.year();return c.a.createElement(l,{onClickPrev:function(){return e.props.navigate(-1,"years")},onClickSwitch:function(){return e.props.showView("years")},onClickNext:function(){return e.props.navigate(1,"years")},switchContent:t,switchColSpan:"2"})}},{key:"renderMonths",value:function(e){for(var t=[[],[],[]],n=0;n<12;n++)this.getRow(t,n).push(this.renderMonth(n,this.props.selectedDate));return t.map((function(e,t){return c.a.createElement("tr",{key:t},e)}))}},{key:"renderMonth",value:function(e,t){var n,r="rdtMonth";this.isDisabledMonth(e)?r+=" rdtDisabled":n=this._updateSelectedMonth,t&&t.year()===this.props.viewDate.year()&&t.month()===e&&(r+=" rdtActive");var o={key:e,className:r,"data-value":e,onClick:n};return this.props.renderMonth?this.props.renderMonth(o,e,this.props.viewDate.year(),this.props.selectedDate&&this.props.selectedDate.clone()):c.a.createElement("td",o,this.getMonthText(e))}},{key:"getRow",value:function(e,t){return t<4?e[0]:t<8?e[1]:e[2]}},{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"isDisabledMonth",value:function(e){var t=this.props.isValidDate;if(!t)return!1;for(var n=this.props.viewDate.clone().set({month:e}),r=n.endOf("month").date()+1;r-- >1;)if(t(n.date(r)))return!1;return!0}},{key:"getMonthText",value:function(e){var t=this.props.viewDate,n=t.localeData().monthsShort(t.month(e));return this.capitalize(n.substring(0,3))}}])&&D(t.prototype,n),r&&D(t,r),a}(c.a.Component);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,r,o=I(a);function a(){var e;N(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Y(M(e=o.call.apply(o,[this].concat(n))),"disabledYearsCache",{}),Y(M(e),"_updateSelectedYear",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=10*parseInt(this.props.viewDate.year()/10,10);return c.a.createElement("div",{className:"rdtYears"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation(e))),c.a.createElement("table",null,c.a.createElement("tbody",null,this.renderYears(e))))}},{key:"renderNavigation",value:function(e){var t=this;return c.a.createElement(l,{onClickPrev:function(){return t.props.navigate(-10,"years")},onClickSwitch:function(){return t.props.showView("years")},onClickNext:function(){return t.props.navigate(10,"years")},switchContent:"".concat(e,"-").concat(e+9)})}},{key:"renderYears",value:function(e){for(var t=[[],[],[]],n=this.props.selectedDate&&this.props.selectedDate.year(),r=e-1;r<e+11;r++)this.getRow(t,r-e).push(this.renderYear(r,n));return t.map((function(e,t){return c.a.createElement("tr",{key:t},e)}))}},{key:"renderYear",value:function(e,t){var n,r="rdtYear";this.isDisabledYear(e)?r+=" rdtDisabled":n=this._updateSelectedYear,t===e&&(r+=" rdtActive");var o={key:e,className:r,"data-value":e,onClick:n};return this.props.renderYear?this.props.renderYear(o,e,this.props.selectedDate&&this.props.selectedDate.clone()):c.a.createElement("td",o,e)}},{key:"getRow",value:function(e,t){return t<3?e[0]:t<7?e[1]:e[2]}},{key:"isDisabledYear",value:function(e){var t=this.disabledYearsCache;if(void 0!==t[e])return t[e];var n=this.props.isValidDate;if(!n)return!1;for(var r=this.props.viewDate.clone().set({year:e}),o=r.endOf("year").dayOfYear()+1;o-- >1;)if(n(r.dayOfYear(o)))return t[e]=!1,!1;return t[e]=!0,!0}}])&&x(t.prototype,n),r&&x(t,r),a}(c.a.Component);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return K(this,n)}}function K(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?q(e):t}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={hours:{min:0,max:23,step:1},minutes:{min:0,max:59,step:1},seconds:{min:0,max:59,step:1},milliseconds:{min:0,max:999,step:1}},Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o=z(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),X(q(t=o.call(this,e)),"padValues",{hours:1,minutes:2,seconds:2,milliseconds:3}),t.constraints=t.createConstraints(e),t.state=t.getTimeParts(e.selectedDate||e.viewDate),t}return t=a,(n=[{key:"createConstraints",value:function(e){var t={};return Object.keys(J).forEach((function(n){t[n]=Z(Z({},J[n]),e.timeConstraints[n]||{})})),t}},{key:"render",value:function(){var e=this,t=[],n=this.state;return this.getCounters().forEach((function(r,o){o&&"ampm"!==r&&t.push(c.a.createElement("div",{key:"sep".concat(o),className:"rdtCounterSeparator"},":")),t.push(e.renderCounter(r,n[r]))})),c.a.createElement("div",{className:"rdtTime"},c.a.createElement("table",null,this.renderHeader(),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("div",{className:"rdtCounters"},t))))))}},{key:"renderCounter",value:function(e,t){var n=this;return"hours"===e&&this.isAMPM()&&0==(t=(t-1)%12+1)&&(t=12),"ampm"===e&&(t=-1!==this.props.timeFormat.indexOf(" A")?this.props.viewDate.format("A"):this.props.viewDate.format("a")),c.a.createElement("div",{key:e,className:"rdtCounter"},c.a.createElement("span",{className:"rdtBtn",onMouseDown:function(t){return n.onStartClicking(t,"increase",e)}},"▲"),c.a.createElement("div",{className:"rdtCount"},t),c.a.createElement("span",{className:"rdtBtn",onMouseDown:function(t){return n.onStartClicking(t,"decrease",e)}},"▼"))}},{key:"renderHeader",value:function(){var e=this;if(this.props.dateFormat){var t=this.props.selectedDate||this.props.viewDate;return c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"rdtSwitch",colSpan:"4",onClick:function(){return e.props.showView("days")}},t.format(this.props.dateFormat))))}}},{key:"onStartClicking",value:function(e,t,n){var r=this;if(!e||!e.button||0===e.button){if("ampm"===n)return this.toggleDayPart();var o={},a=document.body;o[n]=this[t](n),this.setState(o),this.timer=setTimeout((function(){r.increaseTimer=setInterval((function(){o[n]=r[t](n),r.setState(o)}),70)}),500),this.mouseUpListener=function(){clearTimeout(r.timer),clearInterval(r.increaseTimer),r.props.setTime(n,parseInt(r.state[n],10)),a.removeEventListener("mouseup",r.mouseUpListener),a.removeEventListener("touchend",r.mouseUpListener)},a.addEventListener("mouseup",this.mouseUpListener),a.addEventListener("touchend",this.mouseUpListener)}}},{key:"toggleDayPart",value:function(){var e=parseInt(this.state.hours,10);e>=12?e-=12:e+=12,this.props.setTime("hours",e)}},{key:"increase",value:function(e){var t=this.constraints[e],n=parseInt(this.state[e],10)+t.step;return n>t.max&&(n=t.min+(n-(t.max+1))),this.pad(e,n)}},{key:"decrease",value:function(e){var t=this.constraints[e],n=parseInt(this.state[e],10)-t.step;return n<t.min&&(n=t.max+1-(t.min-n)),this.pad(e,n)}},{key:"pad",value:function(e,t){for(var n=t+"";n.length<this.padValues[e];)n="0"+n;return n}},{key:"getCounters",value:function(){var e=[],t=this.props.timeFormat;return-1!==t.toLowerCase().indexOf("h")&&(e.push("hours"),-1!==t.indexOf("m")&&(e.push("minutes"),-1!==t.indexOf("s")&&(e.push("seconds"),-1!==t.indexOf("S")&&e.push("milliseconds")))),this.isAMPM()&&e.push("ampm"),e}},{key:"isAMPM",value:function(){return-1!==this.props.timeFormat.toLowerCase().indexOf(" a")}},{key:"getTimeParts",value:function(e){var t=e.hours();return{hours:this.pad("hours",t),minutes:this.pad("minutes",e.minutes()),seconds:this.pad("seconds",e.seconds()),milliseconds:this.pad("milliseconds",e.milliseconds()),ampm:t<12?"am":"pm"}}},{key:"componentDidUpdate",value:function(e){this.props.selectedDate?this.props.selectedDate!==e.selectedDate&&this.setState(this.getTimeParts(this.props.selectedDate)):e.viewDate!==this.props.viewDate&&this.setState(this.getTimeParts(this.props.viewDate))}}])&&W(t.prototype,n),r&&W(t,r),a}(c.a.Component),$=n(3);function ee(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var te,ne,re=(void 0===te&&(te=0),function(){return++te}),oe={},ae={},ie=["touchstart","touchmove"];function se(e,t){var n=null;return-1!==ie.indexOf(t)&&ne&&(n={passive:!e.props.preventDefault}),n}var ce=function(e,t){var n,r,o=e.displayName||e.name||"Component";return r=n=function(n){var r,a;function i(e){var r;return(r=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof r.__clickOutsideHandlerProp){var t=r.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else r.__clickOutsideHandlerProp(e)},r.__getComponentNode=function(){var e=r.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():Object($.findDOMNode)(e)},r.enableOnClickOutside=function(){if("undefined"!=typeof document&&!ae[r._uid]){void 0===ne&&(ne=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}}()),ae[r._uid]=!0;var e=r.props.eventTypes;e.forEach||(e=[e]),oe[r._uid]=function(e){var t;null!==r.componentNode&&(r.props.preventDefault&&e.preventDefault(),r.props.stopPropagation&&e.stopPropagation(),r.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode;){if(ee(e,t,n))return!0;e=e.parentNode}return e}(e.target,r.componentNode,r.props.outsideClickIgnoreClass)===document&&r.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,oe[r._uid],se(r,e))}))}},r.disableOnClickOutside=function(){delete ae[r._uid];var e=oe[r._uid];if(e&&"undefined"!=typeof document){var t=r.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,se(r,t))})),delete oe[r._uid]}},r.getRef=function(e){return r.instanceRef=e},r._uid=re(),r}a=n,(r=i).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=i.prototype;return c.getInstance=function(){if(!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},c.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},c.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},c.componentWillUnmount=function(){this.disableOnClickOutside()},c.render=function(){var t=this.props,n=(t.excludeScrollbar,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["excludeScrollbar"]));return e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,Object(s.createElement)(e,n)},i}(s.Component),n.displayName="OnClickOutside("+o+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},r};function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t,n){return t&&de(e.prototype,t),n&&de(e,n),e}function me(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Oe(e);if(t){var o=Oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return be(this,n)}}function be(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?ge(e):t}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return je}));var ke="years",De="months",Ce="days",_e="time",Ee=o.a,Pe=function(){},Se=Ee.oneOfType([Ee.instanceOf(i.a),Ee.instanceOf(Date),Ee.string]),je=function(e){me(n,e);var t=ve(n);function n(e){var r;return fe(this,n),we(ge(r=t.call(this,e)),"_renderCalendar",(function(e){var t=r.props,n={viewDate:r.state.viewDate.clone(),selectedDate:r.getSelectedDate(),isValidDate:t.isValidDate,updateDate:r._updateDate,navigate:r._viewNavigate,moment:i.a,showView:r._showView};switch(e){case ke:return n.renderYear=t.renderYear,c.a.createElement(A,n);case De:return n.renderMonth=t.renderMonth,c.a.createElement(V,n);case Ce:return n.renderDay=t.renderDay,n.timeFormat=r.getFormat("time"),c.a.createElement(O,n);default:return n.dateFormat=r.getFormat("date"),n.timeFormat=r.getFormat("time"),n.timeConstraints=t.timeConstraints,n.setTime=r._setTime,c.a.createElement(Q,n)}})),we(ge(r),"_showView",(function(e,t){var n=(t||r.state.viewDate).clone(),o=r.props.onBeforeNavigate(e,r.state.currentView,n);o&&r.state.currentView!==o&&(r.props.onNavigate(o),r.setState({currentView:o}))})),we(ge(r),"viewToMethod",{days:"date",months:"month",years:"year"}),we(ge(r),"nextView",{days:"time",months:"days",years:"months"}),we(ge(r),"_updateDate",(function(e){var t=r.state.currentView,n=r.getUpdateOn(r.getFormat("date")),o=r.state.viewDate.clone();o[r.viewToMethod[t]](parseInt(e.target.getAttribute("data-value"),10)),"days"===t&&(o.month(parseInt(e.target.getAttribute("data-month"),10)),o.year(parseInt(e.target.getAttribute("data-year"),10)));var a={viewDate:o};t===n?(a.selectedDate=o.clone(),a.inputValue=o.format(r.getFormat("datetime")),void 0===r.props.open&&r.props.input&&r.props.closeOnSelect&&r._closeCalendar(),r.props.onChange(o.clone())):r._showView(r.nextView[t],o),r.setState(a)})),we(ge(r),"_viewNavigate",(function(e,t){var n=r.state.viewDate.clone();n.add(e,t),e>0?r.props.onNavigateForward(e,t):r.props.onNavigateBack(-e,t),r.setState({viewDate:n})})),we(ge(r),"_setTime",(function(e,t){var n=(r.getSelectedDate()||r.state.viewDate).clone();n[e](t),r.props.value||r.setState({selectedDate:n,viewDate:n.clone(),inputValue:n.format(r.getFormat("datetime"))}),r.props.onChange(n)})),we(ge(r),"_openCalendar",(function(){r.isOpen()||r.setState({open:!0},r.props.onOpen)})),we(ge(r),"_closeCalendar",(function(){r.isOpen()&&r.setState({open:!1},(function(){r.props.onClose(r.state.selectedDate||r.state.inputValue)}))})),we(ge(r),"_handleClickOutside",(function(){var e=r.props;e.input&&r.state.open&&void 0===e.open&&e.closeOnClickOutside&&r._closeCalendar()})),we(ge(r),"_onInputFocus",(function(e){r.callHandler(r.props.inputProps.onFocus,e)&&r._openCalendar()})),we(ge(r),"_onInputChange",(function(e){if(r.callHandler(r.props.inputProps.onChange,e)){var t=e.target?e.target.value:e,n=r.localMoment(t,r.getFormat("datetime")),o={inputValue:t};n.isValid()?(o.selectedDate=n,o.viewDate=n.clone().startOf("month")):o.selectedDate=null,r.setState(o,(function(){r.props.onChange(n.isValid()?n:r.state.inputValue)}))}})),we(ge(r),"_onInputKeyDown",(function(e){r.callHandler(r.props.inputProps.onKeyDown,e)&&9===e.which&&r.props.closeOnTab&&r._closeCalendar()})),we(ge(r),"_onInputClick",(function(e){console.log("CLICKING 2!"),r.callHandler(r.props.inputProps.onClick,e)&&r._openCalendar()})),r.state=r.getInitialState(e),r}return he(n,[{key:"render",value:function(){return c.a.createElement(Ve,{className:this.getClassName(),onClickOut:this._handleClickOutside},this.renderInput(),c.a.createElement("div",{className:"rdtPicker"},this.renderView(this.state.currentView,this._renderCalendar)))}},{key:"renderInput",value:function(){if(this.props.input){var e=pe(pe({type:"text",className:"form-control",value:this.getInputValue()},this.props.inputProps),{},{onFocus:this._onInputFocus,onChange:this._onInputChange,onKeyDown:this._onInputKeyDown,onClick:this._onInputClick});return this.props.renderInput?c.a.createElement("div",null,this.props.renderInput(e,this._openCalendar,this._closeCalendar)):c.a.createElement("input",e)}}},{key:"renderView",value:function(e,t){return this.props.renderView?this.props.renderView(e,(function(){return t(e)})):t(this.state.currentView)}},{key:"getInitialState",value:function(e){var t=e||this.props,n=this.getFormat("datetime"),r=this.parseDate(t.value||t.initialValue,n);return this.checkTZ(t),{open:!t.input,currentView:t.initialViewMode||this.getInitialView(this.getFormat("date")),viewDate:this.getInitialViewDate(t.initialViewDate,r,n),selectedDate:r&&r.isValid()?r:void 0,inputValue:this.getInitialInputValue(t,r,n)}}},{key:"getInitialViewDate",value:function(e,t,n){var r;if(e){if((r=this.parseDate(e,n))&&r.isValid())return r;this.log('The initialViewDated given "'+e+'" is not valid. Using current date instead.')}else if(t&&t.isValid())return t.clone();return this.getInitialDate()}},{key:"getInitialDate",value:function(){var e=this.localMoment();return e.hour(0).minute(0).second(0).millisecond(0),e}},{key:"getInitialView",value:function(e){return e?this.getUpdateOn(e):_e}},{key:"parseDate",value:function(e,t){var n;return e&&"string"==typeof e?n=this.localMoment(e,t):e&&(n=this.localMoment(e)),n&&!n.isValid()&&(n=null),n}},{key:"getClassName",value:function(){var e="rdt",t=this.props,n=t.className;return Array.isArray(n)?e+=" "+n.join(" "):n&&(e+=" "+n),t.input||(e+=" rdtStatic"),this.isOpen()&&(e+=" rdtOpen"),e}},{key:"isOpen",value:function(){return!this.props.input||(void 0===this.props.open?this.state.open:this.props.open)}},{key:"getUpdateOn",value:function(e){return this.props.updateOnView?this.props.updateOnView:e.match(/[lLD]/)?Ce:-1!==e.indexOf("M")?De:-1!==e.indexOf("Y")?ke:Ce}},{key:"getLocaleData",value:function(e){var t=e||this.props;return this.localMoment(t.value||t.defaultValue||new Date).localeData()}},{key:"getDateFormat",value:function(e){var t=this.props.dateFormat;return!0===t?e.longDateFormat("L"):t||""}},{key:"getTimeFormat",value:function(e){var t=this.props.timeFormat;return!0===t?e.longDateFormat("LT"):t||""}},{key:"getFormat",value:function(e){if("date"===e)return this.getDateFormat(this.getLocaleData());if("time"===e)return this.getTimeFormat(this.getLocaleData());var t=this.getLocaleData(),n=this.getDateFormat(t),r=this.getTimeFormat(t);return n&&r?n+" "+r:n||r}},{key:"updateTime",value:function(e,t,n,r){var o={},a=r?"selectedDate":"viewDate";o[a]=this.state[a].clone()[e](t,n),this.setState(o)}},{key:"localMoment",value:function(e,t,n){var r=null;return r=(n=n||this.props).utc?i.a.utc(e,t,n.strictParsing):n.displayTimeZone?i.a.tz(e,t,n.displayTimeZone):i()(e,t,n.strictParsing),n.locale&&r.locale(n.locale),r}},{key:"checkTZ",value:function(e){!e.displayTimeZone||this.tzWarning||i.a.tz||(this.tzWarning=!0,this.log('displayTimeZone prop with value "'+e.displayTimeZone+'" is used but moment.js timezone is not loaded.',"error"))}},{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t=!1,n=this.props;["locale","utc","displayZone","dateFormat","timeFormat"].forEach((function(r){e[r]!==n[r]&&(t=!0)})),t&&this.regenerateDates(this.props),n.value&&n.value!==e.value&&this.setViewDate(n.value),this.checkTZ(this.props)}}},{key:"regenerateDates",value:function(e){var t=this.state.viewDate.clone(),n=this.state.selectedDate&&this.state.selectedDate.clone();e.locale&&(t.locale(e.locale),n&&n.locale(e.locale)),e.utc?(t.utc(),n&&n.utc()):e.displayTimeZone?(t.tz(e.displayTimeZone),n&&n.tz(e.displayTimeZone)):(t.locale(),n&&n.locale());var r={viewDate:t,selectedDate:n};n&&n.isValid()&&(r.inputValue=n.format(this.getFormat("datetime"))),this.setState(r)}},{key:"getSelectedDate",value:function(){if(void 0===this.props.value)return this.state.selectedDate;var e=this.parseDate(this.props.value,this.getFormat("datetime"));return!(!e||!e.isValid())&&e}},{key:"getInitialInputValue",value:function(e,t,n){return e.inputProps.value?e.inputProps.value:t&&t.isValid()?t.format(n):e.value&&"string"==typeof e.value?e.value:e.initialValue&&"string"==typeof e.initialValue?e.initialValue:""}},{key:"getInputValue",value:function(){var e=this.getSelectedDate();return e?e.format(this.getFormat("datetime")):this.state.inputValue}},{key:"setViewDate",value:function(e){var t,n=this,r=function(){return n.log("Invalid date passed to the `setViewDate` method: "+e)};return e&&(t="string"==typeof e?this.localMoment(e,this.getFormat("datetime")):this.localMoment(e))&&t.isValid()?void this.setState({viewDate:t}):r()}},{key:"navigate",value:function(e){this._showView(e)}},{key:"log",value:function(e,t){var n="undefined"!=typeof window&&window.console;n&&(t||(t="warn"),n[t]("***react-datetime:"+e))}},{key:"callHandler",value:function(e,t){return!e||!1!==e(t)}}]),n}(c.a.Component);we(je,"propTypes",{value:Se,initialValue:Se,initialViewDate:Se,initialViewMode:Ee.oneOf([ke,De,Ce,_e]),onOpen:Ee.func,onClose:Ee.func,onChange:Ee.func,onNavigate:Ee.func,onBeforeNavigate:Ee.func,onNavigateBack:Ee.func,onNavigateForward:Ee.func,updateOnView:Ee.string,locale:Ee.string,utc:Ee.bool,displayTimeZone:Ee.string,input:Ee.bool,dateFormat:Ee.oneOfType([Ee.string,Ee.bool]),timeFormat:Ee.oneOfType([Ee.string,Ee.bool]),inputProps:Ee.object,timeConstraints:Ee.object,isValidDate:Ee.func,open:Ee.bool,strictParsing:Ee.bool,closeOnSelect:Ee.bool,closeOnTab:Ee.bool,renderView:Ee.func,renderInput:Ee.func,renderDay:Ee.func,renderMonth:Ee.func,renderYear:Ee.func}),we(je,"defaultProps",{onOpen:Pe,onClose:Pe,onCalendarOpen:Pe,onCalendarClose:Pe,onChange:Pe,onNavigate:Pe,onBeforeNavigate:function(e){return e},onNavigateBack:Pe,onNavigateForward:Pe,dateFormat:!0,timeFormat:!0,utc:!1,className:"",input:!0,inputProps:{},timeConstraints:{},isValidDate:function(){return!0},strictParsing:!0,closeOnSelect:!1,closeOnTab:!0,closeOnClickOutside:!0}),we(je,"moment",i.a);var Ve=ce(function(e){me(n,e);var t=ve(n);function n(){var e;fe(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return we(ge(e=t.call.apply(t,[this].concat(o))),"container",c.a.createRef()),e}return he(n,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.className,ref:this.container},this.props.children)}},{key:"handleClickOutside",value:function(e){this.props.onClickOut(e)}},{key:"setClickOutsideRef",value:function(){return this.container.current}}]),n}(c.a.Component))}]);
//# sourceMappingURL=react-datetime.cjs.js.map

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  id: {
    type: "string"
  },
  date: {
    type: "string",
    source: "attribute",
    selector: ".eb-countdown-get-date",
    attribute: "data-date"
  },
  days: {
    type: "string",
    source: "text",
    selector: ".eb-countdown-digits-days",
    "default": "0"
  },
  months: {
    type: "string",
    source: "text",
    selector: ".eb-countdown-digits-months",
    "default": "0"
  },
  hours: {
    type: "string",
    source: "text",
    selector: ".eb-countdown-digits-hours",
    "default": "0"
  },
  minutes: {
    type: "string",
    source: "text",
    selector: ".eb-countdown-digits-minutes",
    "default": "0"
  },
  seconds: {
    type: "string",
    source: "text",
    selector: ".eb-countdown-digits-seconds",
    "default": "0"
  },
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
  boxHeight: {
    type: "number"
  },
  boxWidth: {
    type: "number"
  },
  boxSpace: {
    type: "number"
  },
  justifyItems: {
    type: "string",
    "default": "center"
  },
  linkedPadding: {
    type: "boolean",
    "default": true
  },
  paddingTop: {
    type: "number",
    "default": 0
  },
  paddingRight: {
    type: "number",
    "default": 0
  },
  paddingBottom: {
    type: "number",
    "default": 0
  },
  paddingLeft: {
    type: "number",
    "default": 0
  },
  radiusTopLeft: {
    type: "number",
    "default": 5
  },
  radiusTopRight: {
    type: "number",
    "default": 5
  },
  radiusBottomRight: {
    type: "number",
    "default": 5
  },
  radiusBottomLeft: {
    type: "number",
    "default": 5
  },
  showBorder: {
    type: "boolean",
    "default": true
  },
  borderColor: {
    type: "string"
  },
  borderSize: {
    type: "number"
  },
  borderStyle: {
    type: "string",
    "default": "solid"
  },
  showBoxShadow: {
    type: "boolean",
    "default": true
  },
  shadowColor: {
    type: "string"
  },
  hOffset: {
    type: "number"
  },
  vOffset: {
    type: "number"
  },
  shadowBlur: {
    type: "number"
  },
  shadowSpread: {
    type: "number"
  },
  inlineItems: {
    type: "boolean",
    "default": false
  },
  digitFontFamily: {
    type: "string"
  },
  digitFontSize: {
    type: "number"
  },
  digitFontWeight: {
    type: "string"
  },
  digitLetterSpacing: {
    type: "number"
  },
  digitLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  digitLineHeight: {
    type: "number"
  },
  digitLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  labelTransform: {
    type: "string",
    "default": "none"
  },
  labelFontStyle: {
    type: "string",
    "default": "normal"
  },
  labelFontDecoration: {
    type: "string",
    "default": "initial"
  },
  labelLineHeight: {
    type: "number"
  },
  labelLeftPadding: {
    type: "number"
  },
  boxBackground: {
    type: "string"
  },
  digitColor: {
    type: "string"
  },
  labelColor: {
    type: "string"
  },
  daysBoxBackground: {
    type: "string"
  },
  linkedMargin: {
    type: "boolean",
    "default": true
  },
  marginTop: {
    type: "number",
    "default": 0
  },
  marginRight: {
    type: "number",
    "default": 0
  },
  marginBottom: {
    type: "number",
    "default": 0
  },
  marginLeft: {
    type: "number",
    "default": 0
  },
  boxTextAlign: {
    type: "string",
    "default": "center"
  },
  labelFontFamily: {
    type: "string"
  },
  labelFontSize: {
    type: "number"
  },
  wrapMarginTop: {
    type: "number"
  },
  wrapMarginRight: {
    type: "number"
  },
  wrapMarginBottom: {
    type: "number"
  },
  wrapMarginLeft: {
    type: "number"
  },
  wrapPaddingTop: {
    type: "number"
  },
  wrapPaddingRight: {
    type: "number"
  },
  wrapPaddingBottom: {
    type: "number"
  },
  wrapPaddingLeft: {
    type: "number"
  },
  wrapMarginUnit: {
    type: "string",
    "default": "px"
  },
  wrapPaddingUnit: {
    type: "string",
    "default": "px"
  },
  boxMarginUnit: {
    type: "string",
    "default": "px"
  },
  boxPaddingUnit: {
    type: "string",
    "default": "px"
  },
  radiusUnit: {
    type: "string",
    "default": "%"
  },
  digitSizeUnit: {
    type: "string",
    "default": "px"
  },
  labelSizeUnit: {
    type: "string",
    "default": "px"
  },
  lineHeightUnit: {
    type: "string",
    "default": "%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/box-container.js":
/*!******************************!*\
  !*** ./src/box-container.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BoxContainer = function BoxContainer(_ref) {
  var wrapperStyle = _ref.wrapperStyle,
      boxContainerStyle = _ref.boxContainerStyle,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-countdown-wrapper",
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-countdown-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "eb-countdown-items",
    style: boxContainerStyle
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxContainer);

/***/ }),

/***/ "./src/box.js":
/*!********************!*\
  !*** ./src/box.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Box = function Box(_ref) {
  var boxName = _ref.boxName,
      boxStyle = _ref.boxStyle,
      boxItemStyle = _ref.boxItemStyle,
      label = _ref.label,
      digit = _ref.digit,
      digitStyle = _ref.digitStyle,
      labelStyle = _ref.labelStyle;
  return /*#__PURE__*/React.createElement("li", {
    className: "eb-countdown-item",
    style: boxStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-countdown-".concat(boxName),
    style: boxItemStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-countdown-digits eb-countdown-digits-".concat(boxName),
    style: digitStyle
  }, digit), /*#__PURE__*/React.createElement("span", {
    className: "eb-countdown-label",
    style: labelStyle
  }, label)));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: BOX_JUSTIFY_CONTENT, BORDER_STYLES, DIGIT_FONT_WEIGHT, LABEL_TRANSFORM, FONT_DECORATION, TEXT_ALIGN, FONT_STYLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_JUSTIFY_CONTENT", function() { return BOX_JUSTIFY_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_FONT_WEIGHT", function() { return DIGIT_FONT_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_TRANSFORM", function() { return LABEL_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_DECORATION", function() { return FONT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_ALIGN", function() { return TEXT_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_STYLES", function() { return FONT_STYLES; });
var BOX_JUSTIFY_CONTENT = [{
  label: "Start",
  value: "flex-start"
}, {
  label: "End",
  value: "flex-end"
}, {
  label: "Center",
  value: "center"
}, {
  label: "Space Around",
  value: "space-around"
}, {
  label: "Space Between",
  value: "space-between"
}, {
  label: "Space Evenly",
  value: "space-evenly"
}];
var BORDER_STYLES = [{
  label: "Dashed",
  value: "dashed"
}, {
  label: "Solid",
  value: "solid"
}, {
  label: "Dotted",
  value: "dotted"
}, {
  label: "Double",
  value: "double"
}, {
  label: "Groove",
  value: "groove"
}, {
  label: "Inset",
  value: "inset"
}, {
  label: "Outset",
  value: "outset"
}, {
  label: "Ridge",
  value: "ridge"
}];
var DIGIT_FONT_WEIGHT = [{
  label: "100",
  value: 100
}, {
  label: "200",
  value: 200
}, {
  label: "300",
  value: 300
}, {
  label: "400",
  value: 400
}, {
  label: "500",
  value: 500
}, {
  label: "600",
  value: 600
}, {
  label: "700",
  value: 700
}, {
  label: "800",
  value: 800
}, {
  label: "900",
  value: 900
}];
var LABEL_TRANSFORM = [{
  label: "Capitalize",
  value: "capitalize"
}, {
  label: "Uppercase",
  value: "uppercase"
}, {
  label: "Lowecase",
  value: "lowercase"
}, {
  label: "None",
  value: "none"
}, {
  label: "Full Width",
  value: "full-width"
}];
var FONT_DECORATION = [{
  label: "Initial",
  value: "initial"
}, {
  label: "Overline",
  value: "overline"
}, {
  label: "Line Through",
  value: "line-through"
}, {
  label: "Underline",
  value: "underline"
}, {
  label: "Underline Overline",
  value: "undedashedrline overline"
}];
var TEXT_ALIGN = [{
  label: "Left",
  value: "left"
}, {
  label: "Right",
  value: "right"
}, {
  label: "Center",
  value: "center"
}, {
  label: "Justify",
  value: "justify"
}];
var FONT_STYLES = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Italic",
  value: "italic"
}, {
  label: "Oblique",
  value: "oblique"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box */ "./src/box.js");
/* harmony import */ var _box_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-container */ "./src/box-container.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _util_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/uuid */ "./util/uuid.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    _classCallCheck(this, Edit);

    return _super.apply(this, arguments);
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Generate unique id
      var id = this.props.attributes.id || Object(_util_uuid__WEBPACK_IMPORTED_MODULE_4__["default"])().substr(0, 5);
      this.props.setAttributes({
        id: id
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var id = this.props.attributes.id; // Remove interval from window object

      if (window[id]) {
        clearInterval(window[id]);
        delete window[id];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var date = attributes.date,
          days = attributes.days,
          hours = attributes.hours,
          minutes = attributes.minutes,
          seconds = attributes.seconds,
          showDays = attributes.showDays,
          showHours = attributes.showHours,
          showMinutes = attributes.showMinutes,
          showSeconds = attributes.showSeconds,
          daysLabel = attributes.daysLabel,
          hoursLabel = attributes.hoursLabel,
          minutesLabel = attributes.minutesLabel,
          secondsLabel = attributes.secondsLabel,
          boxHeight = attributes.boxHeight,
          boxWidth = attributes.boxWidth,
          boxSpace = attributes.boxSpace,
          justifyItems = attributes.justifyItems,
          paddingTop = attributes.paddingTop,
          paddingRight = attributes.paddingRight,
          paddingBottom = attributes.paddingBottom,
          paddingLeft = attributes.paddingLeft,
          radiusTopLeft = attributes.radiusTopLeft,
          radiusTopRight = attributes.radiusTopRight,
          radiusBottomRight = attributes.radiusBottomRight,
          radiusBottomLeft = attributes.radiusBottomLeft,
          showBorder = attributes.showBorder,
          borderSize = attributes.borderSize,
          borderStyle = attributes.borderStyle,
          showBoxShadow = attributes.showBoxShadow,
          hOffset = attributes.hOffset,
          vOffset = attributes.vOffset,
          shadowBlur = attributes.shadowBlur,
          shadowSpread = attributes.shadowSpread,
          inlineItems = attributes.inlineItems,
          digitFontFamily = attributes.digitFontFamily,
          digitFontSize = attributes.digitFontSize,
          digitFontWeight = attributes.digitFontWeight,
          digitLetterSpacing = attributes.digitLetterSpacing,
          digitLetterSpacingUnit = attributes.digitLetterSpacingUnit,
          digitLineHeight = attributes.digitLineHeight,
          digitLineHeightUnit = attributes.digitLineHeightUnit,
          labelTransform = attributes.labelTransform,
          labelFontStyle = attributes.labelFontStyle,
          labelFontDecoration = attributes.labelFontDecoration,
          labelLineHeight = attributes.labelLineHeight,
          labelLeftPadding = attributes.labelLeftPadding,
          boxBackground = attributes.boxBackground,
          digitColor = attributes.digitColor,
          labelColor = attributes.labelColor,
          marginTop = attributes.marginTop,
          marginRight = attributes.marginRight,
          marginBottom = attributes.marginBottom,
          marginLeft = attributes.marginLeft,
          boxTextAlign = attributes.boxTextAlign,
          borderColor = attributes.borderColor,
          shadowColor = attributes.shadowColor,
          labelFontFamily = attributes.labelFontFamily,
          labelFontSize = attributes.labelFontSize,
          wrapMarginTop = attributes.wrapMarginTop,
          wrapMarginRight = attributes.wrapMarginRight,
          wrapMarginBottom = attributes.wrapMarginBottom,
          wrapMarginLeft = attributes.wrapMarginLeft,
          wrapPaddingTop = attributes.wrapPaddingTop,
          wrapPaddingRight = attributes.wrapPaddingRight,
          wrapPaddingBottom = attributes.wrapPaddingBottom,
          wrapPaddingLeft = attributes.wrapPaddingLeft,
          wrapMarginUnit = attributes.wrapMarginUnit,
          wrapPaddingUnit = attributes.wrapPaddingUnit,
          boxMarginUnit = attributes.boxMarginUnit,
          boxPaddingUnit = attributes.boxPaddingUnit,
          radiusUnit = attributes.radiusUnit,
          digitSizeUnit = attributes.digitSizeUnit,
          labelSizeUnit = attributes.labelSizeUnit,
          lineHeightUnit = attributes.lineHeightUnit;
      var defaultBoxColor = "#7967ff";
      var defaultDigitColor = "#ffffff";
      var defaultLabelColor = "#ffffff";
      var wrapperStyle = {
        marginTop: "".concat(wrapMarginTop || 0).concat(wrapMarginUnit),
        marginRight: "".concat(wrapMarginRight || 0).concat(wrapMarginUnit),
        marginBottom: "".concat(wrapMarginBottom || 0).concat(wrapMarginUnit),
        marginLeft: "".concat(wrapMarginLeft || 0).concat(wrapMarginUnit),
        paddingTop: "".concat(wrapPaddingTop || 0).concat(wrapPaddingUnit),
        paddingRight: "".concat(wrapPaddingRight || 0).concat(wrapPaddingUnit),
        paddingBottom: "".concat(wrapPaddingBottom || 0).concat(wrapPaddingUnit),
        paddingLeft: "".concat(wrapPaddingLeft || 0).concat(wrapPaddingUnit)
      };
      var boxContainerStyle = {
        justifyContent: justifyItems
      };
      var boxStyle = {
        height: "".concat(boxHeight || 120, "px"),
        width: "".concat(boxWidth || 170, "px"),
        margin: "0px ".concat(boxSpace || 10, "px"),
        padding: "".concat(paddingTop).concat(boxPaddingUnit, " ").concat(paddingRight).concat(boxPaddingUnit, " ").concat(paddingBottom).concat(boxPaddingUnit, " ").concat(paddingLeft).concat(boxPaddingUnit),
        border: showBorder ? "".concat(borderSize || 0, "px ").concat(borderStyle, " ").concat(borderColor || "#000000") : "none",
        boxShadow: showBoxShadow ? "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(shadowColor || "#000000") : "none",
        borderRadius: "".concat(radiusTopLeft).concat(radiusUnit, " ").concat(radiusTopRight).concat(radiusUnit, " ").concat(radiusBottomRight).concat(radiusUnit, " ").concat(radiusBottomLeft).concat(radiusUnit),
        backgroundColor: boxBackground ? boxBackground : defaultBoxColor
      };
      var boxItemStyle = {
        marginTop: "".concat(marginTop).concat(boxMarginUnit),
        marginRight: "".concat(marginRight).concat(boxMarginUnit),
        marginBottom: "".concat(marginBottom).concat(boxMarginUnit),
        marginLeft: "".concat(marginLeft).concat(boxMarginUnit),
        textAlign: boxTextAlign,
        display: inlineItems ? "flex" : undefined,
        justifyContent: inlineItems ? "center" : undefined,
        alignItems: inlineItems ? "center" : undefined
      };
      var digitStyle = {
        fontFamily: digitFontFamily,
        fontSize: "".concat(digitFontSize || 48).concat(digitSizeUnit),
        fontWeight: "".concat(digitFontWeight || 400),
        letterSpacing: digitLetterSpacing ? digitLetterSpacing + digitLetterSpacingUnit : undefined,
        lineHeight: digitLineHeight ? digitLineHeight + digitLineHeightUnit : undefined,
        color: digitColor ? digitColor : defaultDigitColor,
        display: inlineItems ? "flex" : "block",
        flex: inlineItems ? 1 : undefined,
        justifyContent: inlineItems ? "center" : undefined
      };
      var labelStyle = {
        fontFamily: labelFontFamily,
        fontSize: "".concat(labelFontSize || 14).concat(labelSizeUnit),
        textTransform: labelTransform,
        fontStyle: labelFontStyle,
        textDecoration: labelFontDecoration,
        lineHeight: "".concat(labelLineHeight || 100).concat(lineHeightUnit),
        paddingLeft: "".concat(labelLeftPadding, "px"),
        color: labelColor || defaultLabelColor,
        display: inlineItems ? "flex" : "block",
        flex: inlineItems ? 1 : undefined,
        justifyContent: inlineItems ? "flex-start" : undefined
      };
      var displayDays = showDays ? "block" : "none";
      var displayHours = showHours ? "block" : "none";
      var displayMinutes = showMinutes ? "block" : "none";
      var displaySeconds = showSeconds ? "block" : "none";
      return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }),
      /*#__PURE__*/
      // Edit view here
      React.createElement(_box_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        boxContainerStyle: boxContainerStyle,
        wrapperStyle: wrapperStyle
      }, /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        boxName: "days",
        boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
          display: displayDays
        }),
        boxItemStyle: boxItemStyle,
        label: daysLabel,
        digit: days,
        digitStyle: digitStyle,
        labelStyle: labelStyle
      }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        boxName: "hours",
        boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
          display: displayHours
        }),
        boxItemStyle: boxItemStyle,
        digit: hours,
        digitStyle: digitStyle,
        label: hoursLabel,
        labelStyle: labelStyle
      }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        boxName: "minutes",
        boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
          display: displayMinutes
        }),
        boxItemStyle: boxItemStyle,
        label: minutesLabel,
        digit: minutes,
        digitStyle: digitStyle,
        labelStyle: labelStyle
      }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        boxName: "seconds",
        boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
          display: displaySeconds
        }),
        boxItemStyle: boxItemStyle,
        label: secondsLabel,
        digit: seconds,
        digitStyle: digitStyle,
        labelStyle: labelStyle
      }))];
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/countdown", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Countdown", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("", "block"),
  category: "widgets",
  keywords: ["countdown", "counter", "timer"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */







var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id,
      date = attributes.date,
      days = attributes.days,
      hours = attributes.hours,
      minutes = attributes.minutes,
      seconds = attributes.seconds,
      showDays = attributes.showDays,
      showHours = attributes.showHours,
      showMinutes = attributes.showMinutes,
      showSeconds = attributes.showSeconds,
      daysLabel = attributes.daysLabel,
      hoursLabel = attributes.hoursLabel,
      minutesLabel = attributes.minutesLabel,
      secondsLabel = attributes.secondsLabel,
      boxHeight = attributes.boxHeight,
      boxWidth = attributes.boxWidth,
      boxSpace = attributes.boxSpace,
      justifyItems = attributes.justifyItems,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      radiusTopLeft = attributes.radiusTopLeft,
      radiusTopRight = attributes.radiusTopRight,
      radiusBottomRight = attributes.radiusBottomRight,
      radiusBottomLeft = attributes.radiusBottomLeft,
      showBorder = attributes.showBorder,
      borderSize = attributes.borderSize,
      borderStyle = attributes.borderStyle,
      showBoxShadow = attributes.showBoxShadow,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      inlineItems = attributes.inlineItems,
      digitFontFamily = attributes.digitFontFamily,
      digitFontSize = attributes.digitFontSize,
      digitFontWeight = attributes.digitFontWeight,
      digitLetterSpacing = attributes.digitLetterSpacing,
      digitLetterSpacingUnit = attributes.digitLetterSpacingUnit,
      digitLineHeight = attributes.digitLineHeight,
      digitLineHeightUnit = attributes.digitLineHeightUnit,
      labelTransform = attributes.labelTransform,
      labelFontStyle = attributes.labelFontStyle,
      labelFontDecoration = attributes.labelFontDecoration,
      labelLineHeight = attributes.labelLineHeight,
      labelLeftPadding = attributes.labelLeftPadding,
      boxBackground = attributes.boxBackground,
      digitColor = attributes.digitColor,
      labelColor = attributes.labelColor,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      boxTextAlign = attributes.boxTextAlign,
      borderColor = attributes.borderColor,
      shadowColor = attributes.shadowColor,
      labelFontFamily = attributes.labelFontFamily,
      labelFontSize = attributes.labelFontSize,
      wrapMarginTop = attributes.wrapMarginTop,
      wrapMarginRight = attributes.wrapMarginRight,
      wrapMarginBottom = attributes.wrapMarginBottom,
      wrapMarginLeft = attributes.wrapMarginLeft,
      wrapPaddingTop = attributes.wrapPaddingTop,
      wrapPaddingRight = attributes.wrapPaddingRight,
      wrapPaddingBottom = attributes.wrapPaddingBottom,
      wrapPaddingLeft = attributes.wrapPaddingLeft,
      wrapMarginUnit = attributes.wrapMarginUnit,
      wrapPaddingUnit = attributes.wrapPaddingUnit,
      boxMarginUnit = attributes.boxMarginUnit,
      boxPaddingUnit = attributes.boxPaddingUnit,
      radiusUnit = attributes.radiusUnit,
      digitSizeUnit = attributes.digitSizeUnit,
      labelSizeUnit = attributes.labelSizeUnit,
      lineHeightUnit = attributes.lineHeightUnit;

  var onDateTimeChange = function onDateTimeChange(momentObj) {
    var date = momentObj._d; // ignore invalid date

    if (!date) return;
    var time = date.getTime();

    var counter = function counter() {
      var now = new Date().getTime();
      var currentUtcOffset = moment__WEBPACK_IMPORTED_MODULE_3___default()(date).utcOffset() * 60 * 1000;
      var timer = new Date(time - now - currentUtcOffset);

      if (time < now) {
        setAttributes({
          days: "0",
          hours: "0",
          minutes: "0",
          seconds: "0"
        });
        return;
      } // Calculate days, hours, minutes and seconds


      var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds

      var days = Math.floor((time - now) / oneDay).toString();
      var hours = timer.getHours().toString();
      var minutes = timer.getMinutes().toString();
      var seconds = timer.getSeconds().toString();
      setAttributes({
        date: date,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }; // Clear interval if countdown already exists


    if (window[id]) {
      clearInterval(window[id]);
    }

    if (id) {
      window[id] = setInterval(counter, 1000);
    }
  };

  var yesterday = moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, "day");

  var valid = function valid(current) {
    return current.isAfter(yesterday);
  };

  var DIGIT_LINE_HEIGHT_MAX = digitLineHeightUnit === "em" ? 10 : 100;
  var DIGIT_LINE_HEIGHT_STEP = digitLineHeightUnit === "em" ? 0.1 : 1;
  var DIGIT_LETTER_SPACING_MAX = digitLetterSpacingUnit === "em" ? 10 : 100;
  var DIGIT_LETTER_SPACING_STEP = digitLetterSpacingUnit === "em" ? 0.1 : 1;
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
    key: "controls"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Timer Setting")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    id: "eb-countdown-due-date",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Countdown Due Date")
  }, /*#__PURE__*/React.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: date,
    dateFormat: "YYYY-MM-DD-A",
    timeFormat: "h:mm A",
    onChange: function onChange(momentObj) {
      return onDateTimeChange(momentObj);
    },
    isValidDate: valid
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Context Setting")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Days"),
    checked: showDays,
    onChange: function onChange() {
      return setAttributes({
        showDays: !showDays
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Hours"),
    checked: showHours,
    onChange: function onChange() {
      return setAttributes({
        showHours: !showHours
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Minutes"),
    checked: showMinutes,
    onChange: function onChange() {
      return setAttributes({
        showMinutes: !showMinutes
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Seconds"),
    checked: showSeconds,
    onChange: function onChange() {
      return setAttributes({
        showSeconds: !showSeconds
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom Label For Days"),
    value: daysLabel,
    onChange: function onChange(newValue) {
      return setAttributes({
        daysLabel: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom Label For Hours"),
    value: hoursLabel,
    onChange: function onChange(newValue) {
      return setAttributes({
        hoursLabel: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom Label For Minutes"),
    value: minutesLabel,
    onChange: function onChange(newValue) {
      return setAttributes({
        minutesLabel: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom Label For Seconds"),
    value: secondsLabel,
    onChange: function onChange(newValue) {
      return setAttributes({
        secondsLabel: newValue
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Container Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: wrapMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(wrapMarginUnit) {
      return setAttributes({
        wrapMarginUnit: wrapMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: wrapMarginTop,
    right: wrapMarginRight,
    bottom: wrapMarginBottom,
    left: wrapMarginLeft,
    onChange: function onChange(_ref2) {
      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes({
        wrapMarginTop: top,
        wrapMarginRight: right,
        wrapMarginBottom: bottom,
        wrapMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: wrapPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(wrapPaddingUnit) {
      return setAttributes({
        wrapPaddingUnit: wrapPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: wrapPaddingTop,
    right: wrapPaddingRight,
    bottom: wrapPaddingBottom,
    left: wrapPaddingLeft,
    onChange: function onChange(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes({
        wrapPaddingTop: top,
        wrapPaddingRight: right,
        wrapPaddingBottom: bottom,
        wrapPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Inline"),
    checked: inlineItems,
    onChange: function onChange() {
      return setAttributes({
        inlineItems: !inlineItems
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Border"),
    checked: showBorder,
    onChange: function onChange() {
      return setAttributes({
        showBorder: !showBorder
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Shadow"),
    checked: showBoxShadow,
    onChange: function onChange() {
      return setAttributes({
        showBoxShadow: !showBoxShadow
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Positions"),
    value: justifyItems,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__["BOX_JUSTIFY_CONTENT"],
    onChange: function onChange(newValue) {
      return setAttributes({
        justifyItems: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Height"),
    allowReset: true,
    value: boxHeight,
    onChange: function onChange(newValue) {
      return setAttributes({
        boxHeight: newValue
      });
    },
    min: 10,
    max: 200
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Width"),
    value: boxWidth,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        boxWidth: newValue
      });
    },
    min: 10,
    max: 200
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Space Between Boxes"),
    value: boxSpace,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        boxSpace: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Background Color"),
    color: boxBackground,
    onChange: function onChange(boxBackground) {
      return setAttributes({
        boxBackground: boxBackground
      });
    }
  }), inlineItems && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Left Spacing For Labels"),
    value: labelLeftPadding,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        labelLeftPadding: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: boxMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(boxMarginUnit) {
      return setAttributes({
        boxMarginUnit: boxMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
    onChange: function onChange(_ref4) {
      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes({
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: boxPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(boxPaddingUnit) {
      return setAttributes({
        boxPaddingUnit: boxPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
    onChange: function onChange(_ref5) {
      var top = _ref5.top,
          right = _ref5.right,
          bottom = _ref5.bottom,
          left = _ref5.left;
      return setAttributes({
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: radiusUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(radiusUnit) {
      return setAttributes({
        radiusUnit: radiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius"),
    top: radiusTopLeft,
    right: radiusTopRight,
    bottom: radiusBottomRight,
    left: radiusBottomLeft,
    onChange: function onChange(_ref6) {
      var top = _ref6.top,
          right = _ref6.right,
          bottom = _ref6.bottom,
          left = _ref6.left;
      return setAttributes({
        radiusTopLeft: top,
        radiusTopRight: right,
        radiusBottomRight: bottom,
        radiusBottomLeft: left
      });
    }
  })), showBorder && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Size"),
    value: borderSize,
    onChange: function onChange(newValue) {
      return setAttributes({
        borderSize: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Style"),
    value: borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__["BORDER_STYLES"],
    onChange: function onChange(newValue) {
      return setAttributes({
        borderStyle: newValue
      });
    }
  })), showBoxShadow && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color"),
    color: shadowColor,
    onChange: function onChange(shadowColor) {
      return setAttributes({
        shadowColor: shadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
    value: hOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        hOffset: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
    value: vOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        vOffset: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur"),
    value: shadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowBlur: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spread"),
    value: shadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowSpread: newValue
      });
    },
    min: 0,
    max: 100
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    id: "eb-countdown-box-text-align",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Align")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    id: "eb-countdown-box-text-align"
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_ALIGN"].map(function (item) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isPrimary: boxTextAlign === item.value,
      isSecondary: boxTextAlign !== item.value,
      onClick: function onClick() {
        return setAttributes({
          boxTextAlign: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Digit Styles"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Digit Color"),
    color: digitColor,
    onChange: function onChange(digitColor) {
      return setAttributes({
        digitColor: digitColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref7) {
      var isOpen = _ref7.isOpen,
          onToggle = _ref7.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        value: digitFontFamily,
        onChange: function onChange(digitFontFamily) {
          return setAttributes({
            digitFontFamily: digitFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: digitSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(digitSizeUnit) {
          return setAttributes({
            digitSizeUnit: digitSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: digitFontSize,
        allowReset: true,
        onChange: function onChange(newValue) {
          return setAttributes({
            digitFontSize: newValue
          });
        },
        min: 8,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
        value: digitFontWeight,
        allowReset: true,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["DIGIT_FONT_WEIGHT"],
        onChange: function onChange(newValue) {
          return setAttributes({
            digitFontWeight: newValue
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: digitLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(digitLineHeightUnit) {
          return setAttributes({
            digitLineHeightUnit: digitLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: digitLineHeight,
        allowReset: true,
        onChange: function onChange(digitLineHeight) {
          return setAttributes({
            digitLineHeight: digitLineHeight
          });
        },
        min: 0,
        max: DIGIT_LINE_HEIGHT_MAX,
        step: DIGIT_LINE_HEIGHT_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: digitLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(digitLetterSpacingUnit) {
          return setAttributes({
            digitLetterSpacingUnit: digitLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
        value: digitLetterSpacing,
        allowReset: true,
        onChange: function onChange(digitLetterSpacing) {
          return setAttributes({
            digitLetterSpacing: digitLetterSpacing
          });
        },
        min: 0,
        max: DIGIT_LETTER_SPACING_MAX,
        step: DIGIT_LETTER_SPACING_STEP
      }));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Label Styles"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Label Color"),
    color: labelColor,
    onChange: function onChange(labelColor) {
      return setAttributes({
        labelColor: labelColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref8) {
      var isOpen = _ref8.isOpen,
          onToggle = _ref8.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        value: labelFontFamily,
        onChange: function onChange(labelFontFamily) {
          return setAttributes({
            labelFontFamily: labelFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: labelSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(labelSizeUnit) {
          return setAttributes({
            labelSizeUnit: labelSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: labelFontSize,
        allowReset: true,
        onChange: function onChange(newValue) {
          return setAttributes({
            labelFontSize: newValue
          });
        },
        min: 8,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Transform"),
        value: labelTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["LABEL_TRANSFORM"],
        onChange: function onChange(newValue) {
          return setAttributes({
            labelTransform: newValue
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
        id: "eb-countdown-box-font-style",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Style")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        id: "eb-countdown-box-font-style"
      }, _constants__WEBPACK_IMPORTED_MODULE_5__["FONT_STYLES"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          isPrimary: labelFontStyle === item.value,
          isSecondary: labelFontStyle !== item.value,
          onClick: function onClick() {
            return setAttributes({
              labelFontStyle: item.value
            });
          }
        }, item.label);
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Decoration"),
        value: labelFontDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["FONT_DECORATION"],
        onChange: function onChange(newValue) {
          return setAttributes({
            labelFontDecoration: newValue
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(lineHeightUnit) {
          return setAttributes({
            lineHeightUnit: lineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: labelLineHeight,
        allowReset: true,
        onChange: function onChange(newValue) {
          return setAttributes({
            labelLineHeight: newValue
          });
        },
        min: 0,
        max: 100
      }));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box-container */ "./src/box-container.js");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box */ "./src/box.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var date = attributes.date,
      days = attributes.days,
      hours = attributes.hours,
      minutes = attributes.minutes,
      seconds = attributes.seconds,
      showDays = attributes.showDays,
      showHours = attributes.showHours,
      showMinutes = attributes.showMinutes,
      showSeconds = attributes.showSeconds,
      daysLabel = attributes.daysLabel,
      hoursLabel = attributes.hoursLabel,
      minutesLabel = attributes.minutesLabel,
      secondsLabel = attributes.secondsLabel,
      boxHeight = attributes.boxHeight,
      boxWidth = attributes.boxWidth,
      boxSpace = attributes.boxSpace,
      justifyItems = attributes.justifyItems,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      radiusTopLeft = attributes.radiusTopLeft,
      radiusTopRight = attributes.radiusTopRight,
      radiusBottomRight = attributes.radiusBottomRight,
      radiusBottomLeft = attributes.radiusBottomLeft,
      showBorder = attributes.showBorder,
      borderSize = attributes.borderSize,
      borderStyle = attributes.borderStyle,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      inlineItems = attributes.inlineItems,
      digitFontFamily = attributes.digitFontFamily,
      digitFontSize = attributes.digitFontSize,
      digitFontWeight = attributes.digitFontWeight,
      digitLetterSpacing = attributes.digitLetterSpacing,
      digitLetterSpacingUnit = attributes.digitLetterSpacingUnit,
      digitLineHeight = attributes.digitLineHeight,
      digitLineHeightUnit = attributes.digitLineHeightUnit,
      labelTransform = attributes.labelTransform,
      labelFontStyle = attributes.labelFontStyle,
      labelFontDecoration = attributes.labelFontDecoration,
      labelLineHeight = attributes.labelLineHeight,
      labelLeftPadding = attributes.labelLeftPadding,
      boxBackground = attributes.boxBackground,
      digitColor = attributes.digitColor,
      labelColor = attributes.labelColor,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      boxTextAlign = attributes.boxTextAlign,
      borderColor = attributes.borderColor,
      showBoxShadow = attributes.showBoxShadow,
      shadowColor = attributes.shadowColor,
      labelFontFamily = attributes.labelFontFamily,
      labelFontSize = attributes.labelFontSize,
      wrapMarginTop = attributes.wrapMarginTop,
      wrapMarginRight = attributes.wrapMarginRight,
      wrapMarginBottom = attributes.wrapMarginBottom,
      wrapMarginLeft = attributes.wrapMarginLeft,
      wrapPaddingTop = attributes.wrapPaddingTop,
      wrapPaddingRight = attributes.wrapPaddingRight,
      wrapPaddingBottom = attributes.wrapPaddingBottom,
      wrapPaddingLeft = attributes.wrapPaddingLeft,
      wrapMarginUnit = attributes.wrapMarginUnit,
      wrapPaddingUnit = attributes.wrapPaddingUnit,
      boxMarginUnit = attributes.boxMarginUnit,
      boxPaddingUnit = attributes.boxPaddingUnit,
      radiusUnit = attributes.radiusUnit,
      digitSizeUnit = attributes.digitSizeUnit,
      labelSizeUnit = attributes.labelSizeUnit,
      lineHeightUnit = attributes.lineHeightUnit;
  var defaultBoxColor = "#7967ff";
  var defaultDigitColor = "#ffffff";
  var defaultLabelColor = "#ffffff";
  var wrapperStyle = {
    marginTop: "".concat(wrapMarginTop || 0).concat(wrapMarginUnit),
    marginRight: "".concat(wrapMarginRight || 0).concat(wrapMarginUnit),
    marginBottom: "".concat(wrapMarginBottom || 0).concat(wrapMarginUnit),
    marginLeft: "".concat(wrapMarginLeft || 0).concat(wrapMarginUnit),
    paddingTop: "".concat(wrapPaddingTop || 0).concat(wrapPaddingUnit),
    paddingRight: "".concat(wrapPaddingRight || 0).concat(wrapPaddingUnit),
    paddingBottom: "".concat(wrapPaddingBottom || 0).concat(wrapPaddingUnit),
    paddingLeft: "".concat(wrapPaddingLeft || 0).concat(wrapPaddingUnit)
  };
  var boxContainerStyle = {
    justifyContent: justifyItems
  };
  var boxStyle = {
    height: "".concat(boxHeight || 120, "px"),
    width: "".concat(boxWidth || 120, "px"),
    margin: "0px ".concat(boxSpace || 10, "px"),
    padding: "".concat(paddingTop).concat(boxPaddingUnit, " ").concat(paddingRight).concat(boxPaddingUnit, " ").concat(paddingBottom).concat(boxPaddingUnit, " ").concat(paddingLeft).concat(boxPaddingUnit),
    border: showBorder ? "".concat(borderSize || 0, "px ").concat(borderStyle, " ").concat(borderColor || "#000000") : "none",
    boxShadow: showBoxShadow ? "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(shadowColor || "#000000") : "none",
    borderRadius: "".concat(radiusTopLeft).concat(radiusUnit, " ").concat(radiusTopRight).concat(radiusUnit, " ").concat(radiusBottomRight).concat(radiusUnit, " ").concat(radiusBottomLeft).concat(radiusUnit),
    backgroundColor: boxBackground ? boxBackground : defaultBoxColor
  };
  var boxItemStyle = {
    marginTop: "".concat(marginTop).concat(boxMarginUnit),
    marginRight: "".concat(marginRight).concat(boxMarginUnit),
    marginBottom: "".concat(marginBottom).concat(boxMarginUnit),
    marginLeft: "".concat(marginLeft).concat(boxMarginUnit),
    textAlign: boxTextAlign,
    // lineHeight: "normal", // Add this line to fix box line height
    display: inlineItems ? "flex" : undefined,
    justifyContent: inlineItems ? "center" : undefined,
    alignItems: inlineItems ? "center" : undefined
  };
  var digitStyle = {
    fontFamily: digitFontFamily,
    fontSize: "".concat(digitFontSize || 48).concat(digitSizeUnit),
    fontWeight: "".concat(digitFontWeight || 400),
    letterSpacing: digitLetterSpacing ? digitLetterSpacing + digitLetterSpacingUnit : undefined,
    lineHeight: digitLineHeight ? digitLineHeight + digitLineHeightUnit : undefined,
    color: digitColor || defaultDigitColor,
    display: inlineItems ? "flex" : "block",
    flex: inlineItems ? 1 : undefined,
    justifyContent: inlineItems ? "center" : undefined
  };
  var labelStyle = {
    fontFamily: labelFontFamily,
    fontSize: "".concat(labelFontSize || 14).concat(labelSizeUnit),
    textTransform: labelTransform,
    fontStyle: labelFontStyle,
    textDecoration: labelFontDecoration,
    lineHeight: "".concat(labelLineHeight || 100).concat(lineHeightUnit),
    paddingLeft: "".concat(labelLeftPadding || 0, "px"),
    color: labelColor || defaultLabelColor,
    display: inlineItems ? "flex" : "block",
    flex: inlineItems ? 1 : undefined,
    justifyContent: inlineItems ? "flex-start" : undefined
  };
  var displayDays = showDays ? "block" : "none";
  var displayHours = showHours ? "block" : "none";
  var displayMinutes = showMinutes ? "block" : "none";
  var displaySeconds = showSeconds ? "block" : "none";
  return /*#__PURE__*/React.createElement(_box_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
    boxContainerStyle: boxContainerStyle,
    wrapperStyle: wrapperStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-countdown-get-date",
    style: {
      display: "none"
    },
    "data-date": date ? date.toString() : ""
  }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    boxName: "days",
    boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
      display: displayDays
    }),
    boxItemStyle: boxItemStyle,
    label: daysLabel,
    digit: days,
    digitStyle: digitStyle,
    labelStyle: labelStyle
  }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    boxName: "hours",
    boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
      display: displayHours
    }),
    boxItemStyle: boxItemStyle,
    label: hoursLabel,
    digit: hours,
    digitStyle: digitStyle,
    labelStyle: labelStyle
  }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    boxName: "minutes",
    boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
      display: displayMinutes
    }),
    boxItemStyle: boxItemStyle,
    label: minutesLabel,
    digit: minutes,
    digitStyle: digitStyle,
    labelStyle: labelStyle
  }), /*#__PURE__*/React.createElement(_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    boxName: "seconds",
    boxStyle: _objectSpread(_objectSpread({}, boxStyle), {}, {
      display: displaySeconds
    }),
    boxItemStyle: boxItemStyle,
    label: secondsLabel,
    digit: seconds,
    digitStyle: digitStyle,
    labelStyle: labelStyle
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32,
          width: 32,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



/**
 * WordPress dependencies
 */




var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/uuid.js":
/*!**********************!*\
  !*** ./util/uuid.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var uuid = function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (uuid);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "moment":
/*!**********************************!*\
  !*** external {"this":"moment"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
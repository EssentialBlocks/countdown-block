/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var countdowns = document.querySelectorAll(".eb-cd-wrapper > .eb-cd-inner"); // Return if there is no countdown block

  if (!countdowns) return;

  var _loop = function _loop(i) {
    var element = countdowns[i];
    var deadlineTimeStamp = parseInt(element.getAttribute("data-deadline-time"));
    var fakeElement = {
      textContent: "3e"
    };
    var daySpan = element.querySelector(".cd-box-day > .eb-cd-digit") || fakeElement;
    var hourSpan = element.querySelector(".cd-box-hour > .eb-cd-digit") || fakeElement;
    var minuteSpan = element.querySelector(".cd-box-minute > .eb-cd-digit") || fakeElement;
    var secondSpan = element.querySelector(".cd-box-second > .eb-cd-digit") || fakeElement;

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
        daySpan.textContent = "00";
        hourSpan.textContent = "00";
        minuteSpan.textContent = "00";
        secondSpan.textContent = "00";
        return;
      }

      daySpan.textContent = days < 10 ? "0".concat(days) : "".concat(days);
      hourSpan.textContent = hours < 10 ? "0".concat(hours) : "".concat(hours);
      minuteSpan.textContent = minutes < 10 ? "0".concat(minutes) : "".concat(minutes);
      secondSpan.textContent = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
    };

    timeLeft(deadlineTimeStamp || 0);
    var intervalId = setInterval(function () {
      timeLeft(deadlineTimeStamp || 0, intervalId);
    }, 1000);
  };

  for (var i = 0; i < countdowns.length; i++) {
    _loop(i);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map
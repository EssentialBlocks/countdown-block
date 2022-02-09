/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
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
/******/ })()
;
//# sourceMappingURL=index.js.map
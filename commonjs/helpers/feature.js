"use strict";

exports.__esModule = true;
exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.isTouchSupported = isTouchSupported;
exports.isWebComponentSupportedNatively = isWebComponentSupportedNatively;
exports.hasCaptionProblem = hasCaptionProblem;
exports.getComparisonFunction = getComparisonFunction;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// https://gist.github.com/paulirish/1579671
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
var _requestAnimationFrame = window.requestAnimationFrame;
var _cancelAnimationFrame = window.cancelAnimationFrame;

for (var x = 0; x < vendors.length && !_requestAnimationFrame; ++x) {
  _requestAnimationFrame = window["".concat(vendors[x], "RequestAnimationFrame")];
  _cancelAnimationFrame = window["".concat(vendors[x], "CancelAnimationFrame")] || window["".concat(vendors[x], "CancelRequestAnimationFrame")];
}

if (!_requestAnimationFrame) {
  _requestAnimationFrame = function _requestAnimationFrame(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

if (!_cancelAnimationFrame) {
  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    clearTimeout(id);
  };
}
/**
 * Polyfill for requestAnimationFrame
 *
 * @param {Function} callback
 * @returns {Number}
 */


function requestAnimationFrame(callback) {
  return _requestAnimationFrame.call(window, callback);
}
/**
 * Polyfill for cancelAnimationFrame
 *
 * @param {Number} id
 */


function cancelAnimationFrame(id) {
  _cancelAnimationFrame.call(window, id);
}

function isTouchSupported() {
  return 'ontouchstart' in window;
}
/**
 * Checks if browser is support web components natively
 *
 * @returns {Boolean}
 */


function isWebComponentSupportedNatively() {
  var test = document.createElement('div');
  return !!(test.createShadowRoot && test.createShadowRoot.toString().match(/\[native code\]/));
}

var _hasCaptionProblem;

function detectCaptionProblem() {
  var TABLE = document.createElement('TABLE');
  TABLE.style.borderSpacing = '0';
  TABLE.style.borderWidth = '0';
  TABLE.style.padding = '0';
  var TBODY = document.createElement('TBODY');
  TABLE.appendChild(TBODY);
  TBODY.appendChild(document.createElement('TR'));
  TBODY.firstChild.appendChild(document.createElement('TD'));
  TBODY.firstChild.firstChild.innerHTML = '<tr><td>t<br>t</td></tr>';
  var CAPTION = document.createElement('CAPTION');
  CAPTION.innerHTML = 'c<br>c<br>c<br>c';
  CAPTION.style.padding = '0';
  CAPTION.style.margin = '0';
  TABLE.insertBefore(CAPTION, TBODY);
  document.body.appendChild(TABLE);
  _hasCaptionProblem = TABLE.offsetHeight < 2 * TABLE.lastChild.offsetHeight; // boolean

  document.body.removeChild(TABLE);
}

function hasCaptionProblem() {
  if (_hasCaptionProblem === void 0) {
    detectCaptionProblem();
  }

  return _hasCaptionProblem;
}

var comparisonFunction;
/**
 * Get string comparison function for sorting purposes. It supports multilingual string comparison base on Internationalization API.
 *
 * @param {String} [language]
 * @param {Object} [options]
 * @returns {*}
 */

function getComparisonFunction(language) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (comparisonFunction) {
    return comparisonFunction;
  }

  if ((typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === 'object') {
    comparisonFunction = new Intl.Collator(language, options).compare;
  } else if (typeof String.prototype.localeCompare === 'function') {
    comparisonFunction = function comparisonFunction(a, b) {
      return "".concat(a).localeCompare(b);
    };
  } else {
    comparisonFunction = function comparisonFunction(a, b) {
      if (a === b) {
        return 0;
      }

      return a > b ? -1 : 1;
    };
  }

  return comparisonFunction;
}
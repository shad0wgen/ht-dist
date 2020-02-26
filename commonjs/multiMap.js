"use strict";

exports.__esModule = true;
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function MultiMap() {
  var map = {
    arrayMap: [],
    weakMap: new WeakMap()
  };
  return {
    get: function get(key) {
      if (canBeAnArrayMapKey(key)) {
        return map.arrayMap[key];
      } else if (canBeAWeakMapKey(key)) {
        return map.weakMap.get(key);
      }
    },
    set: function set(key, value) {
      if (canBeAnArrayMapKey(key)) {
        map.arrayMap[key] = value;
      } else if (canBeAWeakMapKey(key)) {
        map.weakMap.set(key, value);
      } else {
        throw new Error('Invalid key type');
      }
    },
    delete: function _delete(key) {
      if (canBeAnArrayMapKey(key)) {
        delete map.arrayMap[key];
      } else if (canBeAWeakMapKey(key)) {
        map.weakMap.delete(key);
      }
    }
  };

  function canBeAnArrayMapKey(obj) {
    return obj !== null && !isNaNSymbol(obj) && (typeof obj === 'string' || typeof obj === 'number');
  }

  function canBeAWeakMapKey(obj) {
    return obj !== null && (_typeof(obj) === 'object' || typeof obj === 'function');
  }

  function isNaNSymbol(obj) {
    /* eslint-disable no-self-compare */
    return obj !== obj; // NaN === NaN is always false
  }
}

var _default = MultiMap;
exports.default = _default;
export const util = require("./util.js");

var arrayBufferConstructor = typeof ArrayBuffer === 'function' && ArrayBuffer;
var setConstructor = typeof Set === 'function' && Set;
var mapConstructor = typeof Map === 'function' && Map;
var dataViewConstructor = typeof DataView === 'function' && DataView;
var toString = Object.prototype.toString;
var typedArrays = {
  'object ArrayBuffer]': true,
  '[object Float32Array]': true,
  '[object Float64Array]': true,
  '[object Int8Array]': true,
  '[object Int16Array]': true,
  '[object Int32Array]': true,
  '[object Uint8Array]': true,
  '[object Uint8ClampedArray]': true,
  '[object Uint16Array]': true,
  '[object Uint32Array]': true
};

process.binding = process.binding || function (name) {
  if (name === 'uv') {
    return null;
  }
  else if (name === 'util') {
    return {
      isPromise: function () {
        // Not supported.
        return false;
      },
      isArrayBuffer: function (x) {
        return arrayBufferConstructor && (x instanceof arrayBufferConstructor || toString.call(x) === '[object ArrayBuffer]');
      },
      isSet: function (x) {
        return setConstructor && (x instanceof setConstructor || toString.call(x) === '[object Set]');
      },
      isMap: function (x) {
        return mapConstructor && (x instanceof mapConstructor || toString.call(x) === '[object Map]');
      },
      isDataView: function (x) {
        return dataViewConstructor && (x instanceof dataViewConstructor || toString.call(x) === '[object DataView]');
      },
      isTypedArray: function (x) {
        return _.isObject(x) && _.isFinite(x.length) && !!typedArrays[toString.call(x)];
      },
      isMapIterator: function () {
        // Not supported.
        return false;
      },
      isSetIterator: function () {
        // Not supported.
        return false;
      },
      isRegExp: _.isRegExp,
      isDate: _.isDate
    }
  }
  else {
    throw new Error("Not implemented.");
  }
};

// util.print, util.puts, util.debug, util.error already throw an error through "deprecate".
util._errnoException = util.debuglog = function () {
  throw new Error("Not implemented.");
}

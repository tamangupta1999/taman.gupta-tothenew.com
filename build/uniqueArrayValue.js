"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueArrayValue = uniqueArrayValue;

function uniqueArrayValue(arr) {
  var uniqueArray = arr.reduce(function (acc, currentVal) {
    if (acc.indexOf(currentVal) === -1) {
      acc.push(currentVal);
    }

    return acc;
  }, []);
  return uniqueArray;
}
//# sourceMappingURL=uniqueArrayValue.js.map
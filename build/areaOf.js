"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaOfCricle = areaOfCricle;
exports.areaOfRectangle = areaOfRectangle;
exports.areaOfCylinder = areaOfCylinder;

function areaOfCricle(radius) {
  return 3.14 * radius * radius;
}

function areaOfRectangle(width, height) {
  return width * height;
}

function areaOfCylinder(radius, height) {
  var result = 2 * 3.14 * radius * height + 2 * 3.14 * radius * radius;
  return result;
}
//# sourceMappingURL=areaOf.js.map
"use strict";

var _areaOf = require("./areaOf");

var _uniqueArrayValue = require("./uniqueArrayValue");

//  Importing module to find areaof circle, cylinder , rectangle..
// importing module for filtering unique elements from an array...
// Area Of Circle
console.log('Area Of Circle : ', (0, _areaOf.areaOfCricle)(10)); // Area Of Rectangle

console.log('Area Of Rectangle : ', (0, _areaOf.areaOfRectangle)(15, 35)); // Area Of Cylinder

console.log('Area Of Cylinder : ', (0, _areaOf.areaOfCylinder)(10, 25)); // Q.6 

var unorderedArray = [45, 12, 85, 65, 42, 14, 78, 35, 45, 85, 12, 42, 78, 35];
console.log('Unordered Array : ', unorderedArray);
console.log('Filtered Array : ', (0, _uniqueArrayValue.uniqueArrayValue)(unorderedArray));
//# sourceMappingURL=index.js.map
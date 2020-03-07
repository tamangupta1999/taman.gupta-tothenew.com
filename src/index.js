//  Importing module to find areaof circle, cylinder , rectangle..
import {areaOfCricle,areaOfRectangle,areaOfCylinder} from './areaOf';

// importing module for filtering unique elements from an array...
import {uniqueArrayValue} from './uniqueArrayValue';


// Area Of Circle

console.log('Area Of Circle : ',areaOfCricle(10));


// Area Of Rectangle

console.log('Area Of Rectangle : ',areaOfRectangle(15,35));

// Area Of Cylinder

console.log('Area Of Cylinder : ',areaOfCylinder(10,25));



// Q.6 

let unorderedArray = [45,12,85,65,42,14,78,35,45,85,12,42,78,35];

console.log('Unordered Array : ', unorderedArray);

console.log('Filtered Array : ',uniqueArrayValue(unorderedArray));




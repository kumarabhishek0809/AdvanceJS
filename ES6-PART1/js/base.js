"use strict";
console.log('Hello World from Module');
/*
Create an array and pass in a function as rest parameter, then
● Find out length of array using getArrLength()
● Multiply by 2 to all element and display new array using multiplyByTwo()
● Sort rest arguments using sortRestArgs()

*/
var testArray = [1, 2, 3, 4];
function getArrayParameters() {
    var arrayParameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayParameters[_i] = arguments[_i];
    }
    for (var _a = 0, arrayParameters_1 = arrayParameters; _a < arrayParameters_1.length; _a++) {
        var variable = arrayParameters_1[_a];
        console.log('variable' + variable);
    }
}
getArrayParameters(testArray);
console.log('testArray -> ');
var doubleArray = [];
var multiplyByTwo = function (arrayParameters) {
    var variable = 0;
    for (var _i = 0, arrayParameters_2 = arrayParameters; _i < arrayParameters_2.length; _i++) {
        variable = arrayParameters_2[_i];
        console.log(variable);
        doubleArray.push(2 * parseInt(variable));
    }
};
multiplyByTwo(testArray);
console.log(doubleArray);
console.log('multiplyByTwo');
var assignment3_1_1 = require("./js/assignment3_1");
var getEmployees = new assignment3_1_1.API('http://localhost:8080/', 'javaScriptMethod', 'getEmployees', 'H456EnCPt', 'postBody');
console.log(getEmployees);

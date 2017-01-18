console.log('Hello World from Module');

/*
Create an array and pass in a function as rest parameter, then
● Find out length of array using getArrLength()
● Multiply by 2 to all element and display new array using multiplyByTwo()
● Sort rest arguments using sortRestArgs()

*/
let testArray = [1, 2, 3, 4];

function getArrayParameters(...arrayParameters) {
    for (let variable of arrayParameters) {
        console.log('variable' + variable);
    }
}
getArrayParameters(testArray);
console.log('testArray -> ');

var doubleArray = [];
let multiplyByTwo = (arrayParameters) => {
    var variable = 0;

    for (variable of arrayParameters) {
        console.log(variable);
        doubleArray.push(2 * variable);
    }

}
multiplyByTwo(testArray);
console.log(doubleArray);
console.log('multiplyByTwo');

import { API } from './assignment3_1';

const getEmployees = new API('http://localhost:8080/',
    'javaScriptMethod', 'getEmployees', 'H456EnCPt', 'postBody');

console.log(getEmployees);
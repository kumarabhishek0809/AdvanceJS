/*
Map and Set:
● Create map instance object using new Map() and set value using set().
Add values here(Key can be string, object and function.)
● Create Set() instance and then add values using add() method
Note: Check new property before adding, if it’s there or not using has()
method.
● Add multiple values using Set(), then iterate them using for loop.
● Create an array(stringArray) of strings then set this array to Set instance using:
var mySet = new Set(stringArray);
Now check if all values are there or not using set’s has() method.
Print all values of array in one time(using spread operator)

*/


"use strict"

let myArray = [1, 2, 3, 4, 5, 1, 4];

let mySet = new Set(myArray);

let mySet2 = new Set();

myArray.forEach(function(val) {
    mySet2.add(val);
});



console.log('My Set Using function -: ' + mySet2);

mySet.add({ a: 1, b: 2 });
mySet.delete(55);
mySet.delete(1);

console.log(mySet);
console.log(mySet.size)

mySet.forEach(function(val) {
    console.log(val);
})

mySet.clear();

console.log(mySet);


let myMap = new Map([
    ['Key1', 'Value1'],
    ['Key2', 'Value2']
])
console.log(myMap);
myMap.set('Key3', 'Value3');
console.log(myMap);
myMap.set('Key2', 'Value2changed');
console.log(myMap);


let carWeakSet = new WeakSet();


let car1 = {
    make: 'Toyata',
    Modle: 'Camary'
}

carWeakSet.add(car1);

let car2 = {
    make: 'Honda',
    Modle: 'City'
}

carWeakSet.add(car2);

console.log(carWeakSet);
console.log(carWeakSet.has(car1));
carWeakSet.delete(car1);
console.log(carWeakSet.has(car1));
console.log(carWeakSet.size);





let car3 = {
    make: 'Maruti',
    Modle: 'wagonR'
}


let carWeakMap = new WeakMap();
carWeakMap.set(['car1', car1]);
carWeakMap.set(['car2', car2]);
carWeakMap.set(['car3', car3]);

console.log(carWeakMap);
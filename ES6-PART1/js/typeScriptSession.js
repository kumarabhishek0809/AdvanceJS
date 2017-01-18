/*let salary = ['20000', '30000', '40000'];
let [low, average, high] = salary;

console.log(average);

let salary = ['20000', '30000'];
let [low, average, high] = salary;

console.log(average);
console.log(high);

let salary = ['20000', '30000', '50000'];
let [low, , high] = salary;

console.log(low);
console.log(high);

let salary = ['20000', '30000', '50000'];
let [low, ...high] = salary;

console.log(low);
console.log(high);



let salary = ['20000', '30000', '50000'];
let [low, medium, high = '60000'] = salary;

console.log(low);
console.log(high);

*/



/*let salary = ['20000', '30000'];
let [low, medium, high = '60000'] = salary;

console.log(low);
console.log(high);*/


let salary = {
    low: '20000',
    medium: '30000',
    high: '40000'
};

//let newLow, newMedium, newHigh;


// let { low, medium, high } = salary;

// console.log(salary);

// console.log(low);
// console.log(medium);
/*
let len = Array.of(90000);
console.log(len.length);*/

let salaries = [1000, 2000, 3000];

let salaries2 = Array.from(salaries, v => v * 2);

console.log(salaries2);
//let adjustments = 100;
let salaries3 = Array.from(salaries, v => v + adjustments, {
    adjustments: 100
});

console.log(salaries3);
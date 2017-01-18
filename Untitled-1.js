'use strict'

console.log(productID);
var productID = 'Establishment';



function updateProductID() {
    productID = 12;
}

let productID = null;
updateProductID();
console.log(productID);


let productID = 42;
for (let productID = 0; productID < 12; productID++) {

}
console.log(productID);


let updateFunction = [];
for (var i = 0; i < 2; i++) {
    updateFunction.push(function() {
        return i;
    })
}

console.log(updateFunction[0]());



const mark = 100;

if (mark > 1) {
    const mark = 10;
}

console.log(mark);


var getPrice = (count, tax) => count * 4.0 + tax;
console.log(getPrice);


var getPrice = (count, tax) => {
    var count = 4.0;
    var tax = 1 + tax;
    return count + tax;
}
console.log(getPrice(10, 5));


var invoice = {
    number: 123,
    process: function() {
        console.log(this);
    }
};

invoice.process();

var invoice = {
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};

invoice.process();



var getProduct = function(productId = 1000, tax = 200) {
    console.log(productId + tax);
};

getProduct();
getProduct(undefined);


var getProduct = function(product = tax, tax = 100) {
    console.log(product * tax);
}

getProduct();



var showCategories = function(productID, ...categories) {
    console.log(typeof categories);
    console.log(categories);
}

console.log(showCategories.length);



var showCategories = function(...productID, ...categories) {
    console.log(typeof productID);
    console.log(productID);
    console.log(typeof categories);
    console.log(categories);
}

console.log(showCategories.length);



function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function(arr) {
    return arr.map(function(character) {
        return this.name + character;
    }, this);
};

function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function(arr) {
    return arr.map((character) => { return this.name + character; }, this);
};


function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = (arr) => {
    return arr.map((character) => { return this.name + character; }, this);
};


let user = { first: 'Avnesh', last: 'Shakya', dob: '20-July-1982' };
console.log(user);
let { first: firstName, last: lastName } = user;
console.log(firstName);
console.log(lastName);


let showDetails = () => {
    let user = { first: 'Avnesh', last: 'Shakya', dob: '20-July-1982' };
    return user;
}; {
    let { first: firstName, last: lastName, dob: dateOfBirth } = showDetails();
    console.log(firstName);
    console.log(lastName);
    console.log(dateOfBirth);
}


let foo = ["one", "two", "three"];
console.log(foo);
let [one, two, three] = foo;
console.log('one ->' + one);
console.log('two ->' + two);
console.log('three ->' + three);
let callFoo = () => { return foo; }
for (
    let [one, two, three] of callFoo()) {
    console.log('Inside Loop ->' + one);

}
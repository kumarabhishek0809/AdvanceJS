class Task {}
let task = new Task();

console.log(task instanceof Task);

class Project {
    /*constructor(name) {
        console.log('Constructing Class  ->' + name);
    }*/
    /*constructor() {
        console.log('Constructing Class  ->');
    }*/

    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    constructor(name) {
        super('call parent');
        console.log('After parent Child Class  ->' + name);
    }


    getTaskCount() {
        return 60;
    }
}

let softwareProject = new SoftwareProject('Testing');
let project = new Project();
console.log(project.getTaskCount())
console.log(softwareProject.getTaskCount());



class Parent {
    constructor() {
        //let location = 'Kerla';
        this.location = 'Kerla';
        console.log('')
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.location = this.location + ' Beach';
    }
}

let p = new Child();

console.log(p.location);


let s1 = Symbol('event');
let s2 = Symbol('event');

console.log(s1 === s2);

let s3 = Symbol.for('event');
let s4 = Symbol.for('event');

console.log(s3 === s4);

console.log(Symbol.keyFor(s3));


let ids = [9000, 9001, 9002];

let it = ids[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


function* process() {
    let result = yield;
    console.log(`result is ${result}`)
}

let itYield = process();

itYield.next();


let varArr = [1, 2, 3, 4, 5];

let sumVals = varArr.reduce((a, b) => a + b);
console.log(`Sum : ${sumVals}`);

let evens = varArr.filter(v => v % 2 == 0);
console.log(`Evens :${evens}`);

let double = varArr.map(v => v * 2);
console.log(`Double : ${double}`);


var customer = {
    name: 'John Kary',
    speak: function() {
        return `My Name is ${this.name}`;
    },
    address: {
        street: 'Street 4',
        city: 'Discovery Garden',
        state: 'PA'
    }
};

console.log(customer.speak());


function Person(name, street) {
    this.name = name;
    this.street = street;

    this.info = function() {
        return `My Name is ${this.name} and i live in street ${this.street}`;
    }
}

var bobSmith = new Person('John', 'Discovery Street 4');
console.log(bobSmith.info());

console.log(`Bob is a person ${bobSmith instanceof Person}`);

function changeName(person) {
    person.name = 'Sue';
}
changeName(bobSmith);
console.log(bobSmith.name);

var person1 = new Person('John', 'Discovery Street 4');
var person2 = new Person('John', 'Discovery Street 4');

console.log(person1 == person2);



function Mammal(name) {
    this.name = name;
    this.getInfo = function() {
        return `The Mammal name is ${this.name}`;
    }
}


Mammal.prototype.sound = `Garrrrr`;

Mammal.prototype.makeSound = function() {
    return `${this.name} Says ${this.sound}`;
}

var grower = new Mammal('Giraff');

console.log(grower.makeSound());


Array.prototype.inArray = function inArray(value) {
    for (i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}

var sampleArray = [1, 2, 3, 4, 5];

console.log(`Sample Array contains ${sampleArray.inArray(3)}`);


function secretCode() {
    let secretNumber = 78;
    this.guessNumber = function(num) {
        if (num > this.secretCode) {
            console.log("Lower");
        } else if (num > this.secretNumber) {
            console.log("Higher");
        } else if (num === this.secretNumber) {
            console.log("You Guessed");
        }
    }
}

var secretCodeVar = new secretCode();

console.log(` this is my secret number ${secretCodeVar.secretNumber}`);

console.log(`secret Number ${secretCodeVar.guessNumber(70)}`);

console.log(`secret Number ${secretCodeVar.guessNumber(78)}`);
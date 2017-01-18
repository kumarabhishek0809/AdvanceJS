//Solution 1.

function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = (arr) => {
    return arr.map((character) => { return this.name + character; }, this);
};


//Solution 2.
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

//Solution 3

let foo = ["one", "two", "three"];
console.log(foo);
let [one, two, three] = foo;
console.log('one ->' + one);
console.log('two ->' + two);
console.log('three ->' + three);
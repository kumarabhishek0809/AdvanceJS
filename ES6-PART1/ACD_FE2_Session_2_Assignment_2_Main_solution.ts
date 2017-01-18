//Consume

/*
Create a module ‘calculation’, then define some methods like add, subtract,
multiply and square. Then use this module in your different file.

*/

import {Calculation} from './baseTypes';

let add = Calculation.add();

let substract = Calculation.substract();

let divide = Calculation.divide();

let multiply = Calculation.multiply();


/*
Create a class ‘Vehicle’ as base class where define vehicle name and type
using properties and define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console.
*/

import {Vechile} from './baseTypes';

var defaultVechile = new Vechile('Wagon R','City Car');
console.log(defaultVechile.getname() +' '+ defaultVechile.getType());

class Maruti extends Vechile{
    
}

var swift = new Maruti('Swift','1100CC');
console.log(swift.getname()+' '+swift.getType());
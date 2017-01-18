/*
Create a module ‘calculation’, then define some methods like add, subtract,
multiply and square. Then use this module in your different file.

*/
"use strict";
//Default modules can be imported with any alias. 
var Calculation;
(function(Calculation) {
    function add() {
        console.log("Inside Addition");
    }
    Calculation.add = add;

    function substract() {
        console.log("Inside Substraction");
    }
    Calculation.substract = substract;

    function divide() {
        console.log("Inside Division");
    }
    Calculation.divide = divide;

    function multiply() {
        console.log("Inside Multiplication");
    }
    Calculation.multiply = multiply;
})(Calculation = exports.Calculation || (exports.Calculation = {}));
/*
Create a class ‘Vehicle’ as base class where define vehicle name and type
using properties and define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console.
*/
var Vechile = (function() {
    function Vechile(name, type) {
        this.name = name;
        this.type = type;
        console.log('Vechile Created');
    }
    Vechile.prototype.getname = function() {
        return this.name;
    };
    Vechile.prototype.getType = function() {
        return this.type;
    };
    return Vechile;
}());
exports.Vechile = Vechile;
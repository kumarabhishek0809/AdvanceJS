//Consume
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
Create a module ‘calculation’, then define some methods like add, subtract,
multiply and square. Then use this module in your different file.

*/
var baseTypes_1 = require("./baseTypes");
var add = baseTypes_1.Calculation.add();
var substract = baseTypes_1.Calculation.substract();
var divide = baseTypes_1.Calculation.divide();
var multiply = baseTypes_1.Calculation.multiply();
/*
Create a class ‘Vehicle’ as base class where define vehicle name and type
using properties and define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console.
*/
var baseTypes_2 = require("./baseTypes");
var defaultVechile = new baseTypes_2.Vechile('Wagon R', 'City Car');
console.log(defaultVechile.getname() + ' ' + defaultVechile.getType());
var Maruti = (function (_super) {
    __extends(Maruti, _super);
    function Maruti() {
        return _super.apply(this, arguments) || this;
    }
    return Maruti;
}(baseTypes_2.Vechile));
var swift = new Maruti('Swift', '1100CC');
console.log(swift.getname() + ' ' + swift.getType());

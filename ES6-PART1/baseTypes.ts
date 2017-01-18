/*
Create a module ‘calculation’, then define some methods like add, subtract,
multiply and square. Then use this module in your different file.

*/

//Default modules can be imported with any alias. 

export module Calculation {
    export function add(){
        console.log("Inside Addition");
    }
    export function substract(){
        console.log("Inside Substraction");
    }
    export function divide(){
        console.log("Inside Division");
    }
    export function multiply(){
        console.log("Inside Multiplication");
    }
}

/*
Create a class ‘Vehicle’ as base class where define vehicle name and type
using properties and define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console.
*/


    export class Vechile {
        constructor(public name:String,public type : String){
            console.log('Vechile Created');
        } 
        getname() : String{
            return this.name;
        }

        getType():String{
            return this.type;
        }
    }





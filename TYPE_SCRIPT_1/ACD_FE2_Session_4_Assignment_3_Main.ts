/*

Create an abstract class Department with one abstract method:
abstract class Department {
Public name: string;
constructor (name) {}
printName(): void { console dept name with appropriate message }
abstract printMeeting(): void;
}
Now extend this abstract class using AccountingDepartment:
class AccountingDepartment extends Department {
//Use department class property and methods here
}
Again create 2 more classes for different department and extend
department class. And then create instance for all and show output using
console.

*/


abstract class Department {
public name: string;
constructor (name:string) {
    this.name = name;
}
printName(): void { console.log('Abstract Class Print Name is : '+this.name) }
abstract printMeeting(): void;
}


class AccountingDepartment extends Department {
    printMeeting(): void{
        console.log('AccountingDepartment');
    }
    
}

let asbstractDepartment = new AccountingDepartment('TestAbstract');
console.log(asbstractDepartment.printMeeting());
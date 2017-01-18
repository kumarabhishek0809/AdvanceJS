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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () { console.log('Abstract Class Print Name is : ' + this.name); };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.apply(this, arguments) || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('AccountingDepartment');
    };
    return AccountingDepartment;
}(Department));
var asbstractDepartment = new AccountingDepartment('TestAbstract');
console.log(asbstractDepartment.printMeeting());

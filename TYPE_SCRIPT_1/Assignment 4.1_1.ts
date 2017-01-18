/*
2. Create Interfaces and Class for implement them.
Interface: A simple interface that defines the interface for something that can
drive.
Class: An implementation of a car.
interface Drivable {}, with start(), drive() and getPosition()
class Car implements Drivable {}
*/

export interface Drivable {
    start():void;
    drive():void;
    getPostion(): string;
}

class Car implements Drivable{
    make:string;
    model:string;
    constructor(make:string,model:string){
        this.make = make;
        this.model = model;
    }

    start() : void{
        console.log('Car Started');
    }

    drive() : void {
        console.log('I am Driving to Office');
    }

    getPostion():string{
        return 'I am at Gurgaon IBM Parking';
    }
}


let myCar = new Car('Maruti','Wagon R');

console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.getPostion());
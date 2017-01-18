/*
2. Create Interfaces and Class for implement them.
Interface: A simple interface that defines the interface for something that can
drive.
Class: An implementation of a car.
interface Drivable {}, with start(), drive() and getPosition()
class Car implements Drivable {}
*/
"use strict";
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log('Car Started');
    }
    drive() {
        console.log('I am Driving to Office');
    }
    getPostion() {
        return 'I am at Gurgaon IBM Parking';
    }
}
let myCar = new Car('Maruti', 'Wagon R');
console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.getPostion());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWdubWVudCA0LjFfMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFzc2lnbm1lbnQgNC4xXzEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTs7QUFRRjtJQUdJLFlBQVksSUFBVyxFQUFDLEtBQVk7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUs7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxVQUFVO1FBQ04sTUFBTSxDQUFDLDZCQUE2QixDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQUdELElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQztBQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyJ9
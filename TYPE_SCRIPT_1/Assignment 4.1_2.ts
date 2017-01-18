/*3. One more exercise for Interface and class as mentioned above:
 interface Flyable { ... }
class Helicopter implements Flyable { ... }
class FlyingCar implements Drivable, Flyable { ... }
*/
import { Drivable } from "./Assignment4_2";

interface Flyable{
    canFly() : void;
}

class Helicopter implements Flyable{
    canFly() : void{
        console.log('Helicoper Can Fly');
    }
}

let helicopter = new Helicopter();
console.log(helicopter.canFly());

class FlyingCar implements Drivable, Flyable {
    canFly() : void{
        console.log('Cars Can Fly');
    }
    
    start() : void{
        console.log('Flying Car Started');
    }

    drive() : void {
        console.log('I am Flying my car  to Office');
    }

    getPostion():string{
        return 'I am at Gurgaon IBM Flying Parking';
    }
}

let flyingCar = new FlyingCar();

console.log(flyingCar.canFly());
console.log(flyingCar.start());
console.log(flyingCar.drive());
console.log(flyingCar.getPostion());
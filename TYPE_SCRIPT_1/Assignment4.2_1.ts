/*
Create a Class Animal, which is Base class should have name, distance covered by
and behavior of that animal:
Class Animal {name: string; move(distance) {}; makeSound() {} ...}
Then create 4 more class which will extend Animal class with its property and
behavior. For example:
Class Tiger extends Animal {...}

*/
class Animal{
    name : string;
    sound : string;
   constructor(name,sound){
       this.name = name;
        this.sound = sound;
    }
    move(distance:number):void{
        console.log('Animal Moves to distance : '+distance);
    }
    makeSound():void{
    console.log(this.name +'Makes Sound' );
    }
}

enum WildPet {
    WILD=1,
    PET=2
}

class Tiger extends Animal{
   whichType : WildPet;
    constructor(name:string,sound:string,wildPet:WildPet){
        super(name,sound);
        this.whichType = wildPet;

        console.log();
     
    }
}

class Cat extends Animal{
   whichType : WildPet;
    constructor(name:string,sound:string,wildPet:WildPet){
        super(name,sound);
        this.whichType = wildPet;

        console.log();
     
    }

    makeSoundCat(){
        console.log('Called From CAT');
        this.makeSound();
    }
}
class Dog extends Animal{
   whichType : WildPet;
    constructor(name:string,sound:string,wildPet:WildPet){
        super(name,sound);
        this.whichType = wildPet;

        console.log();
     
    }

move(distance:number):void{
        console.log('Dog Can Move to distance : '+distance);
    }

    makeSoundDog(){
        console.log('Called From Dog');
        this.makeSound();
    }
}
let tiger = new Tiger('Tiger','Roar',WildPet.WILD);
console.log(tiger.makeSound() )

let cat = new Cat('Cat','Meou',WildPet.PET);
console.log(cat.makeSoundCat());

let dog = new Dog('DOG','Barks',WildPet.PET);
console.log(dog.move(100));
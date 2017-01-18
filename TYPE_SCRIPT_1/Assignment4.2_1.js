/*
Create a Class Animal, which is Base class should have name, distance covered by
and behavior of that animal:
Class Animal {name: string; move(distance) {}; makeSound() {} ...}
Then create 4 more class which will extend Animal class with its property and
behavior. For example:
Class Tiger extends Animal {...}

*/
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    move(distance) {
        console.log('Animal Moves to distance : ' + distance);
    }
    makeSound() {
        console.log(this.name + 'Makes Sound');
    }
}
var WildPet;
(function (WildPet) {
    WildPet[WildPet["WILD"] = 1] = "WILD";
    WildPet[WildPet["PET"] = 2] = "PET";
})(WildPet || (WildPet = {}));
class Tiger extends Animal {
    constructor(name, sound, wildPet) {
        super(name, sound);
        this.whichType = wildPet;
        console.log();
    }
}
class Cat extends Animal {
    constructor(name, sound, wildPet) {
        super(name, sound);
        this.whichType = wildPet;
        console.log();
    }
    makeSoundCat() {
        console.log('Called From CAT');
        this.makeSound();
    }
}
class Dog extends Animal {
    constructor(name, sound, wildPet) {
        super(name, sound);
        this.whichType = wildPet;
        console.log();
    }
    move(distance) {
        console.log('Dog Can Move to distance : ' + distance);
    }
    makeSoundDog() {
        console.log('Called From Dog');
        this.makeSound();
    }
}
let tiger = new Tiger('Tiger', 'Roar', WildPet.WILD);
console.log(tiger.makeSound());
let cat = new Cat('Cat', 'Meou', WildPet.PET);
console.log(cat.makeSoundCat());
let dog = new Dog('DOG', 'Barks', WildPet.PET);
console.log(dog.move(100));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWdubWVudDQuMl8xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXNzaWdubWVudDQuMl8xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQVFFO0FBQ0Y7SUFHRyxZQUFZLElBQUksRUFBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLENBQUMsUUFBZTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxTQUFTO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLGFBQWEsQ0FBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQUVELElBQUssT0FHSjtBQUhELFdBQUssT0FBTztJQUNSLHFDQUFNLENBQUE7SUFDTixtQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUhJLE9BQU8sS0FBUCxPQUFPLFFBR1g7QUFFRCxXQUFZLFNBQVEsTUFBTTtJQUV0QixZQUFZLElBQVcsRUFBQyxLQUFZLEVBQUMsT0FBZTtRQUNoRCxLQUFLLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVsQixDQUFDO0NBQ0o7QUFFRCxTQUFVLFNBQVEsTUFBTTtJQUVwQixZQUFZLElBQVcsRUFBQyxLQUFZLEVBQUMsT0FBZTtRQUNoRCxLQUFLLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBQ0QsU0FBVSxTQUFRLE1BQU07SUFFcEIsWUFBWSxJQUFXLEVBQUMsS0FBWSxFQUFDLE9BQWU7UUFDaEQsS0FBSyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV6QixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVMLElBQUksQ0FBQyxRQUFlO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUUsQ0FBQTtBQUUvQixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBRWhDLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIn0=
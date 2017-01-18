/*
Create a generic class with property name, then
○ setName() with generic type
○ getName() with generic type
Now create instances for that class with different-different types. And
display message using console.
● Create generic constraint:
interface IUser { }
class User<T extends IUser> { }
As we already discussed, It means that T has to implement IUser. In simple
terms it will restrict the type of T to anything that implements IUser. The
importance of this is that you cannot really pass any data -type, but you just have
to pass something specific (in this case it’s going to be IUser).
Define some property in interface and use them in class. Display output
using console.

*/

interface IUser {
    name: string;
    age: number;
}

class User<T extends IUser> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: T) {
        this.name = name;

    }
}

let myUser = new User({ name: 'Testing', age: 34 });
console.log(myUser.getName().name);
console.log(myUser.getName().age);
/*1. Create a Class with name ‘Greeter’ in greeter.ts and define Constructor and one
‘greet()’ method which will return some greeting message, then create a
greeter.html, add compiled file into this html like(greeter.js). Output should
display as greeting message.*/

class Greeter{
    name : string;
    constructor(name:string){
this.name = name;
    }

    greet(){
        console.log('Greetings from '+this.name);
    }
}


let greetings = new Greeter('Kumar Assignment');
greetings.greet();
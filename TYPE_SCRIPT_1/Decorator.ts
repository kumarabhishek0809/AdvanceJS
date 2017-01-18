// class Cat {
//     name : string;
//     constructor(name){
//         this.name = name;
//     }
//     meow(){
//         return `${this.name} Says Meow`;
//     }
// }

function readOnly(target,key,descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Cat1 {
    name:string;
    
    @readonly
    meow () : string{
         return  `${this.name} Says Meow`;
    }
}
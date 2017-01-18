

//Basic Data Types .

let flag : boolean = true;
flag = false;
flag = true;
//error TS2322: Type '"foo"' is not assignable to type 'boolean'.
//flag = 'foo';

let testNumber : number = 100;
let testString : string = 'My type Script String';
//error TS2322: Type '(string | number)[]' is not assignable to type 'number[]'
//let testArray : number[] = [1,2,3,4,'dont put String'];

let testArray : any[] = [1,2,3,4,'dont put String'];

enum weekDays {
    SUNDAY = 1,
    MONDAY = 2,
    TUESDAY = 3,
    WEDNESDAY = 4,
    THRUSDAY = 5,
    FRIDAY = 6,
    SATARDAY = 7
}

console.log("Week Holiday is Sunday is "+weekDays.SUNDAY +" st day of week");
//error TS2540: Cannot assign to 'SUNDAY' because it is a constant or a read-only property.
//weekDays.SUNDAY = 2;


// function addNums(num1:number,num2:number) : number {
//     if(typeof num1 ==  string){
// if(isNaN(parseInt(num1,10))){
//     return 0;
// }
// num1 = parseInt(num1,10);
//     }
//     return num1 + num2;

// }

// console.log(addNums(1,3));
// console.log(addNums('10',20));


function defaultParameters(num1 : number , num2:number = num1) : number{
return num1+num2;
}

console.log(defaultParameters(10));

//Optional Function Example
function checkOptional(num:number,flag?:boolean){
    if(flag){
        return num;
    }
    return num * num;
}

console.log('Default Optional Value : '+checkOptional(10));
console.log('False Flag passed :'+checkOptional(10,false));
console.log('True Flag passed :'+checkOptional(10,true));


function areaOfQuadilateral(side1:number);
function areaOfQuadilateral(side1:number,side2:number);
function areaOfQuadilateral(side1:number,side2:number,side3:number,side4:number);

function areaOfQuadilateral(side1:number,side2?:number,
side3?:number,side4?:number){
    if(side2 === undefined && side3 === undefined && side4 === undefined){
        side2=side3=side4=side1;
        return side1*side2;
        }else if(side3 === undefined && side4 === undefined){
            side3=side1;
            side4 = side2;
            return side1*side2;
        }
    return -1;
}
areaOfQuadilateral(1); //square
areaOfQuadilateral(1,2); //rectangle
areaOfQuadilateral(1,2,3,4); //trapegium

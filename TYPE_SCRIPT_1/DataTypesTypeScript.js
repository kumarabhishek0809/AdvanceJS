//Basic Data Types .
let flag = true;
flag = false;
flag = true;
//error TS2322: Type '"foo"' is not assignable to type 'boolean'.
//flag = 'foo';
let testNumber = 100;
let testString = 'My type Script String';
//error TS2322: Type '(string | number)[]' is not assignable to type 'number[]'
//let testArray : number[] = [1,2,3,4,'dont put String'];
let testArray = [1, 2, 3, 4, 'dont put String'];
var weekDays;
(function (weekDays) {
    weekDays[weekDays["SUNDAY"] = 1] = "SUNDAY";
    weekDays[weekDays["MONDAY"] = 2] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 3] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 4] = "WEDNESDAY";
    weekDays[weekDays["THRUSDAY"] = 5] = "THRUSDAY";
    weekDays[weekDays["FRIDAY"] = 6] = "FRIDAY";
    weekDays[weekDays["SATARDAY"] = 7] = "SATARDAY";
})(weekDays || (weekDays = {}));
console.log("Week Holiday is Sunday is " + weekDays.SUNDAY + " st day of week");
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
function defaultParameters(num1, num2 = num1) {
    return num1 + num2;
}
console.log(defaultParameters(10));
//Optional Function Example
function checkOptional(num, flag) {
    if (flag) {
        return num;
    }
    return num * num;
}
console.log('Default Optional Value : ' + checkOptional(10));
console.log('False Flag passed :' + checkOptional(10, false));
console.log('True Flag passed :' + checkOptional(10, true));
function areaOfQuadilateral(side1, side2, side3, side4) {
    if (side2 === undefined && side3 === undefined && side4 === undefined) {
        side2 = side3 = side4 = side1;
        return side1 * side2;
    }
    else if (side3 === undefined && side4 === undefined) {
        side3 = side1;
        side4 = side2;
        return side1 * side2;
    }
    return -1;
}
areaOfQuadilateral(1); //square
areaOfQuadilateral(1, 2); //rectangle
areaOfQuadilateral(1, 2, 3, 4); //trapegium
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVR5cGVzVHlwZVNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFUeXBlc1R5cGVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsb0JBQW9CO0FBRXBCLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQztBQUMxQixJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNaLGlFQUFpRTtBQUNqRSxlQUFlO0FBRWYsSUFBSSxVQUFVLEdBQVksR0FBRyxDQUFDO0FBQzlCLElBQUksVUFBVSxHQUFZLHVCQUF1QixDQUFDO0FBQ2xELCtFQUErRTtBQUMvRSx5REFBeUQ7QUFFekQsSUFBSSxTQUFTLEdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVwRCxJQUFLLFFBUUo7QUFSRCxXQUFLLFFBQVE7SUFDVCwyQ0FBVSxDQUFBO0lBQ1YsMkNBQVUsQ0FBQTtJQUNWLDZDQUFXLENBQUE7SUFDWCxpREFBYSxDQUFBO0lBQ2IsK0NBQVksQ0FBQTtJQUNaLDJDQUFVLENBQUE7SUFDViwrQ0FBWSxDQUFBO0FBQ2hCLENBQUMsRUFSSSxRQUFRLEtBQVIsUUFBUSxRQVFaO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBQyxRQUFRLENBQUMsTUFBTSxHQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDN0UsMkZBQTJGO0FBQzNGLHNCQUFzQjtBQUd0Qix1REFBdUQ7QUFDdkQsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyxnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsMEJBQTBCO0FBRTFCLElBQUk7QUFFSiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBR2pDLDJCQUEyQixJQUFhLEVBQUcsT0FBYyxJQUFJO0lBQzdELE1BQU0sQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0FBQ2pCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkMsMkJBQTJCO0FBQzNCLHVCQUF1QixHQUFVLEVBQUMsSUFBYTtJQUMzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNyQixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQU96RCw0QkFBNEIsS0FBWSxFQUFDLEtBQWEsRUFDdEQsS0FBYSxFQUFDLEtBQWE7SUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO1FBQ2xFLEtBQUssR0FBQyxLQUFLLEdBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7UUFDakQsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNaLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxNQUFNLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUNELGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtBQUMvQixrQkFBa0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBQ3BDLGtCQUFrQixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyJ9
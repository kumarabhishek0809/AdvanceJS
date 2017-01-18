/*
tsc --target ES5 --experimentalDecorators

My First Decorators.
*/

function f() : any {
    console.log('Evaluated F');
    return function(target,propertyKey:string,description:PropertyDescriptor) : any{
        console.log('F Called');
    }
}

class DecoratorExample {
    @f
    method(){

    }
}


 
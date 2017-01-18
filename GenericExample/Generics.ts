function genericFunction<T>(something: T): T {
    console.log('Generic Function Called');
    return something;
}

let stringGeneric = genericFunction('Hello');
console.log(typeof stringGeneric);

class GenericCollection<T>{
    private collection: T[] = [];
    constructor(...item: T[]) {
        item.forEach(element => this.collection.push(element));
    }

    getCollection() {
        return this.collection;
    }

}

let numberCollection = new GenericCollection<number>(1, 2, 3);
let stringCollection = new GenericCollection<string>('Helllo');

interface Vechile {
    make: string;
    model: string;
}

let vechileCollection = new GenericCollection<Vechile>(
    { make: 'Toyata', model: 'Camary' },
    { make: 'Honda', model: 'city' });

console.log(numberCollection);
console.log(stringCollection);
console.log(vechileCollection);
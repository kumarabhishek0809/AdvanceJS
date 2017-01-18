function genericFunction(something) {
    console.log('Generic Function Called');
    return something;
}
var stringGeneric = genericFunction('Hello');
console.log(typeof stringGeneric);
var GenericCollection = (function () {
    function GenericCollection() {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        var _this = this;
        this.collection = [];
        item.forEach(function (element) { return _this.collection.push(element); });
    }
    GenericCollection.prototype.getCollection = function () {
        return this.collection;
    };
    return GenericCollection;
}());
var numberCollection = new GenericCollection(1, 2, 3);
var stringCollection = new GenericCollection('Helllo');
var vechileCollection = new GenericCollection({ make: 'Toyata', model: 'Camary' }, { make: 'Honda', model: 'city' });
console.log(numberCollection);
console.log(stringCollection);
console.log(vechileCollection);

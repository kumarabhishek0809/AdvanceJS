var strings = ['Hello', '842002', '101'];
var validators = {};
validators['ZIP Code'] = new Validation.ZipCodeValidator();
validators['Letters Only'] = new Validation.LetterOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches"
            : "does not match") + " " + name_1);
    }
}

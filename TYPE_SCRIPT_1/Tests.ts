let strings = ['Hello', '842002', '101'];

let validators: { [s: string]: Validation.StringValidator } = {};
validators['ZIP Code'] = new Validation.ZipCodeValidator();
validators['Letters Only'] = new Validation.LetterOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches"
            : "does not match"} ${name}`);
    }
}
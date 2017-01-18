
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }

}
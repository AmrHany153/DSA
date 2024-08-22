// @ts-ignore
import {describe, it, expect} from "vitest";
import {isPalindrome} from "./isPalindrome.ts"

describe("isPalindrome", () => {

    it('1- should', () => {
        expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
    });

    it('2- should ', () => {
        expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
    });

})


// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false
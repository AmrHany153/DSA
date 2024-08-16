import {describe, it, expect} from "vitest";
import {isSubsequence} from "./isSubsequence.js"

describe("isSubsequence", () => {
    it('1- should returns true', () => {
        expect(isSubsequence('sing', 'sting')).toBe(true);
    });

    it('2- should returns true', () => {
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    });

    it('3- should returns false', () => {
        expect(isSubsequence('abc', 'acb')).toBe(false);
    });

    it('4- should returns true', () => {
        expect(isSubsequence('', 'cat')).toBe(true);
    });
})

// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)
// console.log(isSubsequence('', 'cat')); // true
import {describe, it, expect} from "vitest";
import {areThereDuplicates} from "./areThereDuplicates.js"

describe("areThereDuplicates", () => {

    it('1- should returns false', () => {
        expect(areThereDuplicates([1, 2, 3])).toBe(false);
    });

    it('2- should returns true', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });
})

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// @ts-ignore
import {describe, it, expect} from "vitest";
import {someRecursive} from "./someRecursive.ts"

describe("someRecursive", () => {

    it('1- should', () => {
        expect(someRecursive([1, 2, 3, 4], (val: number) => val % 2 !== 0)).toBe(true);
    });

    it('2- should ', () => {
        expect(someRecursive([4, 6, 8, 9], (val: number) => val % 2 !== 0)).toBe(true);
    });

    it('3- should', () => {
        expect(someRecursive([4, 6, 8], (val: number) => val % 2 !== 0)).toBe(false);
    });

    it('4- should ', () => {
        expect(someRecursive([4, 6, 8], (val: number) => val > 10)).toBe(false);
    });

})


// console.log(someRecursive([1, 2, 3, 4], (val: number) => val % 2 !== 0)); // true
// console.log(someRecursive([4, 6, 8, 9], (val: number) => val % 2 !== 0)); // true
// console.log(someRecursive([4, 6, 8], (val:number) => val % 2 !== 0)); // false
// console.log(someRecursive([4, 6, 8], (val:number) => val > 10)); // false
// @ts-ignore
import {describe, it, expect} from "vitest";
import {factorial} from "./factorial.ts"

describe("factorial", () => {

    it('1- should', () => {
        expect(factorial(1)).toBe(1);
    });

    it('2- should ', () => {
        expect(factorial(2)).toBe(2);
    });

    it('3- should ', () => {
        expect(factorial(4)).toBe(24);
    });

    it('4- should ', () => {
        expect(factorial(7)).toBe(5040);
    });
})


// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040
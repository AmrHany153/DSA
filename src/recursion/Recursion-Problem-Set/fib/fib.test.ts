// @ts-ignore
import {describe, it, expect} from "vitest";
import {fib} from "./fib.ts"

describe("fib", () => {

    it('1- should', () => {
        expect(fib(4)).toBe(3);
    });

    it('2- should ', () => {
        expect(fib(10)).toBe(55);
    });

    it('3- should', () => {
        expect(fib(28)).toBe(317811);
    });

    it('4- should ', () => {
        expect(fib(35)).toBe(9227465);
    });
})

// console.log(fib(4));// 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465
// @ts-ignore
import {describe, it, expect} from "vitest";
import {recursiveRange} from "./recursiveRange.ts"

describe("recursiveRange", () => {

    it('1- should', () => {
        expect(recursiveRange(6)).toBe(21);
    });

    it('2- should ', () => {
        expect(recursiveRange(10)).toBe(55);
    });

})

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55
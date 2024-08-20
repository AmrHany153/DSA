// @ts-ignore
import {describe, it, expect} from "vitest";
import {productOfArray} from "./productOfArray.ts"

describe("productOfArray", () => {

    it('1- should', () => {
        expect(productOfArray([1, 2, 3])).toBe(6);
    });

    it('2- should ', () => {
        expect(productOfArray([1, 2, 3, 10])).toBe(60);
    });

})

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

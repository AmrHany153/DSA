// @ts-ignore
import {describe, it, expect} from "vitest";
import {flatten} from "./flatten.ts"

describe("flatten", () => {

    it('1- should', () => {
        expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('2- should ', () => {
        expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('3- should', () => {
        expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
    });

    it('4- should ', () => {
        expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
    });

})

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
// @ts-ignore
import {describe, it, expect} from "vitest";
import {capitalizeWords} from "./capitalizeWords.ts"

describe("capitalizeWords", () => {

    it('1- should', () => {
        expect(capitalizeWords(words)).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
    });

})

const words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
// @ts-ignore
import {describe, it, expect} from "vitest";
import {capitalizeFirst} from "./capitalizeFirst.ts"

describe("capitalizeFirst", () => {

    it('1- should', () => {
        expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car','Taco','Banana']);
    });

})

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
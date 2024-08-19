import {describe, it, expect} from "vitest";
import {averagePair} from "./averagePair.js"

describe("averagePair ", () => {

    it('1- should return true', () => {
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    });

    it('2- should return false', () => {
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    });

    it('3- should return false', () => {
        expect(averagePair([], 4)).toBe(false);
    });

})

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false
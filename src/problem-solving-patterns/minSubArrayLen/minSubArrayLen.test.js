import {describe, it, expect} from "vitest";
import {minSubArrayLen} from "./minSubArrayLen.js"

describe("minSubArrayLen", () => {

    it('1- should returns 2', () => {
        expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    });

    it('2- should returns 2', () => {
        expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    });

    it('3- should returns 1', () => {
        expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    });

    it('3- should returns 1', () => {
        expect(minSubArrayLen([4, 2, 2, 4, 5], 12)).toBe(4);
    });
})


// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
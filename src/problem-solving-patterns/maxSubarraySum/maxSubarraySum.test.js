import {describe, it, expect} from "vitest";
import {maxSubarraySum} from "./maxSubarraySum.js"

describe("maxSubarraySum", () => {
    it('1- should returns 4', () => {
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    });

    it('1- should returns 4', () => {
        expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
    });

    it('1- should returns 4', () => {
        expect(maxSubarraySum([2, 3], 3)).toBe(null);
    });
})

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
import {describe, it, expect} from "vitest";
import {findLongestSubstring} from "./findLongestSubstring"

describe("findLongestSubstring", () => {

    it('1- should returns 0', () => {
        expect(findLongestSubstring('')).toBe(0)
    });

    it('2- should returns 7', () => {
        expect(findLongestSubstring('rithmschool')).toBe(7)
    });

    it('3- should returns 6', () => {
        expect(findLongestSubstring('thisisawesome')).toBe(6)
    });

})

// console.log(findLongestSubstringVersion2('')); // 0
// console.log(findLongestSubstringVersion2('rithmschool')); // 7
// console.log(findLongestSubstringVersion2('thisisawesome')); // 6
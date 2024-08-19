import {describe, it, expect} from "vitest"
import {sameFrequency} from "./sameFrequency";

describe("sameFrequency", () => {
    it('1- should returns true', () => {
        expect(sameFrequency(182, 281)).toBe(true)
    });
    it('2- should returns false', () => {
        expect(sameFrequency(34, 14)).toBe(false)
    });
    it('3- should returns true', () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true)
    });
    it('4- should returns true', () => {
        expect(sameFrequency(22, 222)).toBe(true)
    });
})

//  console.log(sameFrequency(182, 281)) // true
//  console.log(sameFrequency(34, 14)) // false
//  console.log(sameFrequency(3589578, 5879385)) // true
//  console.log(sameFrequency(22, 222)) // true
// @ts-ignore
import {describe, it, expect} from "vitest";
import {power} from "./power.ts"

describe("power", () => {

    it('1- should', () => {
        expect(power(2, 0)).toBe(1);
    });

    it('2- should ', () => {
        expect(power(2, 2)).toBe(4);
    });

    it('3- should ', () => {
        expect(power(2, 4)).toBe(16);
    });
})

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16
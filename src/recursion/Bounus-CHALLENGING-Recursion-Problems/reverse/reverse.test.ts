// @ts-ignore
import {describe, it, expect} from "vitest";
import {reverse} from "./reverse.ts"

describe("reverse", () => {

    it('1- should', () => {
        expect(reverse('awesome')).toBe('emosewa');
    });

    it('2- should ', () => {
        expect(reverse('rithmschool')).toBe('loohcsmhtir');
    });

})


// console.log(reverse('awesome')); // 'emosewa'
// console.log(reverse('rithmschool')); // 'loohcsmhtir'
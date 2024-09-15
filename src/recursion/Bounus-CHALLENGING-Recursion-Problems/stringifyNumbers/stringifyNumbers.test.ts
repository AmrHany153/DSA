// @ts-ignore
import {describe, it, expect} from "vitest";
import {stringifyNumbers} from "./stringifyNumbers.ts"

describe("stringifyNumbers", () => {

    it('1- should', () => {
        expect(stringifyNumbers(obj)).toEqual(res);
    });

})

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

const res = {
    num: '1',
    test: {},
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66'
        }
    }
};

// console.log(stringifyNumbers(obj));
// { num: '1',
//   test: {},
//   data: { val: '4', info: { isRight: true, random: '66' } } }

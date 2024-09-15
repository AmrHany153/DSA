// @ts-ignore
import {describe, it, expect} from "vitest";
import {collectStrings} from "./collectStrings.ts"

describe("collectStrings", () => {

    it('1- should', () => {
        expect(collectStrings(obj)).toEqual(['foo', 'bar', 'baz']);
    });

})


const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz'
                    }
                }
            }
        }
    }
};

// console.log(collectStrings(obj)); // ['foo', 'bar', 'baz'])
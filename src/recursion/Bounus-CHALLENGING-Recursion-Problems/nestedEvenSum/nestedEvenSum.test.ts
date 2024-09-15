// @ts-ignore
import {describe, it, expect} from "vitest";
import {nestedEvenSum} from "./nestedEvenSum.ts"

describe("nestedEvenSum", () => {

    it('1- should', () => {
        expect(nestedEvenSum(obj1)).toEqual(6);
    });

    it('2- should', () => {
        expect(nestedEvenSum(obj2)).toEqual(10);
    });

})


const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup'
        }
    }
};

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
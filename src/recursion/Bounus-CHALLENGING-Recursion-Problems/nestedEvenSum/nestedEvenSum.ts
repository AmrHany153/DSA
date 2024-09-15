// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj:object):number {
    let result:number = 0;

    function helper(o:object):void {
        for (const Key in o) {
            // @ts-ignore
            if (typeof o[Key] === "object") {
                // @ts-ignore
                helper(o[Key]);

            } else {
                // @ts-ignore
                if (o[Key] % 2 === 0) {
                    // @ts-ignore
                    result += o[Key];
                }

            }
        }
    }

    helper(obj)
    return result;
}



export {nestedEvenSum}

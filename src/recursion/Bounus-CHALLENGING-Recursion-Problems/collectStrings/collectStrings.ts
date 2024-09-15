// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj:object):string[] {
    let result:string[] = [];

    function helper(o:object) {
        for (const oKey in o) {
            // @ts-ignore
            if (typeof o[oKey] === "object") helper(o[oKey]);
            // @ts-ignore
            if (typeof o[oKey] === "string") result.push(o[oKey]);
        }
    }

    helper(obj)
    return result;
}

export {collectStrings};

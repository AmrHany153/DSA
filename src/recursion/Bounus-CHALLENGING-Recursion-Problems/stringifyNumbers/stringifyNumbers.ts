// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj:object):object {
    let result:object = obj ;

    function helper(o:object):void {
        for (const oKey in o) {
            // @ts-ignore
            if (typeof o[oKey] === "object") helper(o[oKey]);
            // @ts-ignore
            if (typeof o[oKey] === "number") o[oKey] = o[oKey].toString();
        }
    }

    helper(result);
    return result;
}

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



console.log(stringifyNumbers(obj));
export {stringifyNumbers}
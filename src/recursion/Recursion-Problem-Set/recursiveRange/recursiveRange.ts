// recursiveRange
// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num:number):number {
    // base case
        // if num is 0 return 0
    if (num === 1) return 1;
    // different inputs
        // return num + itself(num-1)
    return num + recursiveRange(num-1);
}

export {recursiveRange}
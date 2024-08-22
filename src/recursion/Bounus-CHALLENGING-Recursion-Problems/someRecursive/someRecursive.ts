// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

function someRecursive(nums:number[], func:any):boolean {
    let result:boolean = false;
    let i:number = 0;


    function helper():void {
        // base case
        if (i === nums.length) return;

        // pass (nums[i]) value to func if func returns true
        if (func(nums[i])) {
            // make the result equal true
            result = true;
            // stop the recursion
            return;
        }
        // increase i by 1
        ++i;

        // call itself
        helper();

    }

    helper()
    return result;
}

console.log(typeof ((val: number) => val % 2 !== 0));

export {someRecursive}

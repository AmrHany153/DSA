// flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.


function flatten(arr:any[]):number[] {
    let result:number[] = [];
    // let i:number = 0;

    function helper(a:any[]):void {
        if (a.length === 0) return;

        if (Array.isArray(a[0])) {
            helper(a[0]);
        }
        else {
            result.push(a[0]);
        }
        a = a.slice(1);
        // console.log(a);
        helper(a);
    }

    helper(arr);
    return result;
}

// console.log(flatten([1,2,3, [4, 3, 5, [3,4,5,[5]], 6, [3, 5, 6]]]));

export {flatten}

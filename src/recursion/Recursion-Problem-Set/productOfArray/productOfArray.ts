// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(arr:number[]):number {
    // if arr is empty return 1
    if (arr.length === 0) return 1;
    // return the first element *
        // call itself with arr without the first element
    return arr[0] * productOfArray(arr.slice(1));
}

export {productOfArray}

    // if arr is empty return 1
    // return the first element *
        // call itself with arr without the first element



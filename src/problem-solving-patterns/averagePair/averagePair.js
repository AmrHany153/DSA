// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)


function averagePair(arr, num) {

    let j = arr.length-1;
    let i = 0;

    while ((arr[i] !== undefined) && (arr[j] !== undefined)) {
        if ((arr[i]+arr[j])/2 > num) {--j}
        else if ((arr[i]+arr[j])/2 < num) {++i}
        else {return true}
    }

    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

export {averagePair};

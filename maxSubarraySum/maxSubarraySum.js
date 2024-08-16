// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let max = 0;
    let temp = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length - num +1; i++) {
        temp += arr[i]
        temp -= arr[i-num]

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

export {maxSubarraySum};
// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)


function minSubArrayLen(arr, num) {
    let sums = [];
    let temp = 0;

    let i = -1;
    let j = -1;
    let s = '+';
    while (i < arr.length && j < arr.length) {
        // console.log(`i = ${i}`);
        // console.log(`j = ${j}`);
        // console.log(`temp = ${temp}`)
        // console.log(`sums = ${sums}`);
        // console.log(`arr = ${arr}`);
        // console.log("-------------------------------------------");

        if (s === '+'){
            ++i;

            temp += arr[i];

            if (temp >= num) {
                sums.push((i-j));
                s = '-';
            }
        }

        if (s === '-') { //
            ++j;
            temp -= arr[j];

            if (temp >= num) {
                sums.push((i-j));
            }
            // if (temp === 0) {
            else {
                // temp -= arr[j];
                s = '+';
            }
        }
    }


    if (sums.length === 0) {
        return 0;
    }

    let min = sums[0];
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] < min) {
            min = sums[i];
        }
    }

    return min;
}

console.log(minSubArrayLen([1, 3, 5, 5, 5, 5, 2, 4], 20)) // 4

export {minSubArrayLen}
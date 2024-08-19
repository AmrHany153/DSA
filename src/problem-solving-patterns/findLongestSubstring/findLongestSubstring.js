// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }


    let charsStorage = {};
    let maxLength = -1;
    let i = -1;
    let j = 0;

    // while (j < str.length)
    while (j < str.length) {

        // increase i by 1
        ++i;
        // check if the current char is in the charsStorage
        if (charsStorage[str[i]]) {
            // increase j by 1
            ++j
            // assign j to i
            i = j;
            // if charsStorage's length bigger than the maxLength store it
            if (Object.keys(charsStorage).length > maxLength) {
                maxLength = Object.keys(charsStorage).length;
            }
            // make the charsStorage Empty
            charsStorage = {};
        }
        // else assign the current char to charsStorage
        else {
            charsStorage[str[i]] = 1;
        }
    }

    // return max
    return maxLength;
}

findLongestSubstring('rithmschool')

export {findLongestSubstring};


// while (j < str.length)
    // increase i by 1
    // check if the current char is in the charsStorage
        // increase j by 1
        // assign j to i
        // if charsStorage's length bigger than the maxLength store it
        // make the charsStorage Empty
        // store the length in the maxLength if it bigger
    // else assign the current char to charsStorage

// return maxLength
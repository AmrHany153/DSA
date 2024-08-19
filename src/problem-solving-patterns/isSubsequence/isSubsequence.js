// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {

    let i = 0;
    let j = 0;
    while (str1.length !== 0 && j < str2.length) {

        if (str1[i] !== str2[j]) {
            ++j;
        }
        else {
            ++i;
        }
    }

    return i > str1.length - 1;
}

console.log(isSubsequence('sing', 'sting'));

export {isSubsequence};



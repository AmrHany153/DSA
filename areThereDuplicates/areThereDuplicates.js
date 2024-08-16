// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
    let frequencyCounter = {}

    for (const i of args) {
        frequencyCounter[i] = (frequencyCounter[i] || 0) + 1;
    }

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates());

export {areThereDuplicates}


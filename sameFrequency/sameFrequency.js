// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive intergers,
// find out if the two numbers have the same frequency of digits.

// Solution Requirements
//      - Time Complexity: O(n)

function sameFrequency(num1, num2) {

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 1; i < (10 ** num1.toString().length); i *= 10 ) {
        // console.log(i);
         frequencyCounter1[((num1 %(i*10)) - num1%i) /i] = 0;
    }

    for (let i = 1; i < (10 ** num2.toString().length); i *= 10 ) {
    //     console.log(i);
        frequencyCounter2[((num2 %(i*10)) - num2%i)/i] = 0;
    }

    if (frequencyCounter1.length !== frequencyCounter2.length) {
        return false;
    }

    for (const key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(123,213));

// let dest = [1,1,4]

// console.log(1 * (10 ** dest.length))

export {sameFrequency};



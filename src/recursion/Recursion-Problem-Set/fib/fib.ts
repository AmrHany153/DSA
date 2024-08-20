// fib
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

function fib(num:number):number {
    let result:number = 0;
    let count:number = 0;
    let temp:number = 0;

    function helper(f:number, s:number):void {

        // base case
        if (count >= num) {
            result = f;
            return;
        }

        // different Inputs
        // save the second in temp
        temp = s;
        // make the second = s+f
        s += f;
        // make first = temp
        f = temp
        count++;

        helper(f, s);
    }

    helper(0, 1)

    return result;
}


export {fib}
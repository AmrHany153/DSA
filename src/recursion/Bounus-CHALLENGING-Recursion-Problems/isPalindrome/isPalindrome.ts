// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str:string):boolean {
    let result:boolean = true;
    let start:number = 0;
    let end:number = str.length-1;

    function helper():void {
        // base case
        if (start === end || start+1 === end) return;

        // check if equal
        if (str[start] !== str[end]) result = false;
        // increase start by 1
        start++;
        // decrease end by 1
        end--;

        // call itself
        helper()
    }

    helper()

    return result;
}

isPalindrome('amanaplanacanalpandemonium');

export {isPalindrome}
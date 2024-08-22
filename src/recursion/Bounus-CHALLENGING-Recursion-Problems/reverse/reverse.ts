// reverse
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverse(str:string):string {
    let result:string = "";
    let i:number = str.length-1;

    function helper(s:string):void {
        if (i < 0) return;

        result += str[i];
        --i;

        helper(s)
    }

    helper(str);

    return result;
}

export {reverse}

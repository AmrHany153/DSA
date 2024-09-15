// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr:string[]):string[] {
    let result:string[] = [];
    let i:number = 0;

    function helper():void {
        if (i >= arr.length) return;

        result.push(arr[i].toUpperCase());
        ++i;

        helper()
    }

    helper()
    return result;
}

export {capitalizeWords}

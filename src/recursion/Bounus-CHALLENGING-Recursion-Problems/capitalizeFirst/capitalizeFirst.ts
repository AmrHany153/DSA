// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr:string[]):string[] {
    let result:string[] = [];
    let buffer:string = "";

    function helper():void {
        if (0 === arr.length) {
            return;
        }

        buffer += (arr[0][0].toUpperCase());
        buffer += arr[0].slice(1);
        result.push(buffer);
        buffer = "";
        arr = arr.slice(1);

        helper();
    }

    helper();
    return result;
}

console.log(capitalizeFirst(["amr"]));


// console.log(typeof 's' === "");
export {capitalizeFirst};
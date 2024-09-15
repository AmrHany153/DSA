function binarySearch(arr:number[], num:number):boolean {
    let left:number = 0;
    let right:number = arr.length-1;
    let i:number;

    if (num < arr[0] || num > arr[arr.length-1]) return false;

    while (left !== right-1) {
        i = Math.floor(((right + left) +1)/2);
        if (num > arr[i]) left = i;
        else if (num < arr[i]) right = i;
        else return true; //(num === arr[i])
    }

    return false;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5))
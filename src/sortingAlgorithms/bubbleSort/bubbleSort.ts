
function bubbleSort(arr:number[]):number[] {
    let buffer;
    let noSwap;
    for (let i = arr.length-1; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                buffer = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = buffer;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return arr;
}

console.log(bubbleSort([1,2,6,4,3,2]));
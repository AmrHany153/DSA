let arr = [8,2,1,5,-1,2,-4,7,6,3];

function pivot(arr:number[], start:number = 0, end:number = arr.length-2) {
    let counter:number = start;

    function swap(arr:number[], i:number, j:number) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (let i =  start+1; i < end+1; i++) {

        if (arr[i] <= arr[start]) {
            counter++;
            swap(arr, counter, i)
        }
    }

    swap(arr, start, counter)

    return counter;
}

function quickSort(arr:number[], start:number = 0, end:number = arr.length){
    if (start > end) return; // arr.slice(start,end).length < 2

    let p = pivot(arr, start, end);
    quickSort(arr, start, p-1);
    quickSort(arr, p+1, end);

    return arr;
}


// console.log(pivot(arr,0,arr.length-1)); // 4
console.log(quickSort(arr));
function selectionSort(arr:number[]):any[] {
    let min;
    let buffer;

    for (let i = 0; i < arr.length-1; i++) {
        min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) {
            buffer = arr[i];
            arr[i] = arr[min];
            arr[min] = buffer;
        }
    }

    return arr;
}

console.log(selectionSort([4,5,2,6,21,1]));
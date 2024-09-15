// function insertionSort(arr:number[]) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i-1; j > -1; j--) {
//             if (arr[j+1] < arr[j]) {
//                 let buffer = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = buffer;
//             } else break;
//         }
//     }
//
//     return arr;
// }

function insertionSort(arr:number[]) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        let buffer = arr[i];

        while ( j > -1 && buffer < arr[j]) {
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = buffer;
    }

    return arr;
}

console.log(insertionSort([2,1,4,6,7,3])) // [ 1, 2, 3, 4, 6, 7 ]
// [1,2,4,6,7,3]
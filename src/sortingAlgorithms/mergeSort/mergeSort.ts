function merge (arr1:any[], arr2:any[]) {
    let i:number = 0;
    let j:number = 0;
    let result:number[] = [];

    while (i < arr1.length || j < arr2.length) {

        if (arr1[i] < arr2[j] || j >= arr2.length) {
            result.push(arr1[i]);
            i++;
        }

        else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result;
}

function mergeSort(arr:any[]) {
    if (arr.length <= 1) return arr;

    let mid:number = Math.floor(arr.length/2);
    let right:number[] = mergeSort(arr.slice(0,mid));
    let left:number[] = mergeSort(arr.slice(mid));
    
    return merge(right, left);
}

console.log(mergeSort([10,24,76,73]))
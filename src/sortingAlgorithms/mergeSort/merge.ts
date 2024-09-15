function merge(arr1:number[], arr2:number[]) {
    let i:number = 0;
    let j:number = 0;
    let result:number[] = []

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



console.log(merge([1,10,50],[2,14,99,100])); // [1,2,10,14,50,99,100]
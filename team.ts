function bubbleSort(arr:any[]) {
    let noSwap:boolean = true

    for (let i = arr.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {

            if (arr[j] > arr[j+1]) {
                // swapping
                let temp:any = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                // to stop the swapping when sorted
                noSwap = false
            }

        } if (noSwap) break;
    }

    return arr;
}


function team(str1:string, str2:string) {
    let result:string[] = str1.split('');

    for (const chr of str2) {
        // to check if the char not duplicated
        if ( !(result.includes(chr))) result.push(chr);
    }

    // sort them and convert from array to string
    return bubbleSort(result).join('');
}

console.log(team("amr", "hany")); // ahmnry



function naiveSearch(str:string, target:string):boolean {
    // let size:number = target.length;
    // let buffer = size;
    //
    // for (const strElement of str) {
    //     console.log("current:",target[size-buffer]);
    //     console.log(strElement);
    //
    //     if (buffer <= 0) return true;
    //     else if (strElement === target[size-buffer]) {
    //         --buffer;
    //     } else {
    //         buffer = size;
    //     }
    // }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < target.length; j++) {
             if (str[i+j] !== target[j]) break;
             if (j === target.length-1) return true;
        }
    }

    return false;
}

console.log(naiveSearch("aaasssddd", "dddd"));
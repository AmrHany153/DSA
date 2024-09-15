function linearSearch(arr:number[], num:number):number {
    let i:number = -1

    for (const aNum of arr) {
        ++i;
        if (aNum === num) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([1,2,3,4,5], 6));
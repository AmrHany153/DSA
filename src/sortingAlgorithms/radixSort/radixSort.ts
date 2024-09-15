function getDigit(num:number, place:number) {
    // if (place < 0) return undefined; // place > num.toString().length ||
    return (Math.abs(num % (10**(place+1)) - (num % ( 10 ** (place) ))) / (10**(place)));
}

function digitCount(num:number) {
    if (num === 0) return 1;
    return Math.ceil(Math.log10(Math.abs(num)+1));
}

function mostDigits(arr:number[]) {
    let result:number = 0;

    for (const number of arr) {
        // let l = digitCount(number);
        // if (l > result) result = l;
        result = Math.max(result, digitCount(number))
    }

    return result;
}

function radixSort(arr:number[]) {

    let max = mostDigits(arr);
    let i = -1;

    function rec() {
        let bucket = Array.from({length:10}, () => []) ; // [[],[],[],[],[],[],[],[],[],[]]
        i++;
        if (i > max) return;

        for (const number of arr) {
            let digit = getDigit(number,i) ;
            // @ts-ignore
            bucket[digit].push(number);
        }

        let j = 0;
        let k = 0;
        let l = 0;
        while (l < arr.length) {
            if (bucket[j][k] === undefined) {
                k = 0;
                j++;
            } else {
                arr[l] = bucket[j][k];
                l++;
                k++;
            }
        }

        rec();
    }

    rec();
    return arr;
}

console.log(radixSort([12134234234234,2,33,443334,2,44344,2]))
class MaxBinaryHeap {
    values:any[];

    constructor() {
        this.values = [];
    }

    insert(val:any):void {
        this.values.push(val);
        let c:number = this.values.length-1;
        let p:number = Math.floor((c-1)/2);
        let temp:any;

        //     !empty      &&      child > parent
        while ( c > 0  && this.values[c] > this.values[p] ) {
            temp = this.values[c];
            this.values[c] = this.values[p];
            this.values[p] = temp;

            c = p;
            p = Math.floor((c-1)/2);
        }
    }
}

let test = new MaxBinaryHeap();
test.insert(10);
test.insert(5);
test.insert(5);
test.insert(40);
test.insert(30);

console.log(test.values)
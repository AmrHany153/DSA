class Node {
    val:any;
    next:Node|null;

    constructor(val:any) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    first:Node|null;
    last:Node|null;
    size:number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val:any) {
        let newNode:Node = new Node(val);

        // empty queue
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }

        // the basic job
        else {
            this.last!.next = newNode;
            this.last = this.last!.next;
        }

        return ++this.size;
    }

    dequeue():Node|null {
        // empty queue
        if (!this.first) return null;

        let oldNode:Node = this.first!;

        // one element
        if (this.size === 1) {
            this.last = null;
        }

        // the basic job
        this.first = this.first!.next;
        oldNode.next = null;

        this.size--;
        return oldNode;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

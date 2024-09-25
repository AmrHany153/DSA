class Node {
    val:any;
    next:Node|null;

    constructor(val:any) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    first:Node|null;
    last:Node|null;
    size:number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val:any):number {
        let newNode:Node = new Node(val);

        // empty stack
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }

        // the basic job
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        
        return ++this.size;
    }

    pop():Node|null {
        // empty stack
        if (!this.first) {
            return null;
        }

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

let test:Stack = new Stack();
test.push(1);
test.push(2);
test.push("amoor is shator");
console.log(test.pop()!.val)
console.log(test.pop()!.val)
test.push("amr has hired");
console.log(test.pop()!.val)
console.log(test.pop()!.val)
console.log(test.pop())

console.log(test)


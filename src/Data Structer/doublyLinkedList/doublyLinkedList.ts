class Node {
    val:any;
    next:Node|null;
    prev:Node|null;

    constructor(val:any) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head:Node|null;
    tail:Node|null;
    length:number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val:any):boolean {
        let newNode:Node = new Node(val);

        // empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        // basic job
        else {
            this.tail!.next = newNode;
            this.tail!.next.prev = this.tail;
            this.tail = this.tail!.next;
        }

        this.length++;
        return true;
    }

    pop():Node|undefined {
        // empty list
        if (!this.head) return undefined;

        let oldTail:Node = this.tail!

        // one element
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        // the basic job
        else {
            this.tail = this.tail!.prev;
            this.tail!.next!.prev = null;
            this.tail!.next = null;
        }

        this.length--;
        return oldTail;
    }

    shift():Node|undefined {
        // empty list
        if (!this.head) return undefined;

        let newNode:Node = this.head;

        // one element
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        // the basic job
        else {
            this.head = this.head!.next;
            this.head!.prev!.next = null;
            this.head!.prev = null;
        }

        this.length--;
        return newNode;
    }

    unshift(val:any):boolean {
        let newNode:Node = new Node(val);

        // empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        // the basic job
        else {
            this.head.prev = newNode;
            this.head.prev.next = this.head;
            this.head = this.head.prev;
        }

        this.length++;
        return true;
    }

    get(index:number):Node|undefined {
        // wrong input || empty list
        if (index < 0 || index >= this.length) return undefined;

        let mid:number = Math.floor((this.length - 1) / 2);
        let result:Node;

        // moving from head
        if (index <= mid) {
            result = this.head!;
            for (let i = 0; i < index; i++) {
                result = result.next!;
            }
        }

        // moving from tail
        else {
            result = this.tail!;
            for (let i = 0; i < this.length-1 - index; i++) {
                result = result.prev!;
            }
        }

        return result;
    }

    set(index:number, val:any):boolean {
        let node:Node|undefined = this.get(index);

        // wrong input || empty list
        if (node === undefined) return false;

        // the basic job
        node.val = val;

        return true;
    }

    insert(index:number, val:any):boolean {
        // wrong input
        if (index < 0 || index > this.length) return false;

        // add to first
        if (index === 0) this.unshift(val);

        // add to end
        else if (index === this.length) this.push(val);

        // the basic job
        else {
            let newNode:Node = new Node(val);
            let after:Node = this.get(index)!;
            let before:Node = after.prev!;

            // concat before with newNode
            before.next = newNode;
            newNode.prev = before;

            // concat newNode with after
            newNode.next = after;
            after.prev = newNode;

            this.length++;
        }

        return true;
    }

    remove(index:number):Node|undefined {
        // wrong input || empty list
        if (index < 0 || index >= this.length) return undefined;

        // remove from first
        else if (index === 0) return this.shift();

        // remove from end
        else if (index === this.length-1) return this.pop();

        // the basic job
        else {
            let oldNode:Node = this.get(index)!;
            let after:Node = oldNode.next!;
            let before:Node = oldNode.prev!;

            // concat before and after
            before.next = after;
            after.prev = before;

            // cut oldNode's prev and next
            oldNode.prev = null;
            oldNode.next = null;

            this.length--;
            return oldNode;
        }
    }

    revers():void {
        let currentNode:Node|null = this.head;

        for (let i = 0; i < this.length; i++) {
            // swap next and prev
            let temp:Node = currentNode!.next!;
            currentNode!.next = currentNode!.prev;
            currentNode!.prev = temp;

            currentNode = currentNode!.prev;
        }

        // swap head and tail
        let temp:Node|null = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    print():void {
        let list:any[] = [];
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            list.push(current!.val)
            current = current!.next!;
        }
        console.log(list);
    }
}

let test = new DoublyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(99);
test.print()
test.revers();
// console.log(test)
test.print()
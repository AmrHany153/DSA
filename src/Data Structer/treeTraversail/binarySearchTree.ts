class QNode {
    next:QNode|null;
    val:any;

    constructor(val:any) {
        this.next = null;
        this.val = val;
    }
}

class Queue {
    first:QNode|null;
    last:QNode|null;
    size:number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val:any):number {
        let newNode:QNode = new QNode(val);

        // empty list
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }

        // the basic jop
        else {
            this.last!.next = newNode;
            this.last = this.last!.next;
        }

        return ++this.size;
    }

    dequeue():QNode|undefined {
        // empty list
        if (!this.first) {
            return undefined;
        }

        // one element
        if (!this.first.next) {
            this.last = null;
        }

        let result:QNode = this.first;

        this.first = this.first.next;
        result.next = null;
        this.size--;

        return result;
    }

    toArray():any[] {
        let result:any[] = [];
        let currentNode:QNode|null = this.first;

        for (let i = 0; i < this.size; i++) {
            result.push(currentNode!.val);
            currentNode = currentNode!.next;
        }

        return result;
    }

    toArrayVal():any[] {
        let result:any[] = [];
        let currentNode:QNode|null = this.first;

        for (let i = 0; i < this.size; i++) {
            result.push(currentNode!.val!.val);
            currentNode = currentNode!.next;
        }

        return result;
    }
}



class TNode {
    left:TNode|null;
    right:TNode|null;
    val:any;

    constructor(val:any) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root:TNode|null;

    constructor() {
        this.root = null;
    }

    insert(val:any):boolean {
        let newNode:TNode = new TNode(val);
        let current:TNode = this.root!;

        // if empty
        if (!this.root) {
            this.root = newNode;
            return true;
        }

        while(true) {
            // if same
            if (val === current.val) return false;

            // check left
            if (val < current.val) {

                if (!current.left) {
                    current.left = new TNode(val);
                    break;
                }

                else {
                    current = current.left;
                    continue;
                }
            }

            // check right
            if (val > current.val) {

                if (!current.right) {
                    current.right = new TNode(val);
                    break;
                }

                else {
                    current = current.right;
                    // continue;
                }
            }
        }

        return true;
    }

    BFS():Queue { // breadth first search
        let queue:Queue = new Queue();
        let visited:Queue = new Queue();
        let currentNode:TNode;

        queue.enqueue(this.root);

        function traverse():void {
            if (queue.size === 0) return;

            currentNode = queue.dequeue()!.val;
            visited.enqueue(currentNode);

            if (currentNode.left) queue.enqueue(currentNode.left)
            if (currentNode.right) queue.enqueue(currentNode.right)

            traverse();
        }

        traverse();
        return visited;
    }

    DFSPreOrder():Queue {
        let visited:Queue = new Queue();

        function traverse(node:TNode|null):void {
            if(node === null) return;
            visited.enqueue(node);
            if (node.left) { traverse(node.left) }
            if (node.right) { traverse(node.right) }
        }

        traverse(this.root);
        return visited;
    }

    DFSPostOrder():Queue {
        let visited:Queue = new Queue();

        function traverse(node:TNode|null):void {
            if(node === null) return;
            if (node.left) { traverse(node.left) }
            if (node.right) { traverse(node.right) }
            visited.enqueue(node);
        }

        traverse(this.root);
        return visited;
    }

    DFSInOrder():Queue {
        let visited:Queue = new Queue();

        function traverse(node:TNode|null):void {
            if(node === null) return;
            if (node.left) { traverse(node.left) }
            visited.enqueue(node);
            if (node.right) { traverse(node.right) }
        }

        traverse(this.root);
        return visited;
    }

}



let test:any = new BinarySearchTree();
test.insert(10);
test.insert(15);
test.insert(20);
test.insert(6);
test.insert(3);
test.insert(8);

console.log(test.DFSInOrder().toArrayVal())

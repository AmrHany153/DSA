class qNode {
    next:qNode|null;
    val:any;

    constructor(val:any) {
        this.next = null;
        this.val = val;
    }
}

class Queue {
    first:qNode|null;
    last:qNode|null;
    size:number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val:any):number {
        let newNode:qNode = new qNode(val);

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

    dequeue():qNode|undefined {
        // empty list
        if (!this.first) {
            return undefined;
        }

        // one element
        if (!this.first.next) {
            this.last = null;
        }

        let result:qNode = this.first;

        this.first = this.first.next;
        result.next = null;
        this.size--;

        return result;
    }

    toArray():any[] {
        let result:any[] = [];
        let currentNode:qNode|null = this.first;

        for (let i = 0; i < this.size; i++) {
            result.push(currentNode!.val);
            currentNode = currentNode!.next;
        }

        return result;
    }

    toArrayVal():any[] {
        let result:any[] = [];
        let currentNode:qNode|null = this.first;

        for (let i = 0; i < this.size; i++) {
            result.push(currentNode!.val!.val);
            currentNode = currentNode!.next;
        }

        return result;
    }
}



class tNode {
    left:tNode|null;
    right:tNode|null;
    val:any;

    constructor(val:any) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class treeTraversail {
    root:tNode|null;

    constructor() {
        this.root = null;
    }

    BFS():Queue { // breadth first search
        let queue:Queue = new Queue();
        let visited:Queue = new Queue();
        let currentNode:tNode;

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

    DFS():Queue {

        // let queue:Queue = new Queue();
        let visited:Queue = new Queue();
        visited.enqueue(this.root);


        function traverse(node:tNode|null):void {
            if(node === null) return;
            
            if (node.left) {
                traverse(node.left);
                visited.enqueue(node.left)
            }

            if (node.right) {
                traverse(node.right);
                visited.enqueue(node.right)
            }
        }

        traverse(this.root);
        return visited;
    }
}

let test = new treeTraversail();
test.root = new tNode(10);
test.root.right = new tNode(15);
test.root.right.right = new tNode(20);
test.root.left = new tNode(6);
test.root.left.left = new tNode(3);
test.root.left.right = new tNode(8);

console.log(test.BFS().toArrayVal())

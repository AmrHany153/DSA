class Node{
    val:number;
    next:null | Node;
    constructor(val:number) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    head:null | Node;
    tail:null | Node;
    length:number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any): this {
        let newNode:Node = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // @ts-ignore
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;

        return this;
    }

    pop():Node | undefined  {
        // if there are no nodes in the list, return undefined
        if (!this.head) return undefined;


        let result:Node;

        // if there is only one node in the list
        if (!this.head.next) {
            result = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return result;
        }

        let pre:Node = this.head;
        let temp:null | Node = this.head.next;


        // loop through the list until you reach the tail
        // @ts-ignore
        while (temp.next) {
            // @ts-ignore
            pre = pre.next;

            // @ts-ignore
            temp = temp.next;
        }
        // @ts-ignore
        reslut = temp;

        // set the next property of the 2nd to last node to be null
        // @ts-ignore
        pre.next = null;
        this.tail = pre;
        // decrement the length of the list by 1
        this.length--;
        // return the value of the node removed
        // @ts-ignore
        return reslut;

    }

    shift():Node | undefined {
        let result:any;

        if (!this.head) return undefined;
        if (!this.head.next) {
            result = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0
            return result;
        }

        result = this.head;
        this.head = this.head.next;
        this.length--;

        return result;
    }

    unshift(val:any):SinglyLinkedList {
        let newNode:Node = new Node(val);
        newNode.next = this.head;
        if (!this.head) {
            this.tail = newNode;
        }
        this.head = newNode;

        this.length++;
        return this;
    }

    get(index:number):any {
        // wrong value
        if (index < 0 || index >= this.length) return undefined;

        // search
        let result:any = this.head;
        for (let i = 0; i < index; i++) {
            result = result.next;
        }

        return result;
    }

    set(index:number, val:any):boolean {
        // wrong value
        if (index < 0 || index >= this.length) return false;

        // search
        let result:any = this.get(index);

        result.val = val;
        return true;
    }

    insert(index:number, val:any):boolean {

        // wrong index
        if (index < 0 || index > this.length) return false;

        // add to end
        if (index === this.length) {
        this.push(val);
        return true;
        }

        // add to first
        if (index === 0) {
            this.unshift(val);
            return true;
        }

        // the basic job
        let pre:Node = this.get(index-1);
        let temp:Node|null = pre.next;
        pre.next = new Node(val);
        pre.next.next = temp;
        this.length++;

        return true
    }

    remove(index:number):Node|undefined {
        // wrong index
        if (index < 0 || index >= this.length) return undefined;

        // remove from end
        if (index === this.length-1) {
            return this.pop();
        }

        // add to front
        if (index === 0) {
            return this.shift();
        }

        // the basic job
        let pre:Node = this.get(index-1);
        let temp:Node = pre.next!;
        pre.next = pre.next!.next;
        this.length--;

        return temp;
    }

    reversM():void {
        let pre:Node|null = this.head;
        if (pre === null) return;

        let current:Node|null = pre.next;
        if (current === null) return;

        let temp:Node|null = this.head;
        this.head = this.tail;
        this.tail = temp;
        this.tail!.next = null;

        let post:Node|null = current.next;
        if (post === null) {
            this.head!.next = this.tail;
            return;
        }


        while (current) {
            post = current.next;
            current.next = pre;
            pre = current;
            current = post;
        }

    }

    revers():void {
        let current:Node|null = this.head;
        this.head = this.tail;
        this.tail = current;

        let next:Node|null;
        let prev:Node|null = null;

        for (let i = 0; i < this.length; i++) {
            next = current!.next;
            current!.next = prev;
            prev = current;
            current = next;
        }
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

let test = new SinglyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);

test.print();
test.revers();
test.print();




class Node {
    val:any;
    left:Node|null;
    right:Node|null;

    constructor(val:any) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root:Node|null;

    constructor() {
        this.root = null;
    }

    insert(val:any):true|undefined {
        let newNode:Node|null = new Node(val);
        let currentNode:Node|null = this.root;

        if (this.root === null) {
            this.root = newNode;
            return true;
        }


        function helper():true|undefined {
            if (val === currentNode!.val) {
                return undefined;
            }

            if (val < currentNode!.val) {
                if (!currentNode!.left) {
                    currentNode!.left  = newNode;
                    return true;
                }
                else {
                    currentNode = currentNode!.left;
                    return helper();
                }
            }

            else {
                if (!currentNode!.right) {
                    currentNode!.right  = newNode;
                    return true;
                }
                else {
                    currentNode = currentNode!.right;
                    return helper();
                }
            }

        }

        return helper();
    }

    find(val:any):true|undefined {
        let currentNode:Node|null = this.root;

        if (this.root === null) {
            return undefined;
        }


        function helper():true|undefined {
            if (val === currentNode!.val) {
                return true;
            }

            if (val < currentNode!.val) {
                if (!currentNode!.left) {
                    return undefined;
                }
                else {
                    currentNode = currentNode!.left;
                    return helper();
                }
            }

            else {
                if (!currentNode!.right) {
                    return undefined;
                }
                else {
                    currentNode = currentNode!.right;
                    return helper();
                }
            }

        }

        return helper();
    }
}

let test:any = new BinarySearchTree();
console.log(test.insert(1))
console.log(test.insert(3))
console.log(test.insert(1))
console.log(test.insert(2))
console.log(test.insert(3))



// insert(val:any){
//     let newNode:Node|null = new Node(val);
//     let currentNode:Node|null = this.root;
//
//     if (this.root === null) {
//         this.root = newNode;
//         return true;
//     }
//
//     function helper() {
//
//         if (val < currentNode!.val) {
//             if (!currentNode!.left) {
//                 currentNode!.left  = newNode;
//             }
//             else {
//                 currentNode = currentNode!.left;
//                 helper();
//             }
//         }
//
//         else {
//             if (!currentNode!.right) {
//                 currentNode!.right  = newNode;
//             }
//             else {
//                 currentNode = currentNode!.right;
//                 helper();
//             }
//         }
//     }
//
//     helper();
// }
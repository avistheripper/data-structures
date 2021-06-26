class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        };
        return count;
    }
    clear() {
        this.head = null;
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    insertAt(data, index){
        // if the list is empty i.e. head = null
                if (!this.head) {
                    this.head = new Node(data);
                    return;
                }
        // if new node needs to be inserted at the front of the list i.e. before the head.
                if (index === 0) {
                   this.head = new Node(data, this.head);
                   return;
                }
        // else, use getAt() to find the previous node.
                const previous = this.getAt(index - 1);
                let newNode = new ListNode(data);
                newNode.next = previous.next;
                previous.next = newNode;
                return this.head
    }
    deleteAt(index){
        // when list is empty i.e. head = null
            if (!this.head) {
                 this.head = new ListNode(data);
                 return;
             }
        // node needs to be deleted from the front of the list i.e. before the head.
            if (index === 0) {
                this.head = this.head.next;
                return;
            }
        // else, use getAt() to find the previous node.
            const previous = this.getAt(index - 1);
            if (!previous || !previous.next) {
                return;
            }
            previous.next = previous.next.next;
            return this.head
        }

}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(5);

node1.next = node2;
node2.next = node3;

// {
//     data: 2, ---> head
//     next: { ----> pointer
//         data: 4,
//         next: {
//             data: 5 ---> tail
//             next: null
//         }
//     }
// }

let list = new LinkedList(node1);

console.log(list.head);

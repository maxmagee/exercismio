class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
};

class LinkedList {
    constructor() {
        this.nodeCount = 0;
        this.head = null;       // Points to start
        this.tail = null;    // Points to end
    }

    count() {
        return this.nodeCount;
    }
    // Inserts a node with a given value onto the end of the linked list
    push(value) {
        const nodeToAdd = new Node(value);
        if (this.nodeCount === 0) {  // We are adding to an empty list, set the head value
            this.head = nodeToAdd;
        } else {    // Add our node to the end and update the tail
            this.tail.next = nodeToAdd;
            nodeToAdd.prev = this.tail;
        }
        this.tail = nodeToAdd;
        this.nodeCount++;
    }
    // Remove the node from the end of the linked list and return its value
    pop() {
        const nodeToRemove = this.tail;
        // Update the tail of the list to point to the next-to-last node if it exists
        if (nodeToRemove.prev) {
            nodeToRemove.prev.next === null;
            this.tail = nodeToRemove.prev;
        } else {
            this.tail = null;
        }
        this.nodeCount--;

        return nodeToRemove.value;
    }
    // Remove the node from the beginning of the linked list and return the value
    shift() {
        const nodeToRemove = this.head;
        // Update the second node to be the first (head) of the linked list if it exists
        if (this.head.next) {
            this.head.next.prev = null;
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this.nodeCount--;
        return nodeToRemove.value;
    }
    // Inserts a node with a given value onto the beginning of the linked list
    unshift(value) {
        const nodeToAdd = new Node(value);
        if (this.nodeCount === 0) {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            nodeToAdd.next = this.head;
            this.head.prev = nodeToAdd;
            this.head = nodeToAdd;
        }
        this.nodeCount++;
    }
    // Removes the node at the end of the linked list but doesn't return a value
    delete() {
        if (this.nodeCount === 0) { return 0; }
        const nodeToRemove = this.tail;
        if (nodeToRemove.prev) {
            nodeToRemove.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.nodeCount--;
    }
};

module.exports = LinkedList;

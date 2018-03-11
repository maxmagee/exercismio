class Element {
    constructor(value, next) {
        if (!value) { 
            throw new Error('Element constructor requires a value.'); 
        }
        if (next !== undefined && !(next instanceof Element)) {
            throw new Error('Element next value must be of type Element.');
        }
        this.next = next;
        this.value = value;
    }
}

class List {
    constructor() {
        this.elements = [];
        this.head = undefined;
    }
    static fromArray(values) {
        const list = new List();
        
        values.forEach(value => list.push(new Element(value)));

        return list;
    }
    pop() {
        if (this.elements.length > 1) {
            this.elements[this.elements.length - 2].next = undefined;
        }

        this.elements.pop();
        
        if (this.elements.length === 0) { 
            this.head = undefined; 
        }
    }
    push(element) {
        if (this.head) {
            // Point the last element's next property to this newly inserted element
            this.elements[this.elements.length - 1].next = element;
        } else {
            this.head = element;
        }
        
        this.elements.push(element);
    }
    reverse() {
        this.elements
            .reverse()
            .map((element, index, array) => {
                element.next = array[index + 1];
                return element;
            });
        this.head = this.elements[0];
    }
    shift() {
        this.elements.shift();
        
        if (this.elements.length > 0) {
            this.head = this.elements[0];
        } else {
            this.head = undefined;
        }
    }
    toArray() {
        return this.elements.map(element => element.value);
    }
    unshift(element) {
        element.next = this.head;
        this.elements.unshift(element);
        this.head = element;
    }
}

module.exports = {
    Element,
    List
}

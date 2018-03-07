class CustomSet {
    constructor(elements) {
        this.elements = [];
        
        if (elements) {
            elements.forEach(element => {
                this.add(element);
            })
        }
    }
    add(newElement) {
        if (!this.contains(newElement)) {
            this.elements.push(newElement);
        }

        return this;
    }
    clear() {
        this.elements = [];

        return this;
    }
    contains(searchedElement) {
        return this.elements.indexOf(searchedElement) !== -1;
    }
    difference(otherSet) {
        const newElements = this.elements.filter(element => {
            return otherSet.elements.indexOf(element) === -1;
        });

        return new CustomSet(newElements);
    }
    disjoint(otherSet) {
        return !otherSet.elements.some(element => {
            return this.contains(element);
        });
    }
    empty() {
        return this.elements.length === 0;
    }
    eql(otherSet) {
        return (this.elements.length === otherSet.elements.length) && 
            otherSet.elements.every(element => {
                return this.contains(element);
            });
    }
    intersection(otherSet) {
        const newElements = this.elements.filter(element => {
            return otherSet.elements.indexOf(element) !== -1;
        });

        return new CustomSet(newElements);
    }
    size() {
        return this.elements.length;
    }
    subset(otherSet) {
        return otherSet.elements.every(element => {
            return this.contains(element);
        });
    }
    toList() {
        return this.elements;
    }
    union(otherSet) {
        const newSet = new CustomSet(this.elements);

        otherSet.elements.forEach(element => {
            newSet.add(element);
        });

        return newSet;
    }
}

module.exports = CustomSet;

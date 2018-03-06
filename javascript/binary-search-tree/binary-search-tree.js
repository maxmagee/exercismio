class Bst {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    each(callback) {
        if (this.left) { this.left.each(callback); }
        if (this.data) { callback(this.data); }
        if (this.right) { this.right.each(callback); }
    }
    insert(data) {
        if (data <= this.data) {
            if (this.left) {
                this.left.insert(data);
            } else {
                this.left = new Bst(data);
            }
        } else {
            if (this.right) {
                this.right.insert(data);
            } else {
                this.right = new Bst(data);
            }
        }
    }
}

module.exports = Bst;

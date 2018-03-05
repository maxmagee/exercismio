function Garden(diagram, students) {
    this.children = students ? students.sort() :
        ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
    this.plantNames = { 'C': 'clover', 'G': 'grass', 'R': 'radishes', 'V': 'violets' };
    this.rowA = diagram.split('\n')[0].split('');
    this.rowB = diagram.split('\n')[1].split('');
    this.returnObj = {};

    this.buildReturnObject();
    
    return this.returnObj;
};

// Creates the key-value pairs for our Garden's return object dynamically
Garden.prototype.buildReturnObject = function() {
    this.children.forEach((child, index) => {
        this.returnObj[child.toLowerCase()] = this.getPlantsAtIndex(index);
    });
};

// Translates an alphabetic child position into the position then value of the plants in each row
Garden.prototype.getPlantsAtIndex = function(childIndex) {    
    const rowIndex = childIndex * 2
    const plants = [];

    plants.push(this.plantNames[this.rowA[rowIndex]]);
    plants.push(this.plantNames[this.rowA[rowIndex + 1]]);
    plants.push(this.plantNames[this.rowB[rowIndex]]);
    plants.push(this.plantNames[this.rowB[rowIndex + 1]]);

    return plants;
};

module.exports = Garden;

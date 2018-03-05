/*
    This is a class-based implementation of the same solution in kindergarten-garden.js
    This way has a problem with possible key overlap that the prototype-based approach does not.
    It is noted below. I prefer the prototype approach, but I wanted to figure out how to do it both ways.
*/

class Garden {
    constructor(diagram, students) {
        this.children = students ? students.sort() :
            ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
        this.plantNames = { 'C': 'clover', 'G': 'grass', 'R': 'radishes', 'V': 'violets' };
        this.rowA = diagram.split('\n')[0].split('');
        this.rowB = diagram.split('\n')[1].split('');
        this.buildChildPlantKeyValuePairs();
    }
    // Creates a key for each child having the plant value for that child
    buildChildPlantKeyValuePairs() {
        this.children.forEach((child, index) => {
            // There's an unlikely danger doing it this way if we get a child name that overlaps an existing property
            this[child.toLowerCase()] = this.getPlantsAtIndex(index);
        });
    }
    // Translates an alphabetic child position into the position then value of the plants in each row
    getPlantsAtIndex(childIndex) {
        const rowIndex = childIndex * 2
        const plants = [];

        plants.push(this.plantNames[this.rowA[rowIndex]]);
        plants.push(this.plantNames[this.rowA[rowIndex + 1]]);
        plants.push(this.plantNames[this.rowB[rowIndex]]);
        plants.push(this.plantNames[this.rowB[rowIndex + 1]]);

        return plants;
    }
}

module.exports = Garden;

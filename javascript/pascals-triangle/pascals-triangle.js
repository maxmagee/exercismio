class Triangle {
    constructor(numRows) {
        this.numRows = numRows;
        this.rows = [];
        this.lastRow = [];
        this.buildTriangle();
    }

    buildTriangle() {
        // Build all of the rows and add them together to form the triangle
        for (let rowNumber = 0; rowNumber < this.numRows; rowNumber++) {
            const newRow = this.buildRow(rowNumber);
            this.lastRow = newRow;
            this.rows.push(newRow);
        }
    }

    buildRow(rowNumber) {
        const prevRow = this.rows[rowNumber - 1];
        let newRow = [];

        if (rowNumber === 0) { return [1]; }    // Initialize the tip of the triangle
        
        for (let column = 0; column <= rowNumber; column++) {   
            // Each entry is the sum of two possible entries in the previous row
            // The items in the previous row to sum have the same index in their row or one to the left
            // If the index doesn't exist, we need to default to use 0
            let value = 0;
            
            value = value + (prevRow[column - 1] || 0);     // up and to the left
            value = value + (prevRow[column] || 0);         // up and to the right

            newRow.push(value);
        }

        return newRow;
    }
}

module.exports = Triangle;

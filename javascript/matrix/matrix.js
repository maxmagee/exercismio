class Matrix {
    constructor(input) {
        this.matrix = input.split('\n')
            .map((stringRow) => {
                return stringRow.split(' ').map((stringNum) => {
                    return Number(stringNum);
                });
            });
        this.rows = this.matrix;
        this.buildColumns();
    }

    buildColumns() {
        let constructedColumns = [];
        // Iterate left-to-right
        for (let col = 0; col < this.matrix[0].length; col++) {
            let constructedCol = [];
            // Iterate top-to-bottom
            for (let row = 0; row < this.matrix.length; row++) {
                constructedCol.push(this.matrix[row][col]);
            }
            constructedColumns.push(constructedCol);
        }
        this.columns = constructedColumns;
    }
}

module.exports = Matrix;

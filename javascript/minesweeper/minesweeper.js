class Minesweeper {
    annotate(input) {
        return input.map(this.buildNewRow.bind(this));
    }
    buildNewRow(rowString, rowIndex, mineArray) {
        let newRow = '';

        for (let i = 0; i < rowString.length; i++) {
            if (rowString.charAt(i) === '*') { newRow += '*'; }
            else { newRow += this.countAdjacentMines(rowIndex, i, mineArray); }
        }

        return newRow;
    }
    countAdjacentMines(row, column, mineArray) {
        let count = 0;

        // Checks top row, then same row, then bottom row
        for (let i = -1; i <= 1; i++) {
            if (mineArray[row + i]) {
                if (mineArray[row + i].charAt(column - 1) === '*') { count++; }
                if (mineArray[row + i].charAt(column) === '*') { count++; }
                if (mineArray[row + i].charAt(column + 1) === '*') { count++; }
            }
        }

        return count > 0 ? count.toString() : ' ';
    }
}

module.exports = Minesweeper;

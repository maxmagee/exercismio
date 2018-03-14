// Returns true if two given positions are diagonal from one another
const areDiagonal = (blackPos, whitePos) => {
    const xDiff = blackPos[0] - whitePos[0];
    const yDiff = blackPos[1] - whitePos[1];

    return (
        xDiff === yDiff ||
        xDiff === -yDiff
    );
};

// Returns a string representation of a given row on the chess board
const buildRowString = (row, blackPos, whitePos) => {
    if (row !== blackPos[0] && row !== whitePos[0]) {
        return '_ _ _ _ _ _ _ _\n';
    } else {
        return ['_','_','_','_','_','_','_','_'].map((value, index) => {
            if (row === blackPos[0] && index === blackPos[1]) {
                return 'B';
            } else if (row === whitePos[0] && index === whitePos[1]) {
                return 'W';
            } else {
                return '_';
            }
        }).join(' ') + '\n';
    }
};

class Queens {
    constructor(positioning) {
        if (positioning) {
            this.black = positioning.black;
            this.white = positioning.white;
        } else {
            this.black = [7, 3];
            this.white = [0, 3];
        }
        if (this.black[0] === this.white[0] && this.black[1] === this.white[1]) {
            throw 'Queens cannot share the same space';
        }
    }
    canAttack() {
        return (
            (this.black[0] === this.white[0]) ||                    // Same row
            (this.black[1] === this.white[1]) ||                    // Same column
            areDiagonal(this.black, this.white)                     // Diagonal from one another
        );
    }
    toString() {
        let board = '';

        for (let row = 0; row < 8; row++) {
            board += buildRowString(row, this.black, this.white);
        }

        return board;
    }
}

module.exports = Queens;

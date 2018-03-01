class Squares {
    constructor(upperBound) {
        this.setSums(upperBound);
        this.difference = this.squareOfSums - this.sumOfSquares;
    }
    setSums(upperBound) {
        let sum = 0;
        let squaredSum = 0;

        for (let i = 1; i <= upperBound; i++) {
            sum += i;
            squaredSum += Math.pow(i, 2);
        }

        this.squareOfSums = Math.pow(sum, 2);
        this.sumOfSquares = squaredSum;
    }
}

module.exports = Squares;

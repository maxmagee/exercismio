class SumOfMultiples {
    constructor(multiples) {
        this.multiples = multiples;
    }
    to(upperBound) {
        let sum = 0;

        for (let i = 1; i < upperBound; i++) {
            if (this.multiples.some(base => {
                return i % base === 0;
            })) {
                sum += i;
            }
        }

        return sum;
    }
}

module.exports = SumOfMultiples;


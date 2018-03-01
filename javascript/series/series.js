class Series {
    constructor(input) {
        this.digits = input.split('').map(digit => parseInt(digit));
    }
    slices(segmentLength) {
        if (segmentLength > this.digits.length) { throw new Error('Slice size is too big.'); }
        const slices = [];

        for (let i = 0; i <= this.digits.length - segmentLength; i++) {
            slices.push(this.digits.slice(i, i + segmentLength));
        }

        return slices;
    }
}

module.exports = Series;

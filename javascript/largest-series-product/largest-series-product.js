const getProductFromString = (input) => {
    return input
        .split('')
        .map(char => parseInt(char))
        .reduce((prev, current) => {
            return prev * current;
        }, 1);
};

class Series {
    constructor(input) {
        this.input = input;
    }
    largestProduct(seriesLength) {
        this.validate(seriesLength);

        if (seriesLength === 0) { return 1; }

        let returnedProduct = 0;
        // Move a series 'window' along the input string
        for (let startSeries = 0; startSeries + seriesLength <= this.input.length; startSeries++) {
            const seriesString = this.input.substr(startSeries, seriesLength);
            const seriesProduct = getProductFromString(seriesString);
            
            returnedProduct = seriesProduct > returnedProduct ?
                seriesProduct :
                returnedProduct;
        }

        return returnedProduct;
    }
    validate(seriesLength) {
        if (isNaN(this.input) || seriesLength < 0) {
            throw new Error('Invalid input.');
        }
        if (this.input.length < seriesLength) {
            throw new Error('Slice size is too big.');
        }
    }
}

module.exports = Series;

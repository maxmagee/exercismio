class PerfectNumbers {
    constructor() {
        this.factors = [];
        this.factorSum = 0;
    }
    classify(input) {
        if (input <= 0) { return 'Classification is only possible for natural numbers.'; }
        
        this.factors = this.getFactors(input);
        this.factorSum = this.getFactorsSum();

        if (this.factorSum === input) { return 'perfect'; }
        if (this.factorSum > input) { return 'abundant'; }
        
        return 'deficient';
    }
    getFactors(input) {
        let factor = input - 1;
        let factorArray = [];

        while (factor > 0) {
            if (input % factor === 0) { factorArray.push(factor); }
            factor--;
        }

        return factorArray;
    }
    getFactorsSum() {
        return this.factors.reduce((prev, current) => {
            return prev + current;
        }, 0);
    }

}

module.exports = PerfectNumbers;

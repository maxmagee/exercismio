class Octal {
    constructor(inputString) {
        this.inputString = inputString;
    }
    toDecimal() {
        if (this.inputString.match(/^[0-7]+$/) === null) { return 0; }

        return this.inputString
            .split('')
            .reverse()
            .reduce((prev, current, index) => {
                return prev + (parseInt(current) * Math.pow(8, index));
            }, 0);
    }
}

module.exports = Octal;

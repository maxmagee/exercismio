class Trinary {
    constructor(inputString) {
        this.inputString = inputString;
    }
    toDecimal() {
        if (this.inputString.match(/^[0-2]+$/) === null) { return 0; }

        return this.inputString
            .split('')
            .reverse()
            .map((char) => parseInt(char))
            .reduce((prev, current, index) => {
                return prev + (current * Math.pow(3, index));
            }, 0);
    }
}

module.exports = Trinary;

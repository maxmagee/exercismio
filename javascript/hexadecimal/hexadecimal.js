const hexValue = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
};

class Hexadecimal {
    constructor(hex) {
        this.hex = hex;
    }
    toDecimal() {
        if (/^[a-fA-F0-9]*$/.test(this.hex) === false) { return 0; }
        
        return this.hex
            .split('')
            .reverse()
            .reduce((prev, current, index) => {
                return prev + (Math.pow(16, index) * hexValue[current.toLowerCase()]);
            }, 0);
    }
}

module.exports = Hexadecimal;

const hasMatchingCheckDigit = (input) => {
    const total = input.reduce((prev, current, index) => {
        let currentValue;

        if (current === 'X') {
            currentValue = 10;
        } else {
            currentValue = parseInt(current);
        }

        return prev + (currentValue * (10 - index));
    }, 0);

    return total % 11 === 0;
};

const hasValidCheckDigit = (input) => {
    return input[input.length - 1] === 'X' || !isNaN(input[input.length - 1]);
};

const hasValidDigits = (input) => {
    const copiedArray = input.slice();              // Copied so we don't modify actual array

    copiedArray.pop();                              // Remove the check digit

    return copiedArray.every(value => {
        return !isNaN(value);
    });
};

const hasValidLength = (input) => {
    return input.length === 10;
};

class ISBN {
    constructor(input) {
        this.input = input.replace(/-/g, '').split('');
    }
    isValid() {
        return hasValidLength(this.input) &&
            hasValidDigits(this.input) &&
            hasValidCheckDigit(this.input) &&
            hasMatchingCheckDigit(this.input);
    }
}

module.exports = ISBN;

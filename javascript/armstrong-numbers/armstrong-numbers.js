const validate = (input) => {
    const numDigits = input.toString().length;

    return input === input.toString()
        .split('')
        .reduce((acc, digit) => {
            return acc + Math.pow(parseInt(digit), numDigits);
        }, 0);
};

module.exports = { validate };
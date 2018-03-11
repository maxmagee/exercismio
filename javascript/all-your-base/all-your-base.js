// Converts an array of digits and a given base to base 10
const convertToBase10 = (digits, base) => {
    let base10Value = 0;

    for (let i = 0; i < digits.length; i++) {
        base10Value += digits[i] * Math.pow(base, digits.length - i - 1);
    }

    return base10Value;
};

// Returns an array of digits in a given target base that equals a given base 10 value
const convertToNewBase = (base10Value, targetBase) => {
    const largestPower = getLargestPower(base10Value, targetBase);
    let remainder = base10Value;
    let digits = [];

    for (let power = largestPower; power >= 0; power--) {
         let digit = Math.floor(remainder / Math.pow(targetBase, power));
         remainder = remainder - (digit * Math.pow(targetBase, power));
         digits.push(digit);
    }

    return digits;
};

// Returns the largest power of a given base that doesn't exceed a given base 10 value
const getLargestPower = (base10Value, targetBase) => {
    let power = 0;

    while (targetBase * Math.pow(targetBase, power) < base10Value) { 
        power++; 
    }

    return power;
}

class Converter {
    convert(originalDigits, originalBase, targetBase) {
        this.validateInput(originalDigits, originalBase, targetBase);

        const base10Value = convertToBase10(originalDigits, originalBase);

        return convertToNewBase(base10Value, targetBase);
    }
    validateInput(originalDigits, originalBase, targetBase) {
        if (originalBase === undefined || originalBase <= 1 || !Number.isInteger(originalBase)) {
            throw new Error('Wrong input base');                        
        }
        if (targetBase === undefined || targetBase <= 1 || !Number.isInteger(targetBase)) {
            throw new Error('Wrong output base');                       
        }
        if (originalDigits.length === 0) {                              // Empty list
            throw new Error('Input has wrong format');
        }
        if (originalDigits.length > 1 && originalDigits.every(digit => digit === 0)) {  
            throw new Error('Input has wrong format');                  // Multiple zeros
        }
        if (originalDigits.length > 1 && originalDigits[0] === 0) {
            throw new Error('Input has wrong format');                  // Leading zeros
        }
        if (originalDigits.some(digit => digit < 0)) {
            throw new Error('Input has wrong format');                  // Negative digit
        }
        if (originalDigits.some(digit => digit >= originalBase)) {
            throw new Error('Input has wrong format');                  // Invalid positive digit
        }
    }
}

module.exports = Converter;

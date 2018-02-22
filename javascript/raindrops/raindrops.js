const getFactors = (input) => {
    let factor = input;
    let factorArray = [];

    while (factor > 0) {
        if (input % factor === 0) { factorArray.push(factor); }
        factor--;
    }

    return factorArray;
}

class Raindrops {
    convert(input) {
        const factors = getFactors(input).reverse();    // Reversing to match the process ordering the tests want
        let returnString = '';

        factors.forEach((factor) => {
            if (factor === 3) { returnString += 'Pling'; }
            else if (factor === 5) { returnString += 'Plang'; }
            else if (factor === 7) { returnString += 'Plong'; }
        });

        return returnString.length > 0 ? returnString : input.toString();
    }
}

module.exports = Raindrops;

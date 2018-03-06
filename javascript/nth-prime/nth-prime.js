const isPrime = num => {
    if (num <= 1) { return false; }
    if (num === 2) { return true; }
    if (num % 2 === 0) { return false; }
    for (let i = 3, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false; 
    return num !== 1;
}

const prime = {
    nth: (n) => {
        if (n <= 0) { throw new Error('Prime is not possible'); }
        
        let countedPrimes = 0;
        let currentNumber = 1;

        while (countedPrimes !== n) {
            currentNumber++;
            if (isPrime(currentNumber)) {
                countedPrimes++;
            }
        }

        return currentNumber;
    }
};

module.exports = prime;

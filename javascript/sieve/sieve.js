// Creates an array of numbers from start to end inclusive
const fillRange = (start, end) => {
    return Array(end - start + 1)
        .fill()
        .map((item, index) => start + index);
};

const isPrime = num => {
    if (num <= 1) { return false; }
    if (num === 2) { return true; }
    if (num % 2 === 0) { return false; }
    for (let i = 3, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false; 
    return num !== 1;
}

class Sieve {
    constructor(max) {
        this.max = max;
        this.setPrimes();
    }
    nullOutMultiples(candidates, number) {
        let multiple = number * 2;

        while (multiple < this.max) {
            candidates[multiple] = null;
            multiple += multiple;
        }
    }
    setPrimes() {
        const candidates = fillRange(0, this.max);

        /*
            Iterate through the array of 0 - this.max
            If the number is determined to be non-prime or a multiple of a prime, null it out
            If you visit a null entry, don't bother checking it, otherwise check if it's prime.
            If the number is prime, null out multiples of that number onward to the end of the array.
            This allows us to skip expensive prime checking for the multiples
        */

        for (let index = 0; index <= candidates.length; index++) {
            if (candidates[index] === null) { continue; }
            if (isPrime(candidates[index])) { this.nullOutMultiples(candidates, candidates[index]); }
            else { candidates[index] = null; }
        }

        // Once we're done, return all of the non-null entries in the candidates array.
        this.primes = candidates.filter((number) => number !== null);
    }
}

module.exports = Sieve;

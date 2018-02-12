module.exports = {
    for : (input) => {
        const primeFactors = [];
        let reduced = input;
        let currentFactor = 2;

        while (reduced > 1) {
            if (reduced % currentFactor === 0) {
                primeFactors.push(currentFactor);
                reduced = reduced / currentFactor;
            } else {
                currentFactor++;
            }
        }

        return primeFactors;
    }
}
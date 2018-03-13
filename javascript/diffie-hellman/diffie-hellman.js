const isPrime = num => {
    if (num <= 1) { return false; }
    if (num === 2) { return true; }
    if (num % 2 === 0) { return false; }
    for (let i = 3, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false; 
    return num !== 1;
};

class DiffieHellman {
    constructor(p, g) {
        this.validateConstructorParameters(p, g);
        this.p = p;
        this.g = g;
    }
    getPublicKeyFromPrivateKey(privateKey) {
        if (privateKey <= 1) {
            throw new Error('Private key must be greater than 1.');
        }
        if (privateKey === this.p || privateKey === (this.p + 1)) {
            throw new Error('Invalid private key.');
        }

        return Math.pow(this.g, privateKey) % this.p;
    }
    getSharedSecret(privateKey, publicKey) {
        return Math.pow(publicKey, privateKey) % this.p;
    }
    validateConstructorParameters(p, g) {
        if (p <= 0 || g <= 0) {
            throw new Error('Constructor arguments are out of range.');
        }
        if (!isPrime(p) || !isPrime(g)) {
            throw new Error('Constructor arguments are not prime.');
        }
    }
}

module.exports = DiffieHellman;

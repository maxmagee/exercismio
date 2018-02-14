class Hamming {
    compute(strandA, strandB) {
        if (strandA.length !== strandB.length) { throw new Error('DNA strands must be of equal length.'); }
        
        let hammingDistance = 0;

        for (let i = 0; i < strandA.length; i++) {
            if (strandA.charAt(i) !== strandB.charAt(i)) { hammingDistance++; }
        }

        return hammingDistance;
    }
};

module.exports = Hamming;

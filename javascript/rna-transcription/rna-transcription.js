class DnaTranscriber {
    constructor() {
        this.dnaToRnaMap = {
            "C" : "G",
            "G" : "C",
            "A" : "U",
            "T" : "A"
        };
    }

    toRna(input) {
        return input.split("").map((char) => {
            if (!this.dnaToRnaMap[char]) { throw new Error('Invalid input'); }
            return this.dnaToRnaMap[char];
        }).join("");
    }
};

module.exports = DnaTranscriber;
class Pangram {
    constructor(input) {
        this.input = input.toLowerCase();
    }

    isPangram() {
        return "abcdefghijklmnopqrstuvwxyz".split("").every((char) => {
            return this.input.indexOf(char) > -1;
        });
    }
};

module.exports = Pangram;
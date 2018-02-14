class Isogram {
    constructor(input) {
        this.input = input;
    }
    isIsogram() {
        // Originally I was checking for certain ASCII values for letters a-z, but the Unicode-only tests failed
        const isNotSpaceOrHyphen = (character) => {
            return !(character === ' ' || character === '-');
        };
        return this.input
            .toLowerCase()
            .split('')
            .filter(isNotSpaceOrHyphen)
            .every((character, index, arr) => {
                return arr.indexOf(character, index + 1) === -1;
            });
    }
};

module.exports = Isogram;
